const randomColors = require("randomcolor");

const randomColorsGenerator = (
  luminosity: "light" | "bright" | "dark",
  count?: number,
) => {
  return randomColors({
    luminosity,
    count,
  });
};

export default randomColorsGenerator;
