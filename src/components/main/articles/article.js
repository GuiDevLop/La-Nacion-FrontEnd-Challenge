import React from "react";
import "./article.scss";

function Article({ border, elements, titleSize, marqueeOnly, leftItem, authorOnly, imgBottom, bgPink }) {
  return (
    <article className="article" data-testid="article">
      <div style={{border: border? "1px solid #cccccc" : ""}} >
        { elements.img && !imgBottom &&
          (
            <div className="img" data-testid="art-img">
              <img src={elements.img} alt="Article"></img>
            </div>
          )
        }
        <div className="wrap">
          <h1 className="leadtitle" style={{fontSize: titleSize, textAlign: border? "center" : "left", margin: border? 20 : 0,
            fontStyle: leftItem? 'normal' : '', fontWeight: leftItem? 'normal' : ''}}>
            <a className="lead" href={elements.url}>
              {elements.lead}.{" "}
            </a>
            <a className="title" href={elements.url}>
              {elements.title}
            </a>
          </h1>
          { elements.subheader && <h2 className="subh" data-testid="subh">{elements.subheader}</h2>}
          { elements.imgautor && (
            <div className="imgautor" style={{marginTop: border? 35 : 0}}>
              <img src={elements.imgautor} alt="imgautor"></img>
            </div>
          )}
          { elements.marquee && elements.autor && !authorOnly && !marqueeOnly ?
            <span className="nameautor" style={{justifyContent: elements.imgautor? "center" : "left", marginTop: 3}}>
              {elements.marquee} / {elements.autor}
            </span>
            :
            !marqueeOnly? 
              <span className="nameautor" style={{justifyContent: elements.imgautor? "center" : "left", marginTop: 3}}>
                {elements.autor}
              </span>              
              : 
              <span className="nameautor" style={{justifyContent: elements.imgautor? "center" : "left", marginTop: 3}}>
                {elements.marquee}
              </span>
          }
          { elements.img && imgBottom &&
            (
              <div className="img" style={{marginTop: 10}} >
                <img src={elements.img} alt="Article"></img>
              </div>
            )
          }
        </div>
      </div>
    </article>
  );
}

export default Article;
