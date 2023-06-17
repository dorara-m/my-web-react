import { mq } from "../styles/functions";
import { css } from "@emotion/react";
import Section from "./Section";

export default function MainVisual() {
  const profileStyle = css`
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 150px;
      ${mq("md")} {
        width: 250px;
      }
    }
    .textArea {
      margin-top: 48px;
      font-size: 14px;
      ${mq("md")} {
        font-size: 16px;
      }
    }
    .name {
      text-align: center;
      margin-bottom: 20px;
      line-height: 1;
      .main {
        font-size: 20px;
        font-weight: bold;
      }
      .sub {
        margin-top: 15px;
        font-size: 14px;
      }
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
      font-weight: 500;
      &:hover {
        text-decoration: underline;
      }
    }
  `;

  return (
    <>
      <Section heading="Hello. I'm …">
        <div css={profileStyle}>
          <img src="me.png" alt="雨東風ぬめちゃ" />
          <div className="textArea">
            <div className="name">
              <div className="main">堂寺 志門（どうてらしもん）</div>
              <div className="sub">雨東風ぬめちゃ</div>
            </div>
            <p>
              フロントエンドエンジニアを5年、ゲーム実況を3年やっている人。
              <br />
              ギター、イラスト、歌を修行中。
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
                チャンネル登録お頼み申す…！
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
