import { Link } from "react-router-dom";
import waipouli from "../../assets/Puna_waipouli.png";
import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";
import waipoulibd from "../../assets/ahu-divisions/Waipouli.png";
export const Waipouli = () => (
  <>
    <Navbar />

    <div>
      <img src={waipoulibd} alt="waipouli ahupuaa breakdown" />
      <Link className="back-to-moku" to="/puna">
        Take me back to Puna
      </Link>
      <img src={waipouli} alt="waipouli road sign" />
      <p>
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
      </p>
    </div>
    <Footer />
  </>
);
