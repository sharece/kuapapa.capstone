import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import ahumap from "../../assets/puna-bd.png";
import punasign from "../../assets/punasign.png";
import kipusign from "../../assets/ahu-signs/Puna_kipu.png";

export const Kipu = () => (
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
          <div className="current-crumb">Kīpū</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="Puna ahupuaa breakdown" />
          </div>
          <Link className="back-to-moku" to="/puna">
            <div className="moku-sign">
              <img src={punasign} alt="puna sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={kipusign} alt="kipu road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Kīpū: Hold-back or brace, as a canoe on a wave with a paddle It
        straddles the Hā`upu mountain range and is divided in two parts,
        Kīpū-uka and Kīpū-kai. Hā`upu peak dominates the land. Kīpū straddles
        the Hā`upu mountain range and is divided in two parts. Kīpū means
        Hold-back or brace, as a canoe on a wave with a paddle.
      </div>
      <Footer />
    </div>
  </>
);
