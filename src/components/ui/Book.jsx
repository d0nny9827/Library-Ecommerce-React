import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Book({ book }) {
  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img src={book.url} className="book__img" />
        </figure>
      </a>
      <div className="book__title">
        <a href="" className="book__title--link">
          {book.title}
        </a>
      </div>
      <div className="book__ratings">
        {new Array(Math.floor(book.rating)).fill("💓").map((_, index) => (
          <FontAwesomeIcon icon={"star"} key={index} />
        ))}
        {!Number.isInteger(book.rating) && (
          <FontAwesomeIcon icon={"star-half-alt"} />
        )}
      </div>
      <div className="book__price">
        {!book.salePrice ? (
          <>${book.originalPrice.toFixed(2)}</>
        ) : (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            ${book.salePrice.toFixed(2)}
          </>
        )}
      </div>
    </div>
  );
}
