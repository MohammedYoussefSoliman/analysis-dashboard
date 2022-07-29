import React from "react";
import { useTheme } from "@emotion/react";
import Card from "components/Card";
import { CheckBoxIcon, CampIcon } from "assets/svgs";
import Input from "./styles";
import { CheckedCardType } from "../types";
import { Flex } from "../../Grids";
import Typography from "../../Typography";

export default function CheckCard({
  active,
  name,
  color,
  count,
  label,
  checked,
  ...props
}: CheckedCardType) {
  const theme = useTheme();

  const boxColor = checked ? color : theme.colors.shades[400];
  return (
    <Card color={boxColor}>
      <Input name={name} {...props} />
      <Flex direction="row-reverse" gap="32px" fullWidth>
        <CheckBoxIcon checked={checked!} />
        <Flex direction="column" gap="8px" flex={1}>
          <Flex gap="4px" align="flex-end">
            <Typography.H5 color={boxColor} text={count} />
            <Typography.H6 color={boxColor} text={label} />
          </Flex>
          <Flex align="center" gap="8px">
            <CampIcon color={boxColor} />
            <Typography.P3 color={boxColor} text={label} />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
