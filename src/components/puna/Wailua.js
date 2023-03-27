import { Link } from "react-router-dom";
import wailuasign from "../../assets/ahu-signs/Puna_wailua.png";
import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";
import ahumap from "../../assets/puna-bd.png";
import punasign from "../../assets/punasign.png";
export const Wailua = () => (
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
          <div className="current-crumb">Wailuanuiho‘āno</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="Puna ahupuaa breakdown" />
          </div>
          <Link className="back-to-moku" to="/puna">
            <div className="moku-sign">
              <img src={punasign} alt="puna sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={wailuasign} alt="wailua road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Wailua stretches from the sea to the top of mount Wai`alea`le. Wailua
        means Two waters. Wailua: Two waters; Lit: Water pit; Lit: Spirit of a
        dead or alive person Ahupua`a of Puna district stretching from the sea
        to the top of mount Wai`alea`le. Two river watersheds flow over
        countless waterfalls until they join together about a mile from the
        ocean. Along the banks of the Wailua river lived queens and kings,
        heroes and heroines, dragons and sharks, and many magical beings whose
        legends reflect a thousand years of history. Captain George Vancouver
        was the first European captain to visit Wailua in 1793. #Rice, Dickey,
        and Damon say that the name means Water-pit because the river drops over
        three waterfalls into deep holes. Two-waters refers to the two branches
        of the river. #A wailua is the spirit of a ghost or spirit of one seen
        before or after death, separate from the body, (and) the spirits of the
        dead gathered at Pihanakalani, then to the sound of nose flutes and
        drums, walked to the river’s edge on the night of the full moon and
        embarked on canoes. They sailed down the river and along to coast until
        they came to Polihale where they leaped into the land of the dead. #"The
        concept of Wailua as Two waters never occurred to the ancient
        Hawaiians." (Dickey) Ka wai opua-makani o Wailua I hulihia e ke kai;
        awahia ka lau hau. The wind-beaten stream of Wailua is tossed into waves
        from the sea; Salt-drenched are the leaves of the hau, the stalks of the
        taro are all rotted. (Emer UL) Ka wai hālau o Wailua. The expansive
        waters of Wailua. Wailua, Kaua`i, is the land of large streams. (Pukui
        1648)
      </div>
      <Footer />
    </div>
  </>
);
