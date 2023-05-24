import "./styles/reset.scss";
import { css } from "@emotion/react";

import MainVisual from "./components/MainVisual";
import Works from "./components/Works";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import ReleaseNotes from "./components/ReleaseNotes";
import Heading2 from "./components/Heading2";

const globalStyle = css`
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  line-height: 2;
  color: #333;
  letter-spacing: 0.02em;
`;
const sectionStyle = css`
  padding: 10rem 0 15rem;
  &:nth-of-type(even) {
    background-color: #ebebeb;
  }
`;
const innerStyle = css`
  padding: 0 32px;
  max-width: 600px;
  margin: 0 auto;
`;

function App() {
  return (
    <div css={globalStyle}>
      <MainVisual />
      {/* ここのsection繰り返しをもっとうまく書けないか?v-html的なのはreactと相性悪いか？ */}
      <section css={sectionStyle}>
        <div css={innerStyle}>
          <Heading2 text="Works" />
          <Works />
        </div>
      </section>
      <section css={sectionStyle}>
        <div css={innerStyle}>
          <Heading2 text="Hello. I'm …" />
          <Profile />
        </div>
      </section>
      <section css={sectionStyle}>
        <div css={innerStyle}>
          <Heading2 text="Skills" />
          <Skills />
        </div>
      </section>
      <section css={sectionStyle}>
        <div css={innerStyle}>
          <Heading2 text="Release notes" />
          <ReleaseNotes />
        </div>
      </section>
    </div>
  );
}

export default App;
