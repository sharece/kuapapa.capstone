import { Link } from "react-router-dom";
import kalapaki from "../../assets/Puna_kalapaki.png";
import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";
import kalapakibd from "../../assets/ahu-divisions/Kalapaki.png";
export const Kalapaki = () => (
  <>
    <Navbar />
    <img src={kalapakibd} alt="kalapaki ahupuaa breakdown" />
    <Link className="back-to-moku" to="/puna">
      Take me back to Puna
    </Link>
    <div>
      <img src={kalapaki} alt="kalapaki road sign" />

      <p>Kalapakī is situated between Nāwiliwili and Hanama`ulu ahupua'a.</p>
    </div>
    <Footer />
  </>
);
