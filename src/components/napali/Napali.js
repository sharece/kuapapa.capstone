import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";
import napalisign from "../../assets/napali-sign.png";
import awaawapuhi from "../../assets/ahu-signs/Napali_awaawapuhi.png";
import hanakapiai from "../../assets/ahu-signs/Napali_hanakapiai.png";
import hanakoa from "../../assets/ahu-signs/Napali_hanakoa.png";
import pohakuau from "../../assets/ahu-signs/Napali_pohakuau.png";
import kalalau from "../../assets/ahu-signs/Napali_kalalau.png";
import honopu from "../../assets/ahu-signs/Napali_honopu.png";
import { Link } from "react-router-dom";
import mokupic from "../../assets/moku-imgs/napali-pic.png";
import napalimap from "../../assets/napali-moku-map.png";

export const Napali = () => (
  <>
    <Navbar />
    <div className="moku-container">
      <div className="moku-title pb-4 text-7xl tracking-widest flex justify-center">
        Nāpali
      </div>
      <div className="moku-pic">
        <img src={mokupic} alt="na pali coast" />
      </div>
      <div className="img-cap flex justify-center text-xs">
        Nāpali Coast, Kaua‘i
      </div>
      <div className="moku-map">
        <img src={napalimap} alt="napali map" />
      </div>
      <div className="moku-text">
        <p className="p-2">
          {" "}
          Nā pali’s plant is the olonā, a plant that grows straight whose stems
          are used to make among the strongest rope to come out of the Pacific
          through native ingenuity. Nineteenth-century western ships would often
          trade their own rope for olonā rope, including Capt. Cook himself, and
          Nāpali was one area where olonā plantations were once well known.
        </p>

        <p className="p-2">
          This reminds us of potential industries that remain to be tapped on
          Kaua‘i, industries that Kaua‘i could be uniquely situated to spawn
          into a thriving industry.{" "}
        </p>
        <p className="p-2">
          The fish (another i‘a in Hawaiian terms) is the honu, a creature whose
          story is one of near ecological disaster with an upturn in resurgence
          thanks to concerted efforts to stave off the collapse of its
          populations. A success story, the honu serves as an example of the
          potential for positive outcomes. As a well-loved seafood among native
          peoples of the Pacific, this resource, with proper lāhui management,
          could once again thrive as a food source. The color designated for
          Nāpali is the color of the sea on this coast, which is the brightest
          turquoise blue in the sunshine.
        </p>
        <div className="moku-moku-sign p-1">
          <img className="w-60" src={napalisign} alt="napali road sign" />
        </div>
        <div className="learn-more flex justify-center text-xl">
          Learn more about the ahupua‘a in the moku of Nāpali
        </div>
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl">
          <Link className="ahu-link" to="/awaawapuhi">
            <img src={awaawapuhi} alt="awaawapuhi road rign" />
          </Link>
          <Link className="ahu-link" to="/hanakapiai">
            <img src={hanakapiai} alt="hanakapiai road sign" />
          </Link>
          <Link className="ahu-link" to="/hanakoa">
            <img src={hanakoa} alt="hanakoa road sign" />
          </Link>
          <Link className="ahu-link" to="/pohakuau">
            <img src={pohakuau} alt="pohakuau road sign" />
          </Link>
          <Link className="ahu-link" to="/kalalau">
            <img src={kalalau} alt="kalalau road sign" />
          </Link>
          <Link className="ahu-link" to="/honopu">
            <img src={honopu} alt="honopu road sign" />
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
