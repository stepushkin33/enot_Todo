import { keyframes } from "@emotion/react";

const run = keyframes`
0%{
transform: translate(0, 0);
}

100%{
transform: translate(-100%, 0);
}
`;

export const lineStyle = {
  display: "inline-block",
  animation: `${run} 15s linear 0s infinite`,
  whiteSpace: "nowrap",
  paddingLeft: "100%",
  position: "fixed",
  bottom: "5px",
  zIndex: "10",
  pointerEvents: "none",
};