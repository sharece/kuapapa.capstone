import { Link } from "react-router-dom";
import ahumap from "../../assets/kona-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import kalaheosign from "../../assets/ahu-signs/Kona_kalaheo.png";
import konasign from "../../assets/ahu-signs/konasign.png";

export const Kalaheo = () => (
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
          <div className="current-crumb">Kalāheo</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="kalaheo ahupuaa breakdown" />
          </div>
          <Link className="back-to-moku" to="/kona">
            <div className="moku-sign">
              <img src={konasign} alt="Kona sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={kalaheosign} alt="kalaheo road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Kalāheo: The proud day An ahupua‘a of the Kona district. The gully that
        runs from Lono-awa bay to the village of Kalāheo is normally termed
        Kalaheo gulch. However, in a few old maps, there are two names for the
        gulch, Kalāheo and Ka-wai-haka. Probably the upper reaches of the gulch
        was called Kalāheo because of its affinity to the village of the same
        name. The lower reaches was probably called Ka-wai-haka which refers to
        a shelf of water at the mouth of the gulch gushing from the eastern side
        at a talus slope. There were many house sites in Kalāheo gulch. Most of
        these were stone platforms 15 feet square. There were also taro terraces
        further inland. Ku‘u-anu Lit: Releasing coldness A wind of Kalāheo. [For
        5:97] Kuamo‘o Lit: Backbone The sea off shore of Kalāheo. [LCA 6647]
      </div>
      <Footer />
    </div>
  </>
);
