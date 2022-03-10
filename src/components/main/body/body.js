import React from "react";
import Sections from "../sections/section";
import "./body.scss";

function Body({ articles }) {
  return (
      <div className="body" data-testid="Body">
        <Sections articles={articles} nroRender={6} maxArticles={3} link={true} url="#" />
        <Sections articles={articles} nroRender={1} maxArticles={4} newStyles={true} link={true} url="#" />
        <Sections articles={articles} title="Focal Derecho" nroRender={5} maxArticles={2} changeGrid={true} link={true} url="#" />
        <Sections articles={articles} title="Notas x 3" maxArticles={4} increment={true} newStyles={true} changeGrid={true} link={true} url="#" />
        <Sections articles={articles} title="Opinión" nroRender={7} maxArticles={3} increment={true} link={true} url="#" />
        <Sections articles={articles} title="Notas x 3 Color" nroRender={8} maxArticles={4} newStyles={true} link={true} url="#" />
      </div>
  );
}

export default Body;
