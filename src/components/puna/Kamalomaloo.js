import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import kamalomaloo from "../../assets/Puna_kamalomaloo.png";
import kamalomaloobd from "../../assets/ahu-divisions/Kamalomaloo.png";
import { Footer } from "../home/Footer";
export const Kamalomaloo = () => (
  <>
    <Navbar />
    <img src={kamalomaloobd} alt="kamalomaloo ahupuaa breakdown" />
    <div>
      <Link className="back-to-moku" to="/puna">
        Take me back to Puna
      </Link>
      <img src={kamalomaloo} alt="kamalomaloo road sign" />
      <p>
        Kamalomalo‘o: The dry malo The malo was the principal clothing of a man.
        It was a piece of tapa about 18 inches wide and 8 feet long.
      </p>
    </div>
    <Footer />
  </>
);
