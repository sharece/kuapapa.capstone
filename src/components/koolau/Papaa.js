import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import papaabd from "../../assets/ahu-divisions/Papaa.png";
import { Footer } from "../home/Footer";
import koolausign from "../../assets/ahu-signs/koolausign.png";
import papaasign from "../../assets/ahu-signs/Koolau_papaa.png";

export const Papaa = () => (
  <>
    <Navbar />
    <div className="ahu-elements">
      <div className="ahu-sign">
        <img width="100%" src={papaasign} alt="papaa road sign" />
      </div>
      <div className="ahu-map-and-sign">
        <div className="anaholabd">
          <img src={papaabd} alt="papaa ahupuaa breakdown" />
        </div>
        <Link className="back-to-moku" to="/koolau">
          <div className="moku-sign">
            <img src={koolausign} alt="koolau sign" />
          </div>
        </Link>
      </div>
    </div>
    <div className="ahu-text">Pāpa‘a: Secure-enclosure</div>
    <Footer />
  </>
);
