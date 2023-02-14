import ImagesScrolling from "./ImagesScrolling";
function ProjectMoreInfo({ project, onBackButton }) {
  const images = project.images;
  return (
    <section className="project-more-info" id="projects">
      <button
        className="project-more-info__button-back button-in-projects"
        onClick={onBackButton}
      >
        &lArr; Назад к проектам
      </button>
      <h2 className="project-more-info__title">{project.title}</h2>
      {images.length !== 0 ? (
        <ImagesScrolling name={project.name} images={images} />
      ) : (
        ""
      )}

      <div className="project-more-info__description-section">
        {project.descriptions.map((description, i) => {
          return (
            <p className="project-more-info__description" key={i}>
              {description}
            </p>
          );
        })}
        <p className="project-more-info__description">
          Используемые технологии:
        </p>
        <ul className="project-more-info__list">
          {project.listOfSkills.map((item, i) => {
            return (
              <li className="project-more-info__list-item" key={i}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="project-more-info__buttons-section">
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
    </section>
  );
}
export default ProjectMoreInfo;
