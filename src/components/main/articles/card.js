import React, { useEffect, useState } from "react";
import Article from "./article";

function Card({ article, render, marqueeOnly, leftItem }) {
  const [articleToReturn, setArticle] = useState();
  
  useEffect(() => {
    const { lead, title, subheader, img, marquee, autor, imgautor, url, bgPink } = article;
    const evaluate = {
      1: function () {
        return (
          <Article marqueeOnly={marqueeOnly} leftItem={leftItem} imgBottom={false} elements={{ img, lead, title, marquee, autor, url, bgPink }} />
        );
      },
      2: function () {
        return (
          <Article leftItem={leftItem} elements={{ lead, title, subheader, marquee, autor, url, bgPink }} />
        );
      },
      3: function () {
        return (
          <Article border={true} authorOnly={true} leftItem={leftItem} elements={{ lead, title, imgautor, marquee, autor, url, bgPink }} />
        );
      },
      4: function () {
        return (
          <Article elements={{ img, lead, title, marquee, autor, url, bgPink }} />
        );
      },
      5: function () {
        return (
          <Article titleSize={32} elements={{ lead, title, subheader, marquee, autor, url, bgPink }} />
        );
      },
      6: function () {
        return (
          <Article titleSize={30} imgBottom={true} elements={{ img, lead, title, subheader, marquee, autor, url, bgPink }} />
        );
      },
      7: function () {
        return (
          <Article titleSize={30} imgBottom={false} elements={{ img, lead, title, marquee, autor, url, bgPink }} />
        );
      },
      8: function () {
        return (
          <Article marqueeOnly={marqueeOnly} leftItem={leftItem} imgBottom={false} elements={{ img, lead, title, marquee, autor, url, bgPink }} />
        );
      },
    };
    if(render) {
      setArticle(evaluate[render])
    }
  }, [article, render, marqueeOnly, leftItem])
  return (
    <div>
        {articleToReturn}
    </div>
  );
}

export default Card;
