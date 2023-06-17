import { mq } from "../styles/functions";
import { css } from "@emotion/react";
import Section from "./Section";

export default function MainVisual() {
  const skillsStyle = css`
    font-family: "Menlo", sans-serif;
    max-width: 400px;
    margin-right: auto;
    margin-left: auto;
    display: grid;
    gap: 15px;
    grid-template-columns: 1fr 1fr 1fr;
    li {
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #747474;
        text-align: center;
        color: #fff;
        height: 25px;
        font-size: 11px;
        line-height: 1;
        ${mq("md")} {
          font-size: 15px;
          height: 30px;
        }
        &.-gray {
          background-color: #999;
        }
      }
    }
  `;

  const skills = [
    {
      text: "HTML",
    },
    {
      text: "CSS",
    },
    {
      text: "JS",
    },
    {
      text: "Pug",
    },
    {
      text: "Scss",
    },
    {
      text: "jQuery",
    },
    {
      text: "Vue",
    },
    {
      text: "Nuxt",
      inProgress: true,
    },
    {
      text: "React",
    },
    {
      text: "Next",
      inProgress: true,
    },
    {
      text: "Astro",
    },
    {
      text: "gulp",
    },
    {
      text: "GitHub",
    },
    {
      text: "WordPress",
      inProgress: true,
    },
    {
      text: "MovableType",
    },
    {
      text: "Netlify",
    },
    {
      text: "Vercel",
    },
    {
      text: "FireBase",
    },
    {
      text: "MicroCMS",
    },
    {
      text: "Photoshop",
    },
    {
      text: "Premiere Pro",
    },
    {
      text: "YouTube",
    },
    {
      text: "OBS",
    },
    {
      text: "Studio One",
      inProgress: true,
    },
    {
      text: "Guitar",
      inProgress: true,
    },
  ];

  return (
    <>
      <Section heading="Skill Set" isGray>
        <ul css={skillsStyle}>
          {skills.map((skill, i) => {
            return (
              <li key={i}>
                <span className={skill.inProgress && "-gray"}>
                  {skill.text}
                </span>
              </li>
            );
          })}
        </ul>
      </Section>
    </>
  );
}
