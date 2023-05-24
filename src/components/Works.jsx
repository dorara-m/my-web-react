import { mq } from "../styles/functions";
import { css } from "@emotion/react";

export default function MainVisual() {
  const worksStyle = css`
    // worksが飛び出ているので
    margin-bottom: -100px;
    ul {
      width: 300px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 100px 100px 100px;
      grid-template-rows: 100px 100px;
      grid-template-areas: "itemB itemA itemA" "itemC itemC itemD";
      ${mq("md")} {
        width: 600px;
        grid-template-columns: 200px 200px 200px;
        grid-template-rows: 200px 200px;
      }
      li:first-of-type {
        grid-area: itemA;
      }
      li:nth-of-type(2) {
        grid-area: itemB;
      }
      li:nth-of-type(3) {
        grid-area: itemC;
      }
      li:nth-of-type(4) {
        grid-area: itemD;
      }
    }
    li {
      a {
        display: block;
        height: 100%;
        position: relative;
        overflow: hidden;
        background: #fff;
        &::after {
          content: "";
          display: block;
          opacity: 0;
          transition: 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          position: absolute;
        }
        &:hover {
          &::after {
            opacity: 1;
          }
          span {
            opacity: 1;
          }
        }
      }
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: none;
        width: auto;
        height: 100%;
      }
      span {
        position: absolute;
        width: 95%;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        text-align: center;
        font-size: 15px;
        font-weight: bold;
        opacity: 0;
        transition: 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
      }
    }
  `;

  const works1 = [
    {
      href: "https://vite-react-oshi-matome-zprh.vercel.app/",
      img: "https://i.gyazo.com/3950e84ac6ecfc7379eb92e800211bcb.png",
      text: "推しをまとめろ<br>「Oshi Matome」",
    },
    {
      href: "https://animatome.netlify.app/",
      img: "https://images.microcms-assets.io/assets/fc5a67cf51fb4ac3a0eb5f358bf160d6/fb28dbf7337b456e83d631224c9fdb6e/iine.gif",
      text: "cssアニメがたくさん<br>「アニマトメ」",
    },
    {
      href: "https://bouken-no-syo.netlify.app/",
      img: "https://images.microcms-assets.io/assets/e502aee9648f4b008c0ba56f3c8de29d/dd4a09b848b24ff99d0a948c7f18486f/thumb.png",
      text: "ゲームのルールをまとめた<br>「ぼうけんのしょ」",
    },
    {
      href: "https://hello-koala.netlify.app/",
      img: "https://hello-koala.netlify.app/static/media/my-koala.4a0297a8.jpg",
      text: "コアラが挨拶してくれる<br>「Hello Koala!」",
    },
  ];
  // @todo gridのcssを右寄り、左よりの2パターン用意。iが偶数の時と奇数の時で交互にcssがあたるようにする。ulはやめたい。divでwrapしたのが交互にくる。mapがつかえない。2つセットが繰り返せばいい？
  const works2 = [
    {
      href: "http://softmatter.phys.kindai.ac.jp/",
      img: "http://softmatter.phys.kindai.ac.jp/assets/images/weblogo.png",
      text: "父、堂寺知成の個人サイト",
    },
    {
      href: "https://dorara-m.github.io/Janken2/",
      img: "https://dorara-m.github.io/Janken2/images/win.jpg",
      text: "じゃんけん",
    },
  ];

  return (
    <>
      <div css={worksStyle}>
        <ul>
          {works1.map((work, i) => {
            return (
              <li key={i}>
                <a href={work.href} target="_blank" rel="noopener noreferrer">
                  <img src={work.img} alt={work.title} />
                  <span dangerouslySetInnerHTML={{ __html: work.text }} />
                </a>
              </li>
            );
          })}
        </ul>
        <ul>
          {works2.map((work, i) => {
            return (
              <li key={i}>
                <a href={work.href} target="_blank" rel="noopener noreferrer">
                  <img src={work.img} alt={work.title} />
                  <span dangerouslySetInnerHTML={{ __html: work.text }} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
