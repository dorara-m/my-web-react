import { css } from "@emotion/react";
import { mq } from "../styles/functions";

import React from "react";
import Heading2 from "./Heading2";

const sectionStyle = css`
  padding: 5rem 0;
  &.-gray {
    background-color: #ebebeb;
  }
  ${mq("md")} {
    padding: 5rem 0 6rem;
  }
`;
const containerStyle = css`
  padding: 0 32px;
  max-width: 600px;
  margin: 0 auto;
`;

export default function Section(props) {
  return (
    <section css={sectionStyle} className={props.isGray && "-gray"}>
      <div css={containerStyle}>
        <Heading2 text={props.heading} />
        {props.children}
      </div>
    </section>
  );
}
