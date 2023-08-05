import React from "react";

export default function Price({ originalPrice, salePrice }) {
  return (
    <div className="book__price">
      {!salePrice ? (
        <>${originalPrice.toFixed(2)}</>
      ) : (
        <>
          <span className="book__price--normal">
            ${originalPrice.toFixed(2)}
          </span>
          ${salePrice.toFixed(2)}
        </>
      )}
    </div>
  );
}
