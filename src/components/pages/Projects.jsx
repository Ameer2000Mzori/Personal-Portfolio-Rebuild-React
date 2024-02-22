import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProjectsLogic from './hooks/ProjectsLogic.js'

const Projects = () => {
  const [viewProject, setViewProjects] = useState(false)
  const [projects, setProjects] = useState(6)
  const [projectsData, setProjectsData] = useState([])

  const fetchGitHubRepos = async (projects) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/ameer2000mzori/repos?per_page=${projects}&sort=created`
      )
      const data = response.data
      console.log(data)
      setProjectsData(data)
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  }

  useEffect(() => {
    fetchGitHubRepos(projects)
  }, [projects])

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
          <div className="Projects-Wrap">
            {projectsData.map((info) => {
              const { description, homepage, html_url, name, topics } = info

              return (
                <div className="project-Card" key={name}>
                  <div className="project-Img-Wrap">
                    <img
                      className="project-Img"
                      src={`https://raw.githubusercontent.com/Ameer2000Mzori/${name}/main/sample/1.png`}
                      alt={name}
                    />
                  </div>
                  <p className="project-P-Lang">{topics.join(', ')}.</p>
                  <h3 className="project-Name-Title">{name}</h3>
                  <p className="project-P-Text">{description}</p>
                  <div className="project-Btn-Wrap">
                    {homepage && (
                      <div className="see-Project-Wrap">
                        <a
                          className="see-Code-Wrap-A"
                          target="_blank"
                          href={homepage}
                          rel="noopener noreferrer"
                        >
                          SEE PROJECT
                        </a>
                      </div>
                    )}
                    <div className="see-Code-Wrap">
                      <a
                        className="see-Code-Wrap-A"
                        target="_blank"
                        href={html_url}
                        rel="noopener noreferrer"
                      >
                        SEE CODE
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="view-More-Btn-Wrap">
            <button
              onClick={() => ProjectsLogic(setViewProjects, setProjects)}
              className="view-More-Btn"
            >
              {viewProject ? 'View Less' : 'View More'}
            </button>
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
