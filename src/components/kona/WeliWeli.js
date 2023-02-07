import { Link } from "react-router-dom";
import ahumap from "../../assets/kona-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import weliwelisign from "../../assets/ahu-signs/Kona_weliweli.png";
import konasign from "../../assets/ahu-signs/konasign.png";

export const Weliweli = () => (
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
          <div className="current-crumb">Weli weli</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="weliweli ahupuaa breakdown" />
          </div>
          <Link className="back-to-moku" to="/kona">
            <div className="moku-sign">
              <img src={konasign} alt="Kona sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={weliwelisign} alt="weliweli road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Weliweli: Fearful Ahupua`a of the Kona district. There are many "pens"
        here, small enclosures with rough walls most prevalent here, in Kalalau
        and Kipukai.
      </div>
      <Footer />
    </div>
  </>
);
