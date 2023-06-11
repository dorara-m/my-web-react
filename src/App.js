import "./styles/reset.scss";
import "./styles/global.scss";
import { css } from "@emotion/react";
import { mq } from "./styles/functions";

import MainVisual from "./components/MainVisual";
import Works from "./components/Works";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import ReleaseNotes from "./components/ReleaseNotes";
import Heading2 from "./components/Heading2";
import Footer from "./components/Footer";

const sectionStyle = css`
  padding: 5rem 0;
  &:nth-of-type(odd) {
    background-color: #ebebeb;
  }
  ${mq("md")} {
    padding: 5rem 0 6rem;
  }
`;
const innerStyle = css`
  padding: 0 32px;
  max-width: 600px;
  margin: 0 auto;
`;

function App() {
  return (
    <div className="app">
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
      <Footer />
    </div>
  );
}

export default App;
