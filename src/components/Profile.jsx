import { mq } from "../styles/functions";
import { css } from "@emotion/react";

export default function MainVisual() {
  const profileStyle = css`
    text-align: center;

    img {
      width: 200px;
      margin-bottom: 30px;
    }
    p {
      text-align: left;
      ${mq("md")} {
        text-align: center;
      }
    }
    p + p {
      margin-top: 1.8em;
    }
    a {
      color: rgb(135, 167, 235);
      font-weight: bold;
      &:hover {
        text-decoration: underline;
      }
    }
    strong {
      font-weight: bold;
    }
    span {
      font-size: 13px;
    }
  `;

  return (
    <>
      <div css={profileStyle}>
        <img src="me.png" alt="雨東風ぬめちゃ" />
        <p>
          <strong>堂寺志門（どうてらしもん）</strong>
          <br />
          <span>≒ 雨東風ぬめちゃ</span>
        </p>
        <p>
          フロントエンドエンジニアを5年、ゲーム実況を3年やっている人。
          <br />
          見習いギタリスト＆イラストレーター＆歌い手。
          <br />
          ものづくりが好き。おしゃべりが好き。シュッとしたサイトが好き。
          <br />
          社会人5年生(27)♂。
        </p>
        <p>
          ゲーム・アニメ・声優・Vtuber・音楽・ご飯がLove。
          <br />
          特技はボイパ。
        </p>
        <p>
          <a
            href="https://www.youtube.com/channel/UCR5b4PoQ3ainPNFD5bk7enA"
            target="_blank"
            rel="noopener noreferrer"
          >
            チャンネル登録おねがいします。まじで。まっっじで
          </a>
        </p>
      </div>
    </>
  );
}
