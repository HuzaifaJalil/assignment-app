import React from "react";
import projectImage from "../../images/projects-img.svg";
import clientsImage from "../../images/clients-img.svg";
import userImage from "../../images/user-img.svg";
import { AchievementWrapper } from "./Achievement.Styles";
import { IncrementingAchievement } from "../../components";

export const Achievement = () => {
  return (
    <AchievementWrapper> 
      <IncrementingAchievement
        initialValue={0}
        finalValue={45000}
        imageSrc={projectImage}
        alt="Projects Completed"
        name="PROJECTS COMPLETED"
      />

      <IncrementingAchievement
        initialValue={0}
        finalValue={3500}
        imageSrc={clientsImage}
        alt="Satisfied Clients"
        name="Satisfied Clients"
      />

      <IncrementingAchievement
        initialValue={0}
        finalValue={325}
        imageSrc={userImage}
        alt="Experts"
        name="Experts"
      />

      <IncrementingAchievement
        initialValue={0}
        finalValue={98}
        imageSrc={userImage}
        alt="Customer Rating"
        name="CUSTOMER RATING"
      />
    </AchievementWrapper>
  );
};
