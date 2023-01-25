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
import kuapapaimg from "../../assets/kuapapaimg.jpg";
// import { ContactModal } from "./ContactModal";
// import colormap from "../../assets/color-map.png";
// import bannergif from "../../assets/gif.gif";
// import { ClickableMap } from "./ClickableMap";
import { ClickableMap2 } from "./ClickableMap2";
import React from "react";
// import { useSelector } from "react-redux";
// import { Outline } from "./Outline";
export const HomePage = () => {
  const playerRef = React.useRef(null);
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="home-img pt-8">
        <img src={kuapapaimg} alt="kauai img" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center text-2xl">
          "The entirety of Kaua‘i"
        </div>
        <div className="flex justify-center">
          <Title />
        </div>
      </div>
      <div className="w-96">
        <ClickableMap2 />
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
      <div className="report-title">
        <h1 className="bg-green-800 text-1xl p-3 font-xtra-bold w-full">
          Kaua'i Ocean Safety and Weather
        </h1>
        <div className="video-and-reports">
          <ReactPlayer
            className="ocean-video"
            width="24rem"
            height="200px"
            ref={playerRef}
            url="https://www.youtube.com/embed/eTTdHO0tDB8"
          />
          <div className="w-96">
            <Reports />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
