import { mq } from "../styles/functions";
import { css } from "@emotion/react";

export default function Footer(props) {
  // css
  const footer = css`
    background-color: #000;
    color: #fff;
    text-align: center;
    font-size: 0.8rem;
    padding: 2rem 0;
    ${mq("md")} {
      padding: 3rem 0;
    }
  `;

  return (
    <>
      <footer css={footer}>
        <p>Updated by numecha. @20250528</p>
      </footer>
    </>
  );
}
