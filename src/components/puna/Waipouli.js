import { Link } from "react-router-dom";
import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";
import ahumap from "../../assets/puna-bd.png";
import waipoulisign from "../../assets/ahu-signs/Puna_waipouli.png";
import punasign from "../../assets/punasign.png";
export const Waipouli = () => (
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
          <div className="current-crumb">Waipouli</div>
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
            <img width="100%" src={waipoulisign} alt="waipouli road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Waipouli: Dark water Lit: Water of darkness; Lit: Water darkened by an
        eclipse Wai-pouli is an ahupua`a of the Puna district, between Kapa`a
        and Olohena. It is possible that an eclipse of the sun was observed here
        and gave its name to the stream. *Hi`iaka returned to Kaua`i after Pele
        had destroyed Lohi`au by covering him with lava on the edge of
        Halemaumau volcano. Hi`iaka had sworn never to see Pele again. She
        arrived here and was entertained with a game of kilu. Lohi`au, restored
        to life by Hi`iaka’s uncles, on his arrival at Hanamā’ulu, heard of this
        and came to the game hidden behind folds of tapa carried by two old men.
        When Hi`iaka struck the marker of one of the old men, Lohi`au chanted a
        song he and Hi`iaka had created on their journeys together. When Hi`iaka
        struck the marker of the other old man, Lohi`au chanted a song only the
        two of them knew. Hi`iaka pushed aside the tapa and found Lohi`au. They
        were married and lived the rest of their lives at Hā’ena.[Rice] Nā keiki
        o Waipouli me Honoma`ele. A humorous reference to very dark people. A
        play on pouli (dark) and`ele (black). (Pukui 2237)
      </div>
      <Footer />
    </div>
  </>
);
