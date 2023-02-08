import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import kamalomaloosign from "../../assets/ahu-signs/Puna_kamalomaloo.png";
import { Footer } from "../home/Footer";
import punasign from "../../assets/punasign.png";
import ahumap from "../../assets/puna-bd.png";

export const Kamalomaloo = () => (
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
          <div className="current-crumb">Kamalomalo‘o</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="kipu ahupuaa breakdown" />
          </div>
          <Link className="back-to-moku" to="/puna">
            <div className="moku-sign">
              <img src={punasign} alt="puna sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img
              width="100%"
              src={kamalomaloosign}
              alt="kamalomaloo road sign"
            />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Kamalomalo‘o: The dry malo The malo was the principal clothing of a man.
        It was a piece of tapa about 18 inches wide and 8 feet long.
      </div>
      <Footer />
    </div>
  </>
);
