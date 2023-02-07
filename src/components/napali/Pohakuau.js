import { Link } from "react-router-dom";
import ahumap from "../../assets/napali-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import pohakuausign from "../../assets/ahu-signs/Napali_pohakuau.png";
// import { DesktopMap } from "../home/DesktopMap";
export const Pohakuau = () => (
  <>
    <Navbar />
    <div className="ahu-elements">
      <div className="breadcrumb-menu pt-14 flex color-white">
        <Link className="crumb" to="/">
          Home
        </Link>
        <div className="breadcrumb-arrow">&gt;</div>
        <Link className="crumb" to="/napali">
          Napali
        </Link>
        <div className="breadcrumb-arrow">&gt;</div>
        <div className="current-crumb">Pohakuau</div>
      </div>
      <div className="ahu-map-and-sign">
        <div className="ahu-map">
          <img src={ahumap} alt="napali breakdown" />
        </div>
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
  </>
);
