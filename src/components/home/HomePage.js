import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Reports } from "./ocean.weather/Reports";
import { Bio } from "./Bio";
import { Puna } from "../puna/Puna";
import { Kona } from "../kona/Kona";
import { Koolau } from "../koolau/Koolau";
import { Napali } from "../napali/Napali";
import { Niihau } from "../niihau/Niihau";
import { Halelea } from "../halelea/Halelea";
import puna from "../../assets/ahu-signs/puna-label.jpg";
import kona from "../../assets/ahu-signs/kona-label.jpg";
import koolau from "../../assets/ahu-signs/koolau-label.jpg";
import napali from "../../assets/ahu-signs/napali-label.jpg";
import niihau from "../../assets/ahu-signs/niihau-label.jpg";
import halelea from "../../assets/ahu-signs/halelea-label.jpg";
import { Link } from "react-router-dom";
import { Title } from "./Title";
import ReactPlayer from "react-player";
import kuapapaimg from "../../assets/homeimg.png";
import { ClickableMap } from "./ClickableMap";
import { ClickableMap2 } from "./ClickableMap2";
import React from "react";

export const HomePage = () => {
  const playerRef = React.useRef(null);
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="home-img pt-8 border-b-2 border-slate-200">
        <img src={kuapapaimg} alt="kauai img" />
      </div>
      <div className="flex justify-center text-7xl">
        <Title />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center text-2xl">
          "The entirety of Kaua‘i"
        </div>
        <div className="map-2">
          <ClickableMap2 />
        </div>

        <div className="moku-link-container p-10">
          <Link to="/niihau" element={Niihau}>
            <div className="moku-sign">
              <img src={niihau} alt="niihau sign" />
            </div>
          </Link>
          <Link to="/kona" element={Kona}>
            <div className="moku-sign">
              <img src={kona} alt="kona sign" />
            </div>
          </Link>
          <Link to="/napali" element={Napali}>
            <div className="moku-sign">
              <img src={napali} alt="napali sign" />
            </div>
          </Link>
          <Link to="/halelea" element={Halelea}>
            <div className="moku-sign">
              <img src={halelea} alt="niihau sign" />
            </div>
          </Link>
          <Link to="/koolau" element={Koolau}>
            <div className="moku-sign">
              <img src={koolau} alt="koolau sign" />
            </div>
          </Link>
          <Link to="/puna" element={Puna}>
            <div className="moku-sign">
              <img src={puna} alt="puna sign" />
            </div>
          </Link>
        </div>
      </div>

      <div className="map-1">
        <ClickableMap />
      </div>

      <div className="p-3">
        <Bio />
      </div>
      <div className="report-title">
        <h1 className="bg-slate-200 flex justify-center text-xl p-3 font-xtra-bold w-full">
          Kaua'i Ocean Safety and Weather
        </h1>
        <div className="weather-section">
          <Reports />
          <div className="video">
            <ReactPlayer
              className="ocean-video"
              width="24rem"
              height="200px"
              ref={playerRef}
              url="https://www.youtube.com/embed/eTTdHO0tDB8"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
