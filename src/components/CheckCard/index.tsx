import React from "react";
import { useTheme } from "@emotion/react";
import tinycolor from "tinycolor2";
import Card from "components/Card";
import { CheckBoxIcon, CampIcon } from "assets/svgs";
import { Flex } from "components/Grids";
import Typography from "components/Typography";
import { randomColorsGenerator } from "helpers/functions";
import { useAppDispatch } from "hooks";
import { setCheckedSchool } from "state/courses/slice";
import { CheckedCardType } from "./types";

export default function CheckCard({
  count,
  label,
  value,
  city,
}: CheckedCardType) {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const [checked, setChecked] = React.useState<boolean>(false);
  const [color, setColor] = React.useState<string>("");
  const boxColor = checked ? color : theme.colors.opposite[200];

  React.useEffect(() => {
    setColor(randomColorsGenerator("dark"));
  }, []);
  return (
    <Card
      onClick={() => {
        setChecked(!checked);
        dispatch(
          setCheckedSchool({
            checked: !checked,
            value,
          }),
        );
      }}
      color={boxColor}
      withBorder
    >
      <Flex p={16} gap="32px" align="center" fullWidth>
        <CheckBoxIcon
          color={tinycolor(boxColor).darken(10).toString()}
          checked={checked}
        />
        <Flex direction="column" gap="8px" flex={1}>
          <Flex gap="4px" align="flex-end">
            <Typography.H5
              color={tinycolor(boxColor).darken(10).toString()}
              text={count}
            />
            <Typography.H6
              color={tinycolor(boxColor).darken(10).toString()}
              text={label}
            />
          </Flex>
          <Flex align="center" gap="8px">
            <CampIcon color={tinycolor(boxColor).darken(10).toString()} />
            <Typography.P3
              color={tinycolor(boxColor).darken(10).toString()}
              text={city}
            />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
