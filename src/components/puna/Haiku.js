import { Link } from "react-router-dom";
import haiku from "../../assets/Puna_haiku.png";
import haikubd from "../../assets/ahu-divisions/Haiku.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
export const Haiku = () => (
  <>
    <Navbar />
    <div>
      <img src={haikubd} alt="haiku ahupuaa breakdown" />
      <Link className="back-to-moku" to="/puna">
        Take me back to Puna
      </Link>
      <img src={haiku} alt="haiku road rign" />
      <p>
        Ha‘ikū: Speak-abruptly; Sharp-break Lit: To stand behind the spoken word
        The ahupua‘a of Ha‘i-kū (To stand behind the spoken word) has an unusual
        shape. At the eastern end, it comprises the mountain range across
        Nāwiliwili harbor, runs in a narrow strip along the Hulē‘ia river and
        bulges out in the upland flats. Ha‘i-kū can also be translated to mean
        To speak abruptly, Haughty, Conceited, or A sharp break.
      </p>
      <p>
        Ha`ikū comprises the mountain range across Nāwiliwili harbor, runs in a
        narrow strip along the Hulē`ia river and bulges out in the upland flats.
        Ha`i-kū can be translated to mean To speak abruptly.
      </p>
    </div>
    <Footer />
  </>
);
