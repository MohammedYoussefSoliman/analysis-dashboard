import LIGHT_WOFF from "./light/SegoeUILight.woff";
import LIGHT_WOFF2 from "./light/SegoeUILight.woff2";
import REGULAR_WOFF from "./regular/SegoeUIRegular.woff";
import REGULAR_WOFF2 from "./regular/SegoeUIRegular.woff2";
import SEMIBOLD_WOFF from "./semiBold/SegoeUISemiBold.woff";
import SEMIBOLD_WOFF2 from "./semiBold/SegoeUISemiBold.woff2";
import BOLD_WOFF from "./bold/SegoeUIBold.woff";
import BOLD_WOFF2 from "./bold/SegoeUIBold.woff2";
import { FontFaceType } from "./types";

const SegeoUIFont: FontFaceType = {
  name: "segeoUI",
  weights: [
    {
      weightName: "light",
      woff: LIGHT_WOFF,
      woff2: LIGHT_WOFF2,
      weight: 300,
    },
    {
      weightName: "regular",
      woff: REGULAR_WOFF,
      woff2: REGULAR_WOFF2,
      weight: 400,
    },
    {
      weightName: "semiBold",
      woff: SEMIBOLD_WOFF,
      woff2: SEMIBOLD_WOFF2,
      weight: 500,
    },
    {
      weightName: "bold",
      woff: BOLD_WOFF,
      woff2: BOLD_WOFF2,
      weight: 600,
    },
  ],
};

export default SegeoUIFont;
