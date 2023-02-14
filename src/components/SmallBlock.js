function SmallBlock({ name, info }) {
  return (
    <div className="skills__card">
      <p className="skills__title">{name}:</p>
      <ul className="skills__lyst">
        {info.map((item, i) => {
          return (
            <li className="skills__item" key={i}>
              <span className="skills__subtitle">{item.title}</span> - {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default SmallBlock;
