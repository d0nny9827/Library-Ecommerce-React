import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

export default function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library ?</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon={"bolt-lightning"} />}
              title="Easy and Quick"
              para="Get access to the books you purchase online instantly."
            />
            <Highlight
              icon={<FontAwesomeIcon icon={"book-open"} />}
              title="10,000+ books"
              para="Library has books in all your favorite categories."
            />
            <Highlight
              icon={<FontAwesomeIcon icon={"tags"} />}
              title="Affordable"
              para="Get your handds on popular books for as little as $10."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
