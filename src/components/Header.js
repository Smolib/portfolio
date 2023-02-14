function Header() {
    return (
        <header className="header">
        <div className="header__name-zone">
          <span className="header__description">Всем привет! Меня зовут</span>
          <h1 className="header__title">Кулаковская Мария</h1>
          <span className="header__description">и я ищу работу как</span>
          <p className="header__subtitle">junior web-разработчик</p>
        </div>
        <div className="header__photo-zone">
          <img className="header__photo" src="./images/photo.jpg" alt="Фотография автора"/>
        </div>
      </header>
    );
  }
  export default Header;
  