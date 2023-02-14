function Project({ project, onReadMore }) {
  const onClickButton = () => {
    onReadMore(project);
  };
  return (
    <div className="project">
      <div className="project__side project__side_front">
        <img
          src={`./images/${project.name}/main.png`}
          className="project__image"
          alt="Скриншот проекта"
        />
      </div>
      <div className="project__side project__side_back">
        <p className="project__subtitle">{project.subtitle}</p>
        <h2 className="project__title">{project.title}</h2>
        <button className="button-in-projects" onClick={onClickButton}>
          Подробнее о проекте
        </button>
        {project.github ? (
        <a
          href={project.github}
          className="button-in-projects"
          target="_blank"
          rel="noreferrer"
        >
          Ссылка на GitHub
        </a>
        ) : (
          ""
        )}
        {project.pages ? (
          <a
            href={project.pages}
            className="button-in-projects"
            target="_blank"
            rel="noreferrer"
          >
            Ссылка на GitHub Pages
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default Project;
