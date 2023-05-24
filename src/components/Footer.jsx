import { mq } from "../styles/functions";
import { css } from "@emotion/react";

export default function Heading2(props) {
  // css
  const footer = css`
    background-color: #000;
    padding: 3rem 0;
    color: #fff;
    text-align: center;
    font-size: 0.8rem;
    ${mq("md")} {
      padding: 4rem 0;
    }
  `;

  return (
    <>
      <footer css={footer}>
        <p>Created by numecha. @20230503</p>
      </footer>
    </>
  );
}
