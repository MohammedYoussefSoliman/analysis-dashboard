import React from "react";
import { useTheme } from "@emotion/react";
import { Flex } from "components/Grids";
import Typography from "components/Typography";
import Wrapper from "./styles";
import { TooltipPosition, TooltipType } from "./types";

export default function Tooltip({
  children,
  title,
  position = "top",
}: TooltipType) {
  const theme = useTheme();

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [forcedConfigs, setForcedConfigs] = React.useState<
    Array<TooltipPosition>
  >([]);
  const [hover, setHover] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (wrapperRef.current) {
      const configs: Array<TooltipPosition> = [];
      const elementHeight = wrapperRef.current.getBoundingClientRect().height;
      const elementWidth = wrapperRef.current.getBoundingClientRect().width;
      const width = elementWidth > 100 ? elementWidth : 100;
      const elementTop = wrapperRef.current.getBoundingClientRect().top;
      const elementDown = wrapperRef.current.getBoundingClientRect().bottom;
      const elementLeft = wrapperRef.current.getBoundingClientRect().left;
      const elementRight = wrapperRef.current.getBoundingClientRect().right;
      if (elementTop < elementHeight) {
        configs.push("bottom");
      }
      if (elementDown < elementHeight) {
        configs.push("top");
      }
      if (elementLeft < width) {
        configs.push("left");
      }
      if (window.innerWidth - elementRight < width - 20) {
        configs.push("right");
      }
      setForcedConfigs(configs);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperRef.current, hover]);

  return (
    <Wrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      position={position}
      forcedConfigs={forcedConfigs}
      ref={wrapperRef}
      data-testid="tooltip"
    >
      {hover && (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {typeof title === "string" ? (
            <Flex p={8} justify="center" align="center" className="content">
              <Typography.P3
                text={title}
                fontSize="14px"
                color={theme.colors.shades[100]}
              />
            </Flex>
          ) : (
            title
          )}
        </>
      )}
      {children}
    </Wrapper>
  );
}
