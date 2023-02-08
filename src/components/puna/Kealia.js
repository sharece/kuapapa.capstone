import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import ahumap from "../../assets/puna-bd.png";
import kealiasign from "../../assets/ahu-signs/Puna_kealia.png";
import punasign from "../../assets/punasign.png";
import { Footer } from "../home/Footer";

export const Kealia = () => (
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
          <div className="current-crumb">Keālia</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="Puna ahupua'a breakdown" />
          </div>
          <Link className="back-to-moku" to="/puna">
            <div className="moku-sign">
              <img src={punasign} alt="puna sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={kealiasign} alt="kealia road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Keālia: The-salt-encrustation; Lit: Salt-land; Salt-pan Hele ka ho`i a
        hiki i Ke-ālia, ua napo`o ka lā. When one reaches Ke-ālia at last, the
        sun is set. Said of one who procrastinates. A play on alia (to wait).
        [Pukui 744] *When Hi`iaka and Wahineomao were on their way to Hā`ena to
        fetch Lohi‘au for Pele, near Ke-ālia they came upon a man cooking his
        luau (young taro leaves) to eat with his poi. Hi`iaka by her magic power
        cooked the luau in a few minutes. Looking into the man’s house, Hi`iaka
        saw a very sick woman whom all the kahuna had been unable to help.
        Hi`iaka uttered a prayer and at once health was given back to the woman.
        [Rice]
      </div>
      <Footer />
    </div>
  </>
);
