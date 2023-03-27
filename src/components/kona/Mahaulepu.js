import { Link } from "react-router-dom";
import ahumap from "../../assets/kona-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import mahaulepusign from "../../assets/ahu-signs/Kona_mahaulepu.png";
import konasign from "../../assets/ahu-signs/konasign.png";

export const Mahaulepu = () => (
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
          <div className="current-crumb">Māhā`ulepū</div>
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
            <img width="100%" src={mahaulepusign} alt="mahaulepu road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Māhā`ulepū: And falling together The ahupua‘a boundary follows the Pa‘a
        border to a rock on the range of hills called KALUHAHINI (the rock is
        KUMAULELE), to Hā‘UPU, then down range to hills called PIHAKAPU to a
        point of land called KAWELAKOA. From Hā‘upu to Kawelekoa, theboundary is
        shared with Kīpū. Area: 1572 acres. Recently archeologists have
        uncovered the skeletons of three-foot tall flightless ducks in this area
        By pronouncing the name maha-ule-pu, a pun is created: Maha (foreskin) +
        ‘ule (penis) + pu (inactive, sluggish), supposedly a complaint of the
        wives of the men who spent all their time in the ocean fishing.
      </div>
      <Footer />
    </div>
  </>
);
