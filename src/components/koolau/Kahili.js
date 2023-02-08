import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import ahumap from "../../assets/koolau-bd.png";
import { Footer } from "../home/Footer";
import koolausign from "../../assets/ahu-signs/koolausign.png";
import kahilisign from "../../assets/ahu-signs/Koolau_kahili.png";

export const Kahili = () => (
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
          <div className="current-crumb">Kāhili</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="Ko'olau ahupuaa breakdown" />
          </div>
          <Link className="back-to-moku" to="/koolau">
            <div className="moku-sign">
              <img src={koolausign} alt="koolau sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={kahilisign} alt="kahili road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Kāhili: Ceremonial fly brush Lit: Fly Brush An ahupua`a of Ko`olau
        district, between Kilauea and Waiakalua. At the time of the Mahele,
        there were claims for a large number of loko, fishponds, instead of
        lo`i. Noni and oranges were being grown as cash crops. #The kahili was
        the mark of royalty and was carried by those in attendance to the High
        Chief or Chiefess. Feathers were tied together in small bundles, then
        attached to a highly polished stick of some precious wood. The wood and
        pattern of feathers indicated the rank of the ali`i. *The Menehune moved
        a big stone to the shore of Kahili from which they used to dive. [Akina]
      </div>
      <Footer />
    </div>
  </>
);
