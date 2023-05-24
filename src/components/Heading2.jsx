import { mq } from "../styles/functions";
import { css } from "@emotion/react";

export default function Heading2(props) {
  // css
  const h2 = css`
    font-size: 2.8rem;
    line-height: 1;
    text-align: center;
    margin-bottom: 3rem;
    font-weight: bold;
    ${mq("md")} {
      font-size: 3rem;
    }
  `;

  return (
    <>
      <h2 css={h2}>{props.text}</h2>
    </>
  );
}
