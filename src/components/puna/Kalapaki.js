import { Link } from "react-router-dom";
import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";
import punasign from "../../assets/punasign.png";
import kalapakisign from "../../assets/ahu-signs/Puna_kalapaki.png";
import ahumap from "../../assets/puna-bd.png";

export const Kalapaki = () => (
  <>
    <Navbar />
    <div className="ahu-bg">
      <div className="ahu-elements">
        <div className="breadcrumb-menu pt-4 flex color-white">
          <Link className="crumb" to="/">
            Home
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <Link className="crumb" to="/puna">
            Puna
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <div className="current-crumb">Kalapakī</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="Puna ahupuaa breakdown" />
          </div>
          <Link className="back-to-moku" to="/puna">
            <div className="moku-sign">
              <img src={punasign} alt="puna sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={kalapakisign} alt="kalapaki road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Kalapakī is situated between Nāwiliwili and Hanama`ulu ahupua'a.
      </div>
      <Footer />
    </div>
  </>
);
