import { keyframes, css } from "@stitches/react";

const alternate_rotate = keyframes({
  "0%": { transform: "rotate(0)" },
  "100%": { transform: "rotate(360deg)" },
});

export const loading = css("div", {
  zIndex: 100,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  display: "grid",
  placeContent: "center",
  position: "fixed",

  img: {
    width: "4rem",
    animation: `${alternate_rotate} 1.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite
    alternate both`,
  },
});
