import { Link } from "react-router-dom";
import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";
import nawiliwilibd from "../../assets/ahu-divisions/Nawiliwili.png";
import punasign from "../../assets/punasign.png";
import nawiliwilisign from "../../assets/ahu-signs/Puna_nawiliwili.png";
export const Nawiliwili = () => (
  <>
    <Navbar />
    <div className="ahu-elements">
      <div className="ahu-sign">
        <img width="100%" src={nawiliwilisign} alt="nawiliwili road sign" />
      </div>
      <div className="ahu-map-and-sign">
        <div className="kipubd">
          <img src={nawiliwilibd} alt="nawiliwili ahupuaa breakdown" />
        </div>
        <Link className="back-to-moku" to="/puna">
          <div className="moku-sign">
            <img src={punasign} alt="puna sign" />
          </div>
        </Link>
      </div>
      <div className="ahu-text">
        Nāwiliwili: Ainakumuwai: Ahupua`a of Nawiliwili Bay What is special
        about Nawiliwili Bay? What was Nawiliwili Bay like before people
        arrived? How did Hawaiian settlers use their new home? What happened
        when sugar plantations began? Why is Nawiliwili Bay one of the most
        polluted bays in the state? What can we do to restore the health of
        Nawiliwili Bay? Explore these questions as we tour the ahupua'a of
        Nawiliwili Bay.
      </div>
    </div>
    <Footer />
  </>
);
