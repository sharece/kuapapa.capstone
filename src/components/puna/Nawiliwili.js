import { Link } from "react-router-dom";
import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";
import ahumap from "../../assets/puna-bd.png";
import punasign from "../../assets/punasign.png";
import nawiliwilisign from "../../assets/ahu-signs/Puna_nawiliwili.png";
export const Nawiliwili = () => (
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
          <div className="current-crumb">Nāwiliwili</div>
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
            <img width="100%" src={nawiliwilisign} alt="nawiliwili road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Nāwiliwili: Ainakumuwai: Ahupua`a of Nawiliwili Bay What is special
        about Nawiliwili Bay? What was Nawiliwili Bay like before people
        arrived? How did Hawaiian settlers use their new home? What happened
        when sugar plantations began? Why is Nawiliwili Bay one of the most
        polluted bays in the state? What can we do to restore the health of
        Nawiliwili Bay? Explore these questions as you enjoy Nāwiliwili Bay.
      </div>
      <Footer />
    </div>
  </>
);
