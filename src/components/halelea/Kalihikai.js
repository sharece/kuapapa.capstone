import { Link } from "react-router-dom";
import ahumap from "../../assets/halelea-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import kalihikaisign from "../../assets/ahu-signs/Halelea_kalihikai.png";
import haleleasign from "../../assets/haleleabigsign.png";

export const Kalihikai = () => (
  <>
    <Navbar />
    <div className="ahu-bg">
      <div className="ahu-elements">
        <div className="breadcrumb-menu pt-4 flex color-white">
          <Link className="crumb" to="/">
            Home
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <Link className="crumb" to="/napali">
            Halelea
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <div className="current-crumb">Kalihikai</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="halelea breakdown" />
          </div>
          <Link className="back-to-moku" to="/halelea">
            <div className="moku-sign">
              <img src={haleleasign} alt="halelea sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={kalihikaisign} alt="Kalihikai road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text"></div>
      <Footer />
    </div>
  </>
);
