import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/Library.svg";

export default function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <img src={Logo} className="logo" alt="" />
        </a>
        <ul className="nav__links">
          <li className="nav__list">
            <a href="/" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__list">
            <a href="/" className="nav__link">
              Books
            </a>
          </li>
          <button className="btn__menu">
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <a href="/cart" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
            </a>
            <span className="cart__length">4</span>
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="menu btn__menu--close">
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a href="/" className="menu__link">
                Home
              </a>
            </li>
            <li className="menu__list">
              <a href="/" className="menu__link">
                Books
              </a>
            </li>
            <li className="menu__list">
              <a href="/" className="menu__link">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
