import { css } from "@styles/stitchesConfig";

export const customButtonStyle = css("button", {
  border: "none",
  borderRadius: "$card",
  width: "230px",
  height: "230px",
  cursor: "pointer",
  boxShadow: "$0",

  span: {
    fontSize: "$5",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },

  variants: {
    type: {
      lightBlue: {
        backgroundColor: "$genericButtonBg",
        color: "$dark_text",
        "&:hover": {
          backgroundColor: "$light_text",
        },
      },
      darkBlue: {
        backgroundColor: "$cardButtonBg",
        color: "$light_text",
      },
    },
  },
});
