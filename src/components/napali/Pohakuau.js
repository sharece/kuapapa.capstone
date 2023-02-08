import { Link } from "react-router-dom";
import ahumap from "../../assets/napali-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import pohakuausign from "../../assets/ahu-signs/Napali_pohakuau.png";
import napalisign from "../../assets/napali-sign.png";

export const Pohakuau = () => (
  <>
    <Navbar />
    <div className="ahu-bg">
      <div className="ahu-elements">
        <div className="breadcrumb-menu pt-4 flex color-white">
          <Link className="crumb" to="/">
            Home
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <Link className="crumb" to="/napali">
            Nāpali
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <div className="current-crumb">Pōhaku‘au</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="napali breakdown" />
          </div>
          <Link className="back-to-moku" to="/napali">
            <div className="moku-sign">
              <img src={napalisign} alt="Napali road sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={pohakuausign} alt="pohakuau road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Pōhaku‘au: Swimming rock Alt: Pōhaku-ao, Day stone Pōhaku‘au is the
        smallest ahupua‘a of Nāpali, jammed into a high plain between a
        cliff-lined shore and the highest peak of Nāpali, Āalealealau at 3875
        feet.
      </div>
      <Footer />
    </div>
  </>
);
