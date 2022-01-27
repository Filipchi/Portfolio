import React from "react";
import styled from "styled-components";
import resume from "../img/resume.jpeg";
import DownloadButton from "./DownloadButton";

function ImageSection() {

  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>
          I'm <span>Jhon Fredy Ospina</span>
        </h4>
        <p className="paragraph">
        I am a person with a strong desire to learn and explore the 
        different tools that programming offers. In addition, in my 
        training as a physics engineer, I consider myself like a 
        person with outstanding analytical skills. <br /> <br />

        Currently, I am in search of my first job in which 
        I can put into practice the knowledge I have acquired.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>English Level</p>
            <p>Location</p>
          </div>
          <div className="info">
            <p>: Jhon Fredy Ospina Galeano</p>
            <p>: 23</p>
            <p>: B1 </p>
            <p>: Risaralda, Colombia</p>
          </div>
        </div>
        <DownloadButton title={"View CV"} />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    text-align: center;
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    padding: 0.8em;
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
