const ProjectsLogic = (setViewProjects, setProjects) => {
  setViewProjects((prev) => !prev)
  setProjects((prev) => (prev === 6 ? (prev = 12) : (prev = 6)))
}

export default ProjectsLogic
