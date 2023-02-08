import { Link } from "react-router-dom";
import ahumap from "../../assets/kona-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import lawaisign from "../../assets/ahu-signs/Kona_lawai.png";
import konasign from "../../assets/ahu-signs/konasign.png";

export const Lawai = () => (
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
          <div className="current-crumb">Lāwa’i</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="lawai ahupuaa breakdown" />
          </div>
          <Link className="back-to-moku" to="/kona">
            <div className="moku-sign">
              <img src={konasign} alt="Kona sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={lawaisign} alt="lawai road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Lāwa’i Lit: Day to end the fishing taboo An ahupua`a of the Kona
        district between Kalāheo and Koloa. Petroglyphs have been found in this
        valley on the east side of a large rock a short distance toward the sea
        from the former cannery. These are the regular type of scratched or
        pecked petroglyphs. #There was an altar to the fish god on the east
        coast of Lāwa’i just below the road at the lower end of the entrance
        road destroyed by a land slide a few years ago, but on the rocks below
        is still a round hole about nine inches in diameter, worn very smooth,
        apparently by rocks coursing around in it, which the Hawaiians used as
        an `awa bowl in which to offer `awa to a fish god. Hawaiians prepared
        the `awa and placed it in the bowl, mixed and then taken out and
        strained through rushed (ahuawa), and poured into a long narrow hole
        resembling a fish’s mouth in an adjoining rock. The shark god,
        Ku-hai-moana, came up in the breakers at the base of the cliff to
        receive the `awa. A crack in the rock leading into the `awa bowl may
        have served as its handle. Another altar to a fish god was on the west
        coast of Lāwa’i. [Stau] *A supernatural dog named Poki was said to have
        owned land at Lāwa’i and Wahi-awa.
      </div>
      <Footer />
    </div>
  </>
);
