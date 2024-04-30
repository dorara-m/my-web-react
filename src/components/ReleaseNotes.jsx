import { mq } from "../styles/functions";
import { css } from "@emotion/react";
import Section from "./Section";

const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${mq("md")} {
    gap: 16px;
  }

  li {
    display: grid;
    gap: 5px 10px;
    grid-template-columns: 80px min-content 1fr;
    grid-template-rows: 1fr max-content;
    grid-template-areas: "time version blank" "text text text";
    ${mq("md")} {
      grid-template-rows: 1fr;
      grid-template-areas: "time version text";
    }
    time {
      grid-area: time;
      font-weight: bold;
      font-size: 15px;
      line-height: 1;
      font-family: var(--font-en);
    }
  }
`;
const version = css`
  grid-area: version;
  height: 18px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  border-radius: 10px;
  background-color: lightblue;
  font-size: 12px;
  font-family: var(--font-en);
  font-weight: 500;
  transform: translateY(-2px);
  ${mq("md")} {
    /* transform: translate(0); */
  }
  &::before {
    content: "ver.";
  }
`;
const text = css`
  grid-area: text;
  line-height: 1.5;
  font-size: 14px;
  ${mq("md")} {
    font-size: 16px;
    transform: translateY(-8px);
  }
`;

export default function ReleaseNotes() {
  // githubのコミットまんま反映できたらアチィ
  const notes = [
    {
      date: "2024.04.30",
      version: "4.2",
      text: "プロフィールを更新しました。",
    },
    {
      date: "2023.06.12",
      version: "4.1.2",
      text: "worksに「Day Formatter」を追加しました。",
    },
    {
      date: "2023.06.11",
      version: "4.1.1",
      text: "worksに「ぬめちゃと学ぶ。やさしいHTML 公式サイト」を追加しました。",
    },
    {
      date: "2023.05.30",
      version: "4.1.0",
      text: "開発環境をReactに変更しました。",
    },
    {
      date: "2023.05.05",
      version: "4.0.1",
      text: "spでの表示崩れに対応しました。リリースノートを追加しました。",
    },
    {
      date: "2023.05.03",
      version: "4",
      text: "ver.4をリリースしました。",
    },
    {
      date: "2022.11.06",
      version: "4",
      text: "ver.4の開発を開始しました。",
    },
  ];

  return (
    <>
      <Section heading="Release Notes">
        <ul css={wrap}>
          {notes.map((note, i) => {
            return (
              <li key={i}>
                <time dateTime={note.date}>{note.date}</time>
                <div css={version}>{note.version}</div>
                <div css={text}>{note.text}</div>
              </li>
            );
          })}
        </ul>
      </Section>
    </>
  );
}
