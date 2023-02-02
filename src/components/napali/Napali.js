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
import mokupic from "../../assets/moku-imgs/napalimokupic.png";
import napalimap from "../../assets/napalimap.png";

export const Napali = () => (
  <>
    <Navbar />
    <div className="moku-container">
      <div className="pb-4 text-7xl flex justify-center">Napali</div>
      <div className="moku-pic">
        <img src={mokupic} alt="na pali coast" />
      </div>
      <div className="flex justify-center flex-col p-2">
        <div className="flex"></div>
        <div className="moku-map">
          <img width="100%" src={napalimap} alt="napali map" />
        </div>
      </div>
      <div className="moku-text">
        <p className="p-2">
          {" "}
          Nāpali’s plant is the olonā, a plant that grows straight whose stems
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
      </div>
      <div className="learn-more text-2xl">
        Learn more about Ahupua'a's in the Moku of Napali :
      </div>
      <div className="moku-sign p-1">
        <img className="w-28" src={napalisign} alt="napali road sign" />
      </div>
      <div className="ahu-link-container">
        <div className="ahu-link-col-1">
          <Link className="ahu-link" to="/awaawapuhi">
            <img src={awaawapuhi} alt="awaawapuhi road rign" />
          </Link>
          <Link className="ahu-link" to="/hanakapiai">
            <img src={hanakapiai} alt="hanakapiai road sign" />
          </Link>
          <Link className="ahu-link" to="/hanakoa">
            <img src={hanakoa} alt="hanakoa road sign" />
          </Link>
        </div>
        <div className="ahu-link-col-2">
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
      <Footer />
    </div>
  </>
);
