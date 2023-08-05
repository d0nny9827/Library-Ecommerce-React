import { Link } from "react-router-dom";
import UndrawBooks from "../assets/Undraw_Books.svg";

export default function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's most awarded online library platform</h1>
            <h2>
              Find your dream book with <span className="purple">Library</span>
            </h2>
            <Link to="/books">
              <button className="btn">Browse books</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} />
          </figure>
        </div>
      </header>
    </section>
  );
}
