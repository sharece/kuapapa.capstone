import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import kaakaaniubd from "../../assets/ahu-divisions/Kaakaaniu.png";
import { Footer } from "../home/Footer";
import koolausign from "../../assets/ahu-signs/koolausign.png";
import kaakaaniusign from "../../assets/ahu-signs/Koolau_kaakaaniu.png";
export const Kaakaaniu = () => (
  <>
    <Navbar />
    <div className="ahu-elements">
      <div className="ahu-sign">
        <img width="100%" src={kaakaaniusign} alt="kaakaaniu road sign" />
      </div>
      <div className="ahu-map-and-sign">
        <div className="anaholabd">
          <img src={kaakaaniubd} alt="kaakaaniu ahupuaa breakdown" />
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
