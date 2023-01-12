import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Reports } from "./ocean.weather/Reports";
import { Bio } from "./Bio";
import { Puna } from "../puna/Puna";
import { Kona } from "../kona/Kona";
import { Koolau } from "../koolau/Koolau";
import { Napali } from "../napali/Napali";
import { Niihau } from "../niihau/Niihau";
import { Link } from "react-router-dom";
// import { ContactModal } from "./ContactModal";
// import colormap from "../../assets/color-map.png";
import bannergif from "../../assets/gif.gif";
import { ClickableMap } from "./ClickableMap";
// import { useSelector } from "react-redux";
// import { Outline } from "./Outline";
export const HomePage = () => {
  // const { contactModalOpen } = useSelector((store) => store.contactModal);
  return (
    // {contactModalOpen && <ContactModal />}
    <>
      <div className="gif">
        <img src={bannergif} alt="banner gif"></img>
      </div>
      <Bio />
      <div className="img-container">
        <ClickableMap />
        {/* <img className="" src={colormap} alt="map"></img> */}
      </div>
      <div className="moku-link-container">
        <Link to="/puna" element={Puna}>
          PUNA
        </Link>
        <Link to="/kona" element={Kona}>
          KONA
        </Link>
        <Link to="/koolau" element={Koolau}>
          KO'OLAU
        </Link>
        <Link to="/napali" element={Napali}>
          NAPALI
        </Link>
        <Link to="/niihau" element={Niihau}>
          NIIHAU
        </Link>
      </div>
      <Reports />
      <Footer />
      <div className="nav-bar">
        <Navbar />
      </div>
    </>
  );
};
