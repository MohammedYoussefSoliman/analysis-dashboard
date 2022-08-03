import React from "react";
import { useAppSelector } from "hooks";
import type { InteractionItem } from "chart.js";
import slugify from "react-slugify";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, getElementAtEvent } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
import Typography from "components/Typography";
import { Flex } from "components/Grids";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const months = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 5,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

type DataArray = {
  value: number;
  month: number;
};

const dataSetBuilder = (array: DataArray[]) => {
  const dataSet = Array.from({ length: 12 }, (d) => d);
  array.forEach((item) => {
    dataSet[item.month - 1] = item.value;
  });
  return dataSet.map((item) => {
    if (!item) return null;
    return item;
  });
};

export default function Chart() {
  const navigate = useNavigate();
  const { coursesState, ui } = useAppSelector((state) => state);
  const { mode } = ui;
  const { filteredCourses, checkedSchool, schoolsExtras } = coursesState;
  const theme = useTheme();
  const ref = React.useRef<any>(null);
  const { t } = useTranslation();
  const labels = [
    t("Jan"),
    t("Feb"),
    t("Mar"),
    t("Apr"),
    t("May"),
    t("Jun"),
    t("Jul"),
    t("Aug"),
    t("Sep"),
    t("Oct"),
    t("Nov"),
    t("Dec"),
  ];

  const options = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        display: true,
        grid: {
          color: theme.colors.shades[300],
        },
      },
      x: {
        display: true,
        grid: {
          color: theme.colors.shades[300],
        },
      },
    },
    elements: {
      point: {
        radius: 6,
        hoverRadius: 10,
        borderWidth: 3,
        hoverBorderWidth: 3,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      ...checkedSchool.map((school) => ({
        label: school,
        data: dataSetBuilder(
          filteredCourses
            .filter((course) => course.school === school)
            .map((course) => ({
              value: course.lessons,
              month: months[course.month],
            })),
        ),
        borderColor: schoolsExtras.find((extra) => extra.name === school)
          ?.color[mode],
        borderWidth: 2,
        yAxisID: "y",
      })),
    ],
  };

  const printDatasetAtEvent = (dataset: InteractionItem[]) => {
    if (!dataset.length) return;
    const { datasetIndex } = dataset[0];
    const slug = slugify(data.datasets[datasetIndex].label.toLocaleLowerCase());
    navigate(`/school/${slug}`);
  };

  if (checkedSchool.length === 0)
    return (
      <Flex justify="center" align="center" fullWidth fullHeight>
        <Typography.P1 text="filterToViewData" />
      </Flex>
    );
  return (
    <div style={{ width: "100%" }}>
      <Line
        ref={ref}
        data={data}
        options={options}
        onClick={(event) => {
          printDatasetAtEvent(getElementAtEvent(ref?.current, event));
        }}
      />
    </div>
  );
}
