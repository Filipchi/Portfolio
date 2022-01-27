import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"REACT.JS"} width={"50%"} text={"50%"} />
          <ProgressBar title={"VUE.JS"} width={"65%"} text={"65%"} />
          <ProgressBar title={"JAVASCRIPT"} width={"67%"} text={"67%"} />
          <ProgressBar title={"PYTHON"} width={"58%"} text={"58%"} />
          <ProgressBar title={"JAVA"} width={"80%"} text={"80%"} />
          <ProgressBar title={"SQL"} width={"40%"} text={"40%"} />
          <ProgressBar title={"HTML5"} width={"90%"} text={"90%"} />
          <ProgressBar title={"CSS3"} width={"80%"} text={"80%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
