function BigBlock({name, info}) {
  return (
    <section id={name} className="text-section">
      {info.map((item, i) => {
        return (
          <p className="text-section__paragraph"  key={i}>
            <span className="text-section__subtitle">
              {item.title}
            </span>
            {item.text}
          </p>
        );
      })}
    </section>
  );
}
export default BigBlock;
