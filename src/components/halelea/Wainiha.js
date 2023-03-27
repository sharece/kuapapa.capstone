import { Link } from "react-router-dom";
import ahumap from "../../assets/halelea-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import wainihasign from "../../assets/ahu-signs/Halelea_wainiha.png";
import haleleasign from "../../assets/haleleabigsign.png";

export const Wainiha = () => (
  <>
    <Navbar />
    <div className="ahu-bg">
      <div className="ahu-elements">
        <div className="breadcrumb-menu pt-4 flex color-white">
          <Link className="crumb" to="/">
            Home
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <Link className="crumb" to="/halelea">
            Halele‘a
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <div className="current-crumb">Wainiha</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="halelea breakdown" />
          </div>
          <Link className="back-to-moku" to="/halelea">
            <div className="moku-sign">
              <img src={haleleasign} alt="halelea sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={wainihasign} alt="wainiha road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Wainiha: Angry stream Lit: Unfriendly stream Alt: Wai-naha, Curving
        stream. The headwaters of Wainiha river rise in Alaka`i Swamp and
        Wai`ale`ale lake and flow 14 miles to the sea, making this the longest
        valley of Kaua`i. Wainiha, with 43.5 square kilometers, is the second
        largest ahupua`a of Halele`a. The river has formed a narrow, steep sided
        valley whose cliffs at places rise over 3000 feet from the sea level.
        Countless tributary streams flow from Alaka`i, especially after the
        heavy rains that often inundate the area. The valley only widens a
        little towards the sea to a bay that is usually too rough for any ocean
        activity. Consequently the border was widened to include the long flat
        area and reef of Naue. There were lo`i far up into the valley, many of
        them displaying great ingenuity in their placement and the engineering
        of the ditches necessary to water the fields. Sweet potatoes for food,
        paper mulberry for clothing, olonā for fiber, noni for medicine, and
        other useful plants were grown the entire length of the valley. Bananas
        grew everywhere. One species, the mai‘a Polapola, the Borabora banana
        (Musa pehn), grew wild. This banana was considered to be indigenous to
        Kaua`i, and perhaps was brought here by the legendary people called the
        Mu who lived in this wild valley. Another legendary people, the
        Menehune, also made Wainiha their home. Wainiha was famed for the
        variety and quality of the `awa, Piper mythysticum, that grew here. `Awa
        mamaka, a variety of kava with short internodes and a light green stalk,
        was always in demand. The best, `awa mokihana, which had a fragrance
        similar to the mokihana berries of mountains, had short yellow-white
        internodes and hairlike roots. It gave a particularly potent brew and
        was reserved strictly for the use of the highest chiefs. Because of the
        richness of the land, Wainiha has always supported a large population.
        In the 1914 census, there were nine villages reaching from the sea to
        the deepest part of the valley. It was a popular place of the Ruling
        Chiefs of ancient times. The last king of Kauai, Kaumuali`i, often lived
        here during his childhood and he married his first wife here. [For
        5:97][PE] [Geo][Emer][Alex][Handy, Hwn Plant: 420][Earle: 32]
      </div>
      <Footer />
    </div>
  </>
);
