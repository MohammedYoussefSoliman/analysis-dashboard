import React from "react";
import { LanguageIcon, DarkModeIcon, LightModeIcon } from "assets/svgs";
import { Flex } from "components/Grids";
import Tooltip from "components/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage, changeThemeMode } from "state/ui/slice";
import { RootState } from "state";
import { IconButton } from "components/Buttons";
import { useTheme } from "@emotion/react";

export default function ActionBar() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { language, mode } = useSelector((state: RootState) => state.ui);
  return (
    <Flex align="center" gap="10px" persistentGap fullHeight>
      <Tooltip title="changeLanguage">
        <IconButton
          onClick={() =>
            dispatch(toggleLanguage(language === "en" ? "ar" : "en"))
          }
          Icon={LanguageIcon}
          color={theme.colors.opposite[200]}
          iconProps={{ lang: language }}
          withBorder
        />
      </Tooltip>
      <Tooltip title={mode === "dark" ? "lightMode" : "darkMode"}>
        <IconButton
          onClick={() =>
            dispatch(changeThemeMode(mode === "dark" ? "light" : "dark"))
          }
          Icon={mode === "dark" ? LightModeIcon : DarkModeIcon}
          color={theme.colors.opposite[200]}
          withBorder
        />
      </Tooltip>
    </Flex>
  );
}
