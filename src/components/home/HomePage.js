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
import { DesktopMap } from "./DesktopMap";
import ReactPlayer from "react-player";
import kuapapaimg from "../../assets/homeimg.png";
import { MobileBio } from "./MobileBio";
// import { ClickableMap } from "./ClickableMap";
import { Title } from "./Title";
import { TabletMap } from "./TabletMap";
import React from "react";
export const HomePage = () => {
  const playerRef = React.useRef(null);
  return (
    <>
      <div className="pb-2">
        <Navbar />
      </div>
      <div className="home-bg-container">
        <div className="home-bg">
          <div className="desktop-title  flex justify-center">
            <Title />
          </div>
          <div className="moku-links-and-map  pb-4 flex flex-col justify-center">
            <div className="tablet-map">
              <TabletMap />
            </div>
            <div className="desktop-bio-n-map">
              <div className="desktop-map">
                <DesktopMap />
              </div>
            </div>
            <div className="click-map">
              <div className="flex text-white justify-center text-xlrg">
                Click the map to select a moku!
              </div>
            </div>
            {/* <div className="mobile-title p-8 text-white text-lrg tracking-wide">
            <Title />
          </div> */}
            <div className="moku-link-container">
              <Link to="/niihau" element={Niihau}>
                <div className="home-moku-sign">
                  <img src={niihau} alt="niihau sign" />
                </div>
              </Link>
              <Link to="/kona" element={Kona}>
                <div className="home-moku-sign">
                  <img src={kona} alt="kona sign" />
                </div>
              </Link>
              <Link to="/napali" element={Napali}>
                <div className="home-moku-sign">
                  <img src={napali} alt="napali sign" />
                </div>
              </Link>
              <Link to="/halelea" element={Halelea}>
                <div className="home-moku-sign">
                  <img src={halelea} alt="niihau sign" />
                </div>
              </Link>
              <Link to="/koolau" element={Koolau}>
                <div className="home-moku-sign">
                  <img src={koolau} alt="koolau sign" />
                </div>
              </Link>
              <Link to="/puna" element={Puna}>
                <div className="home-moku-sign">
                  <img src={puna} alt="puna sign" />
                </div>
              </Link>
            </div>
            <div className="mobile-bio">
              <MobileBio />
            </div>
          </div>
          <div className="desktop-bio">
            <Bio />
          </div>
        </div>
      </div>
      <div className="report-title">
        <div className="flex justify-center text-xl p-3 font-xtra-bold w-full">
          Kaua'i Ocean Safety and Weather
        </div>
      </div>
      <div className="hanalei-bay">
        <img src={kuapapaimg} alt="kauai img" />
      </div>
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
      <Footer />
    </>
  );
};
