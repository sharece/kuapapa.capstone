import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import kipubd from "../../assets/ahu-divisions/Kipu.png";
import { Footer } from "../home/Footer";
import punasign from "../../assets/punasign.png";
import kipusign from "../../assets/ahu-signs/Puna_kipu.png";
export const Kipu = () => (
  <>
    <Navbar />
    <div className="ahu-elements">
      <div className="ahu-sign">
        <img width="100%" src={kipusign} alt="kipu road sign" />
      </div>
      <div className="ahu-map-and-sign">
        <div className="kipubd">
          <img src={kipubd} alt="kipu ahupuaa breakdown" />
        </div>
        <Link className="back-to-moku" to="/puna">
          <div className="moku-sign">
            <img src={punasign} alt="puna sign" />
          </div>
        </Link>
      </div>
    </div>
    <div className="ahu-text">
      Kīpū: Hold-back or brace, as a canoe on a wave with a paddle It straddles
      the Hā`upu mountain range and is divided in two parts, Kīpū-uka and
      Kīpū-kai. Hā`upu peak dominates the land. Kīpū straddles the Hā`upu
      mountain range and is divided in two parts. Kīpū means Hold-back or brace,
      as a canoe on a wave with a paddle.
    </div>
    <Footer />
  </>
);
