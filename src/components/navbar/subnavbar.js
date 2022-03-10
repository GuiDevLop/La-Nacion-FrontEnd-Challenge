import React, { useEffect, useState } from "react";
import logoClub from "../../img/clublogo.svg";
import weatherIcon from "../../img/weather.svg";
import Image from "../footer/image";
import { DOLARBNA, DOLARBLUE } from "../../data/dolar.js";
import { WEATHERNOW } from "../../data/weather.js";
import Button from "../button/button";
import "./subnavbar.scss";

function SubNavBar(props) {
  const [dolarBlue, setDolarBlue] = useState();
  const [dolarBna, setDolarBna] = useState();
  const [weatherNow, setWaterNow] = useState();
  useEffect(() => {
    setDolarBlue(DOLARBLUE);
    setDolarBna(DOLARBNA);
    setWaterNow(WEATHERNOW);
  }, [dolarBlue, dolarBna, weatherNow]);
  return (
    <section className="sub" data-testid="sub">
      <div className="lay">
        <div className="row">
          { dolarBlue && dolarBna && 
            <div className="dolar" data-testid="dolar">
              <a className="dolarlink" href="#">
                Dólar:
              </a>
              <span className="bna">
                ${dolarBna.buy} / ${dolarBna.sell}
              </span>
              <span className="blue">
                ${dolarBlue.buy} / ${dolarBlue.sell}
              </span>
            </div>
          }
          { weatherNow && 
            <div className="weather" data-testid="weather">
              <Image img={weatherIcon} link="#" />
              <span className="gradius">{weatherNow.gradius}</span>
              <span className="name">{weatherNow.city}</span>
            </div>
          }
          <Button classname="newsletter" testid="newsletters" text="Recibí Newsletters"></Button>
          <Button classname="clubnacion" testid="clubnacion" img="beneficios" logo={logoClub} text="Descubrí tus beneficios" imgtop={true}></Button>
        </div>
      </div>
    </section>
  );
}

export default SubNavBar;
