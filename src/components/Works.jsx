import { mq } from "../styles/functions";
import { css } from "@emotion/react";
import Section from "./Section";

export default function MainVisual() {
  const worksStyle = css`
    ul {
      width: 300px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      ${mq("md")} {
        width: 600px;
      }
      /* 1,4,5,8,9 */
      li:first-of-type {
        flex-basis: 66.6%;
      }
      li:nth-of-type(4n + 1) {
        flex-basis: 66.6%;
      }
      li:nth-of-type(4n) {
        flex-basis: 66.6%;
      }
      /* 2,3,6,7,10,11 */
      li:nth-of-type(2) {
        flex-basis: 33.3%;
      }
      li:nth-of-type(4n + 2) {
        flex-basis: 33.3%;
      }
      li:nth-of-type(3) {
        flex-basis: 33.3%;
      }
      li:nth-of-type(4n + 3) {
        flex-basis: 33.3%;
      }
    }
    li {
      a {
        height: 100px;
        display: block;
        position: relative;
        overflow: hidden;
        background: #fff;
        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          transition: 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
        }
        ${mq("md")} {
          height: 200px;
          &:hover {
            &::after {
              opacity: 1;
            }
            span {
              opacity: 1;
            }
          }
        }
      }
      img {
        max-width: 100%;
        object-fit: cover;
        width: 100%;
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
        font-size: 16px;
        font-weight: bold;
        opacity: 0;
        transition: 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
      }
    }
  `;

  const works = [
    {
      href: "https://day-formatter.vercel.app/",
      img: "https://i.gyazo.com/9cae7072600b86acb7e1ae69f1ed5913.png",
      text: "日付を+7日してくれます",
    },
    {
      href: "https://dorara-m.github.io/yasac/",
      img: "https://dorara-m.github.io/yasac/assets/images/mv.jpg",
      text: "やさしい<br>HTML講座<br>公式サイト",
    },
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
      text: "パーティーゲームの<br>ルール解説<br>「ぼうけんのしょ」",
    },
    {
      href: "https://hello-koala.netlify.app/",
      img: "https://hello-koala.netlify.app/static/media/my-koala.4a0297a8.jpg",
      text: "コアラが挨拶してくれる<br>「Hello Koala!」",
    },
    {
      href: "http://softmatter.phys.kindai.ac.jp/",
      img: "logo-tod.png",
      text: "父<br>堂寺知成の<br>個人サイト",
    },
    {
      href: "https://dorara-m.github.io/Janken2/",
      img: "https://dorara-m.github.io/Janken2/images/win.jpg",
      text: "じゃんけん",
    },
  ];

  return (
    <>
      <Section heading="Works" isGray>
        <div css={worksStyle}>
          <ul>
            {works.map((work, i) => {
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
      </Section>
    </>
  );
}
