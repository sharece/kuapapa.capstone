import { Link } from "react-router-dom";
import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";
import kalapakibd from "../../assets/ahu-divisions/Kalapaki.png";
import punasign from "../../assets/punasign.png";
import kalapakisign from "../../assets/ahu-signs/Puna_kalapaki.png";
export const Kalapaki = () => (
  <>
    <Navbar />
    <div className="ahu-elements">
      <div className="ahu-sign">
        <img width="100%" src={kalapakisign} alt="kalapaki road sign" />
      </div>
      <div className="ahu-map-and-sign">
        <div className="kipubd">
          <img src={kalapakibd} alt="kalapaki ahupuaa breakdown" />
        </div>
        <Link className="back-to-moku" to="/puna">
          <div className="moku-sign">
            <img src={punasign} alt="puna sign" />
          </div>
        </Link>
      </div>
    </div>
    <div className="ahu-text">
      Kalapakī is situated between Nāwiliwili and Hanama`ulu ahupua'a.
    </div>
    <Footer />
  </>
);
