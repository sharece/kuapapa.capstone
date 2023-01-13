import { Link } from "react-router-dom";
import kipu from "../../assets/Puna_kipu.png";
import { Navbar } from "../home/Navbar";
import kipubd from "../../assets/ahu-divisions/Kipu.png";
import { Footer } from "../home/Footer";

export const Kipu = () => (
  <>
    <Navbar />
    <img src={kipubd} alt="kipu ahupuaa breakdown" />
    <Link className="back-to-moku" to="/puna">
      Take me back to Puna
    </Link>
    <div>
      <img src={kipu} alt="kipu sign" />
      <p>
        {" "}
        Kīpū: Hold-back or brace, as a canoe on a wave with a paddle It
        straddles the Hā`upu mountain range and is divided in two parts,
        Kīpū-uka and Kīpū-kai. Hā`upu peak dominates the land.
      </p>
      <p>
        Kīpū straddles the Hā`upu mountain range and is divided in two parts.
        Kīpū means Hold-back or brace, as a canoe on a wave with a paddle.
      </p>
    </div>
    <Footer />
  </>
);
