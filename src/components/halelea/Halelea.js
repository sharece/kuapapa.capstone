import { Navbar } from "../home/Navbar";
import { Link } from "react-router-dom";
import { Footer } from "../home/Footer";
import haleleamap from "../../assets/ahu-divisions/Haleleabd.png";
import haleleasign from "../../assets/ahu-signs/haleleasign.png";
import mokupic from "../../assets/moku-imgs/haleleamokupic.png";
import kalihikai from "./Kalihikai";
import kalihiwai from "./Kalihiwai";
import hanalei from "./Hanalei";
import waioli from "./Waioli";
import waikoko from "./Waikoko";
import waipa from "./Waipa";
import lumahai from "./Lumahai";
import wainiha from "./Wainiha";
import haena from "./Haena";

export const Halelea = () => (
  <>
    <Navbar />
    <div className="moku-container">
      <h1 className="text-7xl p-8">Halele‘a</h1>
      <div className="moku-map">
        <img width="100%" src={haleleamap} alt="halelea map" />
      </div>
      <div className="moku-sign-and-img">
        <div className="moku-sign">
          <img src={haleleasign} alt="halelea road sign" />
        </div>
        <div className="moku-pic">
          <img src={mokupic} alt="halelea moku pic" />
        </div>
      </div>
      <div className="moku-links-and-text">
        <div className="ahu-link-container">
          <Link className="ahu-link" to="/kalihikai">
            <img src={kalihikai} alt="kalihikai road sign" />
          </Link>
          <Link className="ahu-link" to="/kalihiwai">
            <img src={kalihiwai} alt="kalihiwai road sign" />
          </Link>
          <Link className="ahu-link" to="/hanalei">
            <img src={hanalei} alt="hanalei road sign" />
          </Link>
          <Link className="ahu-link" to="/waioli">
            <img src={waioli} alt="waioli road sign" />
          </Link>
          <Link className="ahu-link" to="/waikoko">
            <img src={waikoko} alt="waikoko road sign" />
          </Link>
          <Link className="ahu-link" to="/waipa">
            <img src={waipa} alt="waipa road sign" />
          </Link>
          <Link className="ahu-link" to="/lumahai">
            <img src={lumahai} alt="lumahai road sign" />
          </Link>
          <Link className="ahu-link" to="/wainiha">
            <img src={wainiha} alt="wainiha road sign" />
          </Link>
          <Link className="ahu-link" to="/haena">
            <img src={haena} alt="haena road sign" />
          </Link>
        </div>
        <div className="moku-text">
          The plant icon designated for the moku of Halele‘a is the native
          laua‘e, a fern that has a beautiful scent like maile, another famous
          iconic plant of Kaua‘i. Another fern bears the same name as this and
          is very common, especially in landscaping, but this laua‘e is rare and
          deserves efforts to replenish it in the forest. This logo serves as a
          reminder of the fragile state of Kaua‘i’s ecology and native biota and
          the beautiful scent of this laua‘e serves as a reminder as to why
          Kaua‘i people should care about preserving something so beautiful. The
          fish designation for Halele‘a is the akule, another common and
          well-loved fish for food. That this fish often swarms in large numbers
          off-shore is intended as a counter to the rarity of the laua‘e, again,
          a reminder about the fragile balancing act in Kaua‘i’s ecology that
          requires constant attention in order not to let human carelessness
          lead to environmental catastrophe. The color designation is the
          predominant color of the land of Halele‘a. There is no place in this
          moku that is not green.
        </div>
      </div>
    </div>
    <Footer />
  </>
);
