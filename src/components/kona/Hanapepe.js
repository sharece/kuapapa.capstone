import { Link } from "react-router-dom";
import ahumap from "../../assets/kona-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import konasign from "../../assets/ahu-signs/konasign.png";
import hanapepesign from "../../assets/ahu-signs/Kona_hanapepe.png";

export const Hanapepe = () => (
  <>
    <Navbar />
    <div className="ahu-bg">
      <div className="ahu-elements">
        <div className="breadcrumb-menu pt-4 flex color-white">
          <Link className="crumb" to="/">
            Home
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <Link className="crumb" to="/kona">
            Kona
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <div className="current-crumb">Hanapēpē</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="kona breakdown" />
          </div>
          <Link className="back-to-moku" to="/kona">
            <div className="moku-sign">
              <img src={konasign} alt="Kona sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={hanapepesign} alt="hanapepe road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Hanapēpē: Crushed-bay Alt: Hana-pepehi Killing bay #According to Gabriel
        I (March 14, 1992) and Ilei Beniamina (March 15, 1992) this is the
        correct name for this ahupuaØa. An ahupua`a of the Kona district,
        Hanapēpē is the Kaua`i name for the nuku pu`u, a honeycreeper with long
        curved upper mandible and shorter lower mandible of the beak. It is
        brownish green on the back, with yellow green below.
      </div>
      <Footer />
    </div>
  </>
);
