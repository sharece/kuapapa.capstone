import { Link } from "react-router-dom";
import nawiliwili from "../../assets/Puna_nawiliwili.png";
import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";
import nawiliwilibd from "../../assets/ahu-divisions/Nawiliwili.png";
export const Nawiliwili = () => (
  <>
    <Navbar />
    <img src={nawiliwilibd} alt="nawiliwili ahupuaa breakdown" />
    <Link className="back-to-moku" to="/puna">
      Take me back to Puna
    </Link>
    <div>
      <img src={nawiliwili} alt="nawiliwili road sign" />
      <p>
        Nāwiliwili: Ainakumuwai: Ahupua`a of Nawiliwili Bay What is special
        about Nawiliwili Bay? What was Nawiliwili Bay like before people
        arrived? How did Hawaiian settlers use their new home? What happened
        when sugar plantations began? Why is Nawiliwili Bay one of the most
        polluted bays in the state? What can we do to restore the health of
        Nawiliwili Bay? Explore these questions as we tour the ahupua'a of
        Nawiliwili Bay.
      </p>
    </div>
    <Footer />
  </>
);
