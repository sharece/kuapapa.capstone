import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import lepeulibd from "../../assets/ahu-divisions/Lepeuli.png";
import { Footer } from "../home/Footer";
import koolausign from "../../assets/ahu-signs/koolausign.png";
import lepeulisign from "../../assets/ahu-signs/Koolau_lepeuli.png";

export const Lepeuli = () => (
  <>
    <Navbar />
    <div className="ahu-elements">
      <div className="ahu-sign">
        <img width="100%" src={lepeulisign} alt="lepeuli road sign" />
      </div>
      <div className="ahu-map-and-sign">
        <div className="anaholabd">
          <img src={lepeulibd} alt="lepeuli ahupuaa breakdown" />
        </div>
        <Link className="back-to-moku" to="/koolau">
          <div className="moku-sign">
            <img src={koolausign} alt="koolau sign" />
          </div>
        </Link>
      </div>
    </div>
    <div className="ahu-text">Lepeuli: Dark-cock’s-comb</div>
    <Footer />
  </>
);
