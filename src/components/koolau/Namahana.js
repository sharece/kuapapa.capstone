import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import namahanabd from "../../assets/ahu-divisions/Namahana.png";
import { Footer } from "../home/Footer";
import koolausign from "../../assets/ahu-signs/koolausign.png";
import namahanasign from "../../assets/ahu-signs/Koolau_namahana.png";

export const Namahana = () => (
  <>
    <Navbar />
    <div className="ahu-elements">
      <div className="ahu-sign">
        <img width="100%" src={namahanasign} alt="namahana road sign" />
      </div>
      <div className="ahu-map-and-sign">
        <div className="anaholabd">
          <img src={namahanabd} alt="namahana ahupuaa breakdown" />
        </div>
        <Link className="back-to-moku" to="/koolau">
          <div className="moku-sign">
            <img src={koolausign} alt="koolau sign" />
          </div>
        </Link>
      </div>
    </div>
    <div className="ahu-text"></div>
    <Footer />
  </>
);
