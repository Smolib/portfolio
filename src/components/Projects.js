import Project from "./Project";
import ProjectMoreInfo from "./ProjectMoreInfo";
import projects from "../data/projects";
import { useState } from "react";
function Projects() {
  const [isProjectSelect, setIsProjectSelect] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const [scrollTarget, setScrollTarget] = useState("");
  function handleProjectSelect(project) {
    setTimeout(() => {
      window.scrollBy({
        top: document.getElementById("projects").getBoundingClientRect().top,
      });
    }, 200);
    setScrollTarget(window.pageYOffset);
    setIsProjectSelect(true);
    setSelectedProject(project);
  }
  function handleProjectDeselect() {
    setIsProjectSelect(false);
    setSelectedProject({});
    setTimeout(() => {
      window.scrollTo(0, scrollTarget);
    }, 200);
  }
  if (isProjectSelect === false) {
    return (
      <section id="projects" className="projects">
        {projects.map((item, i) => {
          return (
            <Project project={item} key={i} onReadMore={handleProjectSelect} />
          );
        })}
      </section>
    );
  } else {
    return (
      <ProjectMoreInfo
        project={selectedProject}
        onBackButton={handleProjectDeselect}
      />
    );
  }
}

export default Projects;
