import { Link } from "react-router-dom";
import niumalu from "../../assets/Puna_niumalu.png";
import { Navbar } from "../home/Navbar";
import niumalubd from "../../assets/ahu-divisions/Niumalu.png";
import { Footer } from "../home/Footer";
export const Niumalu = () => (
  <>
    <Navbar />
    <img src={niumalubd} alt="niumalu ahupuaa breakdown" />
    <Link className="back-to-moku" to="/puna">
      Take me back to Puna
    </Link>
    <div>
      <img src={niumalu} alt="niumalu road sign" />
      <p>
        Niumalu: Shaded coconut tree The boundary starts at the large fish pond
        of Pepeawa, crosses the range of hills called Hōkū to the sea in the
        northeast corner of the land of Kīpū, containing 1767 acres. *When two
        heros had a spear throwing contest, the first man threw his spear
        creating the hole in the mountain at Anahola. The second threw his spear
        which continued until it cast its shadow on the coconut trees here, thus
        the name Niu-malu. Which two heros were involved depends upon the story.
      </p>
    </div>
    <Footer />
  </>
);
