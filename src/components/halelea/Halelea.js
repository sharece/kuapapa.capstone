import { Navbar } from "../home/Navbar";
import { Link } from "react-router-dom";
import { Footer } from "../home/Footer";
import haleleamap from "../../assets/haleleahighlight.png";
import haleleasign from "../../assets/haleleabigsign.png";
import mokupic from "../../assets/haleleamoku.png";
// import kalihikai from "../../assets/ahu-signs/Halelea_kalihikai.png";
import kalihiwai from "../../assets/ahu-signs/Halelea_kalihiwai.png";
import hanalei from "../../assets/ahu-signs/Halelea_hanalei.png";
import waioli from "../../assets/ahu-signs/Halelea_waioli.png";
import waikoko from "../../assets/ahu-signs/Halelea_waikoko.png";
import waipa from "../../assets/ahu-signs/Halelea_waipa.png";
import lumahai from "../../assets/ahu-signs/Halelea_lumahai.png";
import wainiha from "../../assets/ahu-signs/Halelea_wainiha.png";
import haena from "../../assets/ahu-signs/Halelea_haena.png";

export const Halelea = () => (
  <>
    <Navbar />
    <div className="moku-container">
      <div className="moku-title pb-4 text-7xl tracking-widest flex justify-center">
        Halele‘a
      </div>
      <div className="moku-pic">
        <img src={mokupic} alt="halelea moku pic" />
      </div>
      <div className="img-cap flex text-xs justify-center">Hanalei, Kaua‘i</div>
      <div className="flex justify-center flex-col p-2">
        <div className="moku-map">
          <img width="100%" src={haleleamap} alt="halelea map" />
        </div>
      </div>
      <div className="moku-text">
        <p className="p-2">
          The plant icon designated for the moku of Halele‘a is the native
          laua‘e, a fern that has a beautiful scent like maile, another famous
          iconic plant of Kaua‘i. Another fern bears the same name as this and
          is very common, especially in landscaping, but this laua‘e is rare and
          deserves efforts to replenish it in the forest. This logo serves as a
          reminder of the fragile state of Kaua‘i’s ecology and native biota and
          the beautiful scent of this laua‘e serves as a reminder as to why
          Kaua‘i people should care about preserving something so beautiful.{" "}
        </p>
        <p className="p-2">
          The fish designation for Halele‘a is the akule, another common and
          well-loved fish for food. That this fish often swarms in large numbers
          off-shore is intended as a counter to the rarity of the laua‘e, again,
          a reminder about the fragile balancing act in Kaua‘i’s ecology that
          requires constant attention in order not to let human carelessness
          lead to environmental catastrophe.
        </p>
        <p className="p-2">
          The color designation is the predominant color of the land of
          Halele‘a. There is no place in this moku that is not green.
        </p>
        <div className="moku-moku-sign p-1">
          <img src={haleleasign} alt="halelea road sign" />
        </div>
        <div className="learn-more flex justify-center text-xl">
          Learn more about the ahupua‘a in the moku of Halele‘a
        </div>
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl">
          <Link className="ahu-link" to="/kalihiwai">
            {/* Kalihiwai */}
            <img src={kalihiwai} alt="kalihiwai road sign" />
          </Link>
          <Link className="ahu-link" to="/hanalei">
            {/* Hanalei */}
            <img src={hanalei} alt="hanalei road sign" />
          </Link>
          <Link className="ahu-link" to="/waioli">
            <img src={waioli} alt="waioli road sign" />
            {/* waioli */}
          </Link>
          <Link className="ahu-link" to="/waikoko">
            {/* Waikoko */}
            <img src={waikoko} alt="waikoko road sign" />
          </Link>
          <Link className="ahu-link" to="/waipa">
            {/* Waipa */}
            <img src={waipa} alt="waipa road sign" />
          </Link>
          <Link className="ahu-link" to="/lumahai">
            <img src={lumahai} alt="lumahai road sign" />
          </Link>
          <Link className="ahu-link" to="/wainiha">
            {/* Wainiha */}
            <img src={wainiha} alt="wainiha road sign" />
          </Link>
          <Link className="ahu-link" to="/haena">
            {/* Haena */}
            <img src={haena} alt="haena road sign" />
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
