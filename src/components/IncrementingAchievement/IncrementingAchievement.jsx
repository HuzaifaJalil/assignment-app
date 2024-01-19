import React, { useState, useEffect } from "react";
import { AchievementCard, AchievementCount, AchievementLogo, AchievementName } from "./IncrementingAchievement.Styles";



export const IncrementingAchievement = ({ initialValue, finalValue, imageSrc, alt, name }) => { 
    const [currentValue, setCurrentValue] = useState(initialValue);
  
    useEffect(() => {
      const duration = 3000; 
      const interval = 50; 
      const steps = duration / interval;
  
      const incrementStep = (final, initial, step) => {
        const diff = final - initial;
        return initial + (diff / steps) * step;
      };
  
      let step = 0;
      const updateValue = () => {
        if (step <= steps) {
          setCurrentValue(incrementStep(finalValue, initialValue, step));
          step += 1;
        }
      };
  
      const intervalId = setInterval(updateValue, interval);
  
      // Clean up interval on component unmount
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once on mount
  
    return (
      <AchievementCard>
        <AchievementLogo src={imageSrc} alt={alt} />
        <AchievementCount>{Math.round(currentValue)}{alt === "Customer Rating" ? "%" : "+"}</AchievementCount>
        <AchievementName>{name}</AchievementName>
      </AchievementCard>
    );
  };