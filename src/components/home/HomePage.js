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
import { Title } from "./Title";
import ReactPlayer from "react-player";
import kuapapaimg from "../../assets/kuapapaimg.png";
// import { ContactModal } from "./ContactModal";
// import colormap from "../../assets/color-map.png";
// import bannergif from "../../assets/gif.gif";
import { ClickableMap } from "./ClickableMap";
import React from "react";
// import { useSelector } from "react-redux";
// import { Outline } from "./Outline";
export const HomePage = () => {
  const playerRef = React.useRef(null);
  return (
    <>
      <div className="nav-bar pb-8">
        <Navbar />
      </div>
      <div className="home-img">
        <img src={kuapapaimg} alt="kauai img" />
      </div>
      <Title />
      <div className="p-10">
        <ClickableMap />
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
      <div className="p-3">
        <Bio />
      </div>
      <div className="p-1 ">
        <h1 className="bg-green-800 text-1xl p-3 font-xtra-bold w-96">
          Kaua'i Ocean Safety and Weather
        </h1>
        <ReactPlayer
          className="ocean safety video"
          width="24rem"
          height="200px"
          ref={playerRef}
          url="https://www.youtube.com/embed/eTTdHO0tDB8"
        />
        <div className="w-96">
          <Reports />
        </div>
      </div>
      <Footer />
    </>
  );
};
