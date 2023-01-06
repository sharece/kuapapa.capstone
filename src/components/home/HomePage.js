import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Reports } from "./ocean.weather/Reports";
// import mapoutline from ".../assets/mapoutline.png";
import { Map } from "./Map";
// import { useSelector } from "react-redux";
// import { Outline } from "./Outline";
export const HomePage = () => {
  // const { contactModalOpen } = useSelector((store) => store.contactModal);
  return (
    // {contactModalOpen && <ContactModal />}
    <div>
      <Navbar />
      {/* <img className="map" src={mapoutline} alt="kauai map"></img> */}
      <Map />
      {/* //map */}
      {/* //title banner  */}
      {/* //bio */}
      {/* //Kaua'i Ocean Safety + Weather Report //footer = disclaimer - boundry - */}
      <Reports />
      <Footer />
    </div>
  );
};
