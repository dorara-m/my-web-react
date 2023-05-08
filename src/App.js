import "./styles/reset.scss";
import { css } from "@emotion/react";

import MainVisual from "./components/MainVisual";

const globalStyle = css`
  font-family: "Ubuntu", sans-serif;
`;

function App() {
  return (
    <div css={globalStyle}>
      <MainVisual />
    </div>
  );
}

export default App;
