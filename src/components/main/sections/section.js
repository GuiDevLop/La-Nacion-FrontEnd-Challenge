import React from "react";
import Card from "../articles/card.js";
import "./section.scss";

function Sections({ articles, nroRender, maxArticles, newStyles, changeGrid, increment, title, link, url }) {
  const BlockArticles = articles.slice(1, maxArticles);
  const articlesLeft = BlockArticles.map((item, index) => {
    return (
      <Card key={index} article={item} render={increment? index+1 : 1} leftItem={true}/>
    )
  });
  return (
    <section style={{marginTop: title? 40 : 0}} data-testid="Sections">
      <div className="articletitle">
        { title && link ? 
          (
            <a href={url}>
              <h1>{title}</h1>
            </a>
          ) : (
            <h1>{title}</h1>
          )
        }
      </div>
      { BlockArticles && !newStyles ?
        (
          <div className="articleblock" style={{gridTemplateColumns: changeGrid? "1fr 2fr" :"2fr 1fr"}}>
            <div className="articleleft">
              <Card article={BlockArticles[0]} render={nroRender} />
            </div>
            <div className="articleright" >
              {articlesLeft}
            </div>
          </div>
        )
        :
        <div className="section">
          {articlesLeft}
        </div>
      }
    </section>
  );
}

export default Sections;
