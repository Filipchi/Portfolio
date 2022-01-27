import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import SmallTitle from "./SmallTitle";
import SchoolIcon from "@material-ui/icons/School";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import ResumeItem from "./ResumeItem";

function Resume() {
  const school = <SchoolIcon />;
  const bookmarks= <BookmarksIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"Apr 2021 - Dec 2021"}
            title={"Diploma in Mobile Application Development"}
            subTitle={"Universidad Tecnológica de Pereira | MisionTic2022"}
            text={
              "Web application development with MEVN stack and a mobile application in Java using scrum agile methodology."
            }
          />
          <ResumeItem
            year={"Jan 2015 - Dec 2020"}
            title={"Physics Enginnering"}
            subTitle={"Universidad Tecnológica de Pereira"}
            text={
              "Training in electronics, programming, mathematics, metrology, materials science, physics and research skills."
            }
          />
        </div>

        <div className="small-title u-small-title-margin">
          <SmallTitle icon={bookmarks} title={"Further Training"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"Jan 2022"}
            title={"Complete Course of React"}
            subTitle={"Udemy"}
            text={
              "Review of the fundamental concepts of React such as Components, React Hooks, Context Api, React Router, etc."
            }
          />
          <ResumeItem
            year={"Oct 2021"}
            title={"Essential JavaScript"}
            subTitle={"LinkedIn Learning"}
            text={
              "Review of the fundamentals of modern JavaScript in ES6 version with emphasis on object-oriented programming OOP."
            }
          />
          <ResumeItem
            year={"May 2021"}
            title={"Learn SCRUM"}
            subTitle={"LinkedIn Learning"}
            text={
              "Review of the main fundamentals to start organizing your projects by reducing unnecessary work and increasing productivity."
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
