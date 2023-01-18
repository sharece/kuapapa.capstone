import { Link } from "react-router-dom";
import haikubd from "../../assets/ahu-divisions/Haiku.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import punasign from "../../assets/punasign.png";
import haikusign from "../../assets/ahu-signs/Puna_haiku.png";
export const Haiku = () => (
  <>
    <Navbar />
    <div className="ahu-elements">
      <div className="ahu-sign">
        <img width="100%" src={haikusign} alt="haiku road sign" />
      </div>
      <div className="ahu-map-and-sign">
        <div className="haikubd">
          <img src={haikubd} alt="haiku ahupuaa breakdown" />
        </div>
        <Link className="back-to-moku" to="/puna">
          <div className="moku-sign">
            <img src={punasign} alt="puna sign" />
          </div>
        </Link>
      </div>
    </div>
    <div className="ahu-text">
      Ha‘ikū: Speak-abruptly; Sharp-break Lit: To stand behind the spoken word
      The ahupua‘a of Ha‘i-kū (To stand behind the spoken word) has an unusual
      shape. At the eastern end, it comprises the mountain range across
      Nāwiliwili harbor, runs in a narrow strip along the Hulē‘ia river and
      bulges out in the upland flats. Ha‘i-kū can also be translated to mean To
      speak abruptly, Haughty, Conceited, or A sharp break. Ha`ikū comprises the
      mountain range across Nāwiliwili harbor, runs in a narrow strip along the
      Hulē`ia river and bulges out in the upland flats. Ha`i-kū can be
      translated to mean To speak abruptly.
    </div>
    <Footer />
  </>
);
