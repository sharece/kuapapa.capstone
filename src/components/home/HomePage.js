import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Reports } from "./ocean.weather/Reports";
// import mapoutline from ".../assets/mapoutline.png";
// import bannergif from "../../assets/gif.GIF";
// import { Map } from "./Map";
import { Bio } from "./Bio";
import { Puna } from "../puna/Puna";
import { Kona } from "../kona/Kona";
import { Koolau } from "../koolau/Koolau";
import { Napali } from "../napali/Napali";
import { Niihau } from "../niihau/Niihau";
import { Link } from "react-router-dom";
import placeholdermap from "../../assets/roughdraft-map.jpg";
// import { useSelector } from "react-redux";
// import { Outline } from "./Outline";
export const HomePage = () => {
  // const { contactModalOpen } = useSelector((store) => store.contactModal);
  return (
    // {contactModalOpen && <ContactModal />}
    <div>
      <Navbar />
      {/* <img src={bannergif} alt="banner gif"></img> */}
      <div className="img-container">
        <img clasName="" src={placeholdermap} alt="map"></img>
      </div>
      {/* //title banner  */}
      {/* //bio */}
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
      <Bio />
      {/* //Kaua'i Ocean Safety + Weather Report //footer = disclaimer - boundry - */}
      <Reports />
      <Footer />
    </div>
  );
};
