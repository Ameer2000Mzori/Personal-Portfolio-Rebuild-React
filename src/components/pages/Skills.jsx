import React from 'react'
import SkillCard from './hooks/SkillCard.jsx'
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
          <SkillCard />
        </div>
      </section>
    </>
  )
}

export default Skills
