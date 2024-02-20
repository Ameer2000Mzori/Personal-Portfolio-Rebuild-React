import React from 'react'

const Projects = () => {
  return (
    <>
      {/* <!-- projects --> */}
      <section id="PROJECTS" className="projects">
        <div className="left-Projects-Wrap">
          <div className="projects-Titles">
            <h1 className="projects-Text-1">PORTFOLIO</h1>
            <div className="projects-Text-2">
              <h1 className="P-T-1-2">MY</h1>
              <h1 className="P-T-2-2">Projects</h1>
            </div>
          </div>
          <div className="Projects-Wrap"></div>
          <div className="view-More-Btn-Wrap">
            <button className="view-More-Btn">VIEW MORE</button>
          </div>
        </div>
        <div className="right-Projects-Wrap">
          <div className="Projects-Decoration-Bar">
            <div className="Projects-Cercle-One"></div>
            <div className="Projects-Line-El"></div>
            <div className="Projects-Cercle-Two"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
