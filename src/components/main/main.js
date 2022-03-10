import React from "react";
import Body from "./body/body";
import "./main.scss";

function Main({ articles }) {
  return (
    <div className="main" data-testid="main">
      <div className="wrapbody">
        <section className="cabezal" data-testid="cabezal">
          <div className="container"></div>
        </section>
        <Body data-testid="Body" articles={articles} />
      </div>      
      <div className="sidebar">
        <aside className="megalateral" data-testid="sidebar">
          <div className="megalateral-container"></div>
        </aside>
      </div>
    </div>
  );
}

export default Main;
