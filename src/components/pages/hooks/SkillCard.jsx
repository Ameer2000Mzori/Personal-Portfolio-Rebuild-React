import React from 'react'
import { SkillsData } from '../hooks/SkillsData.js'
const SkillCard = () => {
  return (
    <>
      <div className="skills-Cards-Wrap">
        {SkillsData.map((cardData, index) => {
          return (
            <div key={index} className="skills-Card">
              <div className="name-Lang-Num">
                <h2 className="skills-Name">{cardData.skillName}</h2>
                <h2 className="skills-Num">{cardData.skillLvl}</h2>
              </div>
              <p className="skills-P"> {cardData.skillText}</p>
              <div className="skills-Range-Wrap">
                <div className="skills-Range">
                  <div className={`skills-Range-Fill ${cardData.skillRange}`}>
                    <div
                      className={`skills-Range-Circile ${cardData.skillRange}`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SkillCard
