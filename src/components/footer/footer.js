import React from "react";
import Image from "./image";
import Line from "./line";
import { FOOTERLINKS } from "../../data/footer.js";
import "./footer.scss";

//Images
import android from "./../../img/android.svg";
import ios from "./../../img/ios.svg";
import instagram from "./../../img/instagram.svg";
import rss from "./../../img/rss.svg";
import twitter from "./../../img/twitter.svg";
import facebook from "./../../img/facebook.svg";
import gda from "./../../img/gda.svg";
import fiscal from "./../../img/fiscal.svg";
import logo from "../../img/logo.svg";


function Footer(props) {
  const { sections, journals, clubvino, shipments, captcha, terms } = FOOTERLINKS;  
  return (
    <footer className="footer" data-testid="footer">
      <div className="wrap">
        <section className="top">
          <div className="links">
            <div className="logo">
              <Image img={logo} alt="La Nación" link="/" />
            </div>
            <div className="social">
              <Image img={facebook} alt="Facebook" link="#" />
              <Image img={twitter} alt="Twitter" link="#" />
              <Image img={instagram} alt="Instagram" link="#" />
              <Image img={rss} alt="RSS" link="#" />
            </div>
          </div>
          <div className="app">
            <Image img={android} alt="Android" link="#" />
            <Image img={ios} alt="iOS" link="#" />
          </div>
        </section>
        <section className="medium">
          <div className="blocks">
            <Line links={sections} nameclass="sectionslinks" />
            <Line links={journals} nameclass="journalslinks" />
            
            <div className="wrap">
              <Line links={clubvino} nameclass="vinoslinks" />
              <Line links={shipments} nameclass="envioslinks" />
            </div>
          </div>
        </section>
        <section className="bottom">
          <div className="column">
            <div className="bottom">
              <Line links={terms} />
              <Line links={captcha} nameclass="captcha" />
            </div>            
            <div className="lastline">
              <div className="gda">
                <div className="gdaimg">
                  <Image img={gda} alt="GDA" link="#" />
                  <span className="gdatext">
                    Miembro de GDA. Grupo de Diarios América
                  </span>
                </div>
                <div className="fiscal">
                  <Image img={fiscal} alt="Fiscal" link="#" />
                </div>
              </div>
              <span className="copyright">
                Copyright 2019 SA LA NACION | Todos los derechos reservados
              </span>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
