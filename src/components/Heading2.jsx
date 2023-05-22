import { mq } from "../styles/functions";
import { css } from "@emotion/react";

export default function Heading2(props) {
  // css
  const h2 = css`
    font-size: 4.5rem;
    line-height: 1;
    text-align: center;
    margin-bottom: 2rem;
  `;

  return (
    <>
      <h2 css={h2}>{props.text}</h2>
    </>
  );
}
