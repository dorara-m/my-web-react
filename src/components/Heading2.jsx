import { mq } from "../styles/functions";
import { css } from "@emotion/react";

export default function Heading2(props) {
  // css
  const h2 = css`
    font-size: 45px;
    line-height: 1;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: bold;
  `;

  return (
    <>
      <h2 css={h2}>{props.text}</h2>
    </>
  );
}
