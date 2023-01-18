import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import kamalomaloobd from "../../assets/ahu-divisions/Kamalomaloo.png";
import kamalomaloosign from "../../assets/ahu-signs/Puna_kamalomaloo.png";
import { Footer } from "../home/Footer";
import punasign from "../../assets/punasign.png";
export const Kamalomaloo = () => (
  <>
    <Navbar />
    <div className="ahu-elements">
      <div className="ahu-sign">
        <img width="100%" src={kamalomaloosign} alt="kamalomaloo road sign" />
      </div>
      <div className="ahu-map-and-sign">
        <div className="kipubd">
          <img src={kamalomaloobd} alt="kipu ahupuaa breakdown" />
        </div>
        <Link className="back-to-moku" to="/puna">
          <div className="moku-sign">
            <img src={punasign} alt="puna sign" />
          </div>
        </Link>
      </div>
      <div className="ahu-text">
        Kamalomalo‘o: The dry malo The malo was the principal clothing of a man.
        It was a piece of tapa about 18 inches wide and 8 feet long.
      </div>
    </div>
    <Footer />
  </>
);
