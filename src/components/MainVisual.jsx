import { mq } from "../styles/functions";
import { css } from "@emotion/react";

export default function MainVisual() {
  // css
  const mv = css`
    position: relative;
    line-height: 1;
    height: 100vh;
  `;
  const center = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    h1 {
      font-size: 4.6rem;
      font-weight: bold;
      ${mq("md")} {
        font-size: 7rem;
      }
      background-size: 200% 100%;
      background-position-x: 100%;
      background-image: linear-gradient(
        -90deg,
        #eee 0%,
        #eee 50%,
        #1600ff 51%,
        #a200ff 64%,
        #ff2465 80%,
        #ff9400 100%
      );
      background-clip: text;
      color: transparent;
      animation: h1 2.5s cubic-bezier(0.25, 1, 0.5, 1) both;

      @keyframes h1 {
        0% {
          opacity: 0;
          transform: translate(-15%);
        }
        40% {
          opacity: 1;
          transform: translate(0);
        }
        45% {
          background-position-x: 100%;
        }
        100% {
          background-position-x: 0;
        }
      }
    }

    p {
      margin-top: 1rem;
      font-size: 1.6rem;
      ${mq("md")} {
        font-size: 2rem;
      }
    }
  `;

  return (
    <>
      <div css={mv}>
        <div css={center}>
          <h1>Transition</h1>
          <p>Shimon Dotera's site ver.4</p>
        </div>
      </div>
    </>
  );
}
