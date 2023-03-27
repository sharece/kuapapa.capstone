import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import ahumap from "../../assets/puna-bd.png";
import punasign from "../../assets/punasign.png";
import niumalusign from "../../assets/ahu-signs/Puna_niumalu.png";

export const Niumalu = () => (
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
          <div className="current-crumb">Niumalu</div>
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
            <img width="100%" src={niumalusign} alt="niumalu road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Niumalu: Shaded coconut tree The boundary starts at the large fish pond
        of Pepeawa, crosses the range of hills called Hōkū to the sea in the
        northeast corner of the land of Kīpū, containing 1767 acres. *When two
        heros had a spear throwing contest, the first man threw his spear
        creating the hole in the mountain at Anahola. The second threw his spear
        which continued until it cast its shadow on the coconut trees here, thus
        the name Niu-malu. Which two heros were involved depends upon the story.
      </div>
      <Footer />
    </div>
  </>
);
