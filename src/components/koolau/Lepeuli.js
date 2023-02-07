import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import ahumap from "../../assets/koolau-bd.png";
import { Footer } from "../home/Footer";
import lepeulisign from "../../assets/ahu-signs/Koolau_lepeuli.png";
import koolausign from "../../assets/ahu-signs/koolausign.png";

export const Lepeuli = () => (
  <>
    <Navbar />
    <div className="ahu-bg">
      <div className="ahu-elements">
        <div className="breadcrumb-menu pt-14 flex color-white">
          <Link className="crumb" to="/">
            Home
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <Link className="crumb" to="/koolau">
            Ko'olau
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <div className="current-crumb">Lepeuli</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="Ko'olau ahupuaa breakdown" />
          </div>
          <Link className="back-to-moku" to="/koolau">
            <div className="moku-sign">
              <img src={koolausign} alt="koolau sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={lepeulisign} alt="lepeuli road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">Lepeuli: Dark-cock’s-comb</div>
      <Footer />
    </div>
  </>
);
