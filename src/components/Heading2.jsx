import { mq } from "../styles/functions";
import { css } from "@emotion/react";

export default function Heading2(props) {
  // css
  const h2 = css`
    font-size: 2.2rem;
    line-height: 1;
    text-align: center;
    margin-bottom: 3rem;
    font-weight: bold;
    font-family: var(--font-en);
    ${mq("md")} {
      font-size: 3rem;
      margin-bottom: 4rem;
    }
  `;

  return (
    <>
      <h2 css={h2}>{props.text}</h2>
    </>
  );
}
