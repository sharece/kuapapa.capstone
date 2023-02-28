import { Link } from "react-router-dom";
import ahumap from "../../assets/napali-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import honopusign from "../../assets/ahu-signs/Napali_honopu.png";
import napalisign from "../../assets/napali-sign.png";

export const Honopu = () => (
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
          <div className="current-crumb">Honopū</div>
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
            <img width="100%" src={honopusign} alt="honopu road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Honopū: Conch bay Hono-pū, an ahupua‘a of Nāpali, lying between Kalalau
        and Nu‘alolo, contains many house sites and taro terraces fed by an
        extensive irrigation system. The ahupua‘a was said to have produced
        excellent olonā (sennit) ropes. American whaling captains preferred
        olonā ropes to the cordage that was made back in New England. It was
        stronger and lasted longer. Ua nīkiāi ‘ia i ke olonā o Honopū. Tied fast
        with the olonā cord of Honopū. Said of a situation that is made fast.
        Honopū was said to produce excellent olonā in ancient days. (Pukui 2833)
        The pū, which gives the valley its name, is a triton shell with its
        pointed tip removed that was used trumpet-like to warn everyone that a
        sacred chief was approaching. The kahuna Hulumanienie brought
        Laieikawai, the four Maile sisters, and Kahalaomapuana to live in Honopū
        with him after Laieikawai had been tricked into a marriage she did not
        want and which lost her the special attributes that had been hers from
        birth. (Haleole, Legend of Laieikawai)
      </div>
      <Footer />
    </div>
  </>
);
