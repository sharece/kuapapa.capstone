import { Link } from "react-router-dom";
import ahumap from "../../assets/koolau-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import papaasign from "../../assets/ahu-signs/Koolau_papaa.png";
import koolausign from "../../assets/ahu-signs/koolausign.png";

export const Papaa = () => (
  <>
    <Navbar />
    <div className="ahu-bg">
      <div className="ahu-elements">
        <div className="breadcrumb-menu pt-4 flex color-white">
          <Link className="crumb" to="/">
            Home
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <Link className="crumb" to="/koolau">
            Ko'olau
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <div className="current-crumb">Pāpa‘a</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="koolau breakdown" />
          </div>
          <Link className="back-to-moku" to="/koolau">
            <div className="moku-sign">
              <img src={koolausign} alt="koolau sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={papaasign} alt="papaa road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">Pāpa‘a: Secure-enclosure</div>
      <Footer />
    </div>
  </>
);
