import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import kaakaaniubd from "../../assets/koolau-bd.png";
import { Footer } from "../home/Footer";
import kaakaaniusign from "../../assets/ahu-signs/Koolau_kaakaaniu.png";
export const Kaakaaniu = () => (
  <>
    <Navbar />
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
        <div className="current-crumb">Kaakaaniu</div>
      </div>
      <div className="ahu-map-and-sign">
        <div className="anaholabd">
          <img src={kaakaaniubd} alt="kaakaaniu ahupuaa breakdown" />
        </div>
        <div className="ahu-sign">
          <img width="100%" src={kaakaaniusign} alt="kaakaaniu road sign" />
        </div>
      </div>
    </div>
    <div className="ahu-text"></div>
    <Footer />
  </>
);
