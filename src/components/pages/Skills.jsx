import React from 'react'
import { SkillsData } from './hooks/SkillsData.js'
const Skills = () => {
  return (
    <>
      {/* <!--  Skills section --> */}
      <section id="Skills" className="skills">
        <div className="left-Deco-Skills">
          <div className="skills-Cercle-One"></div>
          <div className="skills-Line-El"></div>
          <div className="skills-Cercle-Two"></div>
        </div>
        <div className="right-Skill-Skills">
          <div className="titles-Skills">
            <h1 className="skills-Text-One">PROFESSIONAL SKILLS</h1>
            <div className="skills-Text-Two">
              <h3 className="text-Skills-2-1">MY</h3>
              <h3 className="text-Skills-2-2">Skills</h3>
            </div>
          </div>
          <div className="skills-Cards-Wrap">
            {SkillsData.map((cardData, index) => {
              return (
                <div className="skills-Card">
                  <div className="name-Lang-Num">
                    <h2 className="skills-Name">{cardData.skillName}</h2>
                    <h2 className="skills-Num">{cardData.skillLvl}</h2>
                  </div>
                  <p className="skills-P"> {cardData.skillText}</p>
                  <div className="skills-Range-Wrap">
                    <div className="skills-Range">
                      <div
                        className={`skills-Range-Fill ${cardData.skillRange}`}
                      >
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
        </div>
      </section>
    </>
  )
}

export default Skills
