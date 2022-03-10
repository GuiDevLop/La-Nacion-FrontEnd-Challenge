import React from "react";
import "./line.scss";

function Line({ links, nameclass }) {
  const rowLinks = links.map((item, index) => {
    const { url, link } = item;
    return (
      <a key={index} href={url}>
        {link}
      </a>
    );
  });  
  return (
    <div className={nameclass} data-testid="line">
      <ul className="rows">{rowLinks}</ul>
    </div>
  );
}

export default Line;
