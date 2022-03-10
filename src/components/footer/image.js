import React from "react";

function Image({ img, alt, link }) {
  return (
    <a href={link} data-testid="image">
      <img src={img} alt={alt}></img>
    </a>
  );
}

export default Image;
