import { Link } from "react-router-dom";
import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";
import konamap from "../../assets/kona-moku-map.png";
import konasign from "../../assets/ahu-signs/konasign.png";
import mokupic from "../../assets/konamokuimg.png";
import mana from "../../assets/ahu-signs/Kona_mana.png";
import waimea from "../../assets/ahu-signs/Kona_waimea.png";
import makaweli from "../../assets/ahu-signs/Kona_makaweli.png";
import hanapepe from "../../assets/ahu-signs/Kona_hanapepe.png";
import wahiawa from "../../assets/ahu-signs/Kona_wahiawa.png";
import kalaheo from "../../assets/ahu-signs/Kona_kalaheo.png";
import lawai from "../../assets/ahu-signs/Kona_lawai.png";
import koloa from "../../assets/ahu-signs/Kona_koloa.png";
import weliweli from "../../assets/ahu-signs/Kona_weliweli.png";
import paa from "../../assets/ahu-signs/Kona_paa.png";
import mahaulepu from "../../assets/ahu-signs/Kona_mahaulepu.png";

export const Kona = () => (
  <>
    <Navbar />
    <div className="moku-container">
      <div className="moku-title pb-4 text-7xl tracking-widest flex justify-center">
        Kona
      </div>
      <div className="moku-pic">
        <img src={mokupic} alt="Koke'e red stream" />
      </div>
      <div className="img-cap flex text-xs justify-center">
        Koke'e, Waimea Canyon Dr.
      </div>
      <div className="flex justify-center flex-col p-2">
        <div className="moku-map">
          <img width="100%" src={konamap} alt="kona map" />
        </div>
      </div>
      <div className="moku-text">
        <p className="p-2">
          The grove in the area of Kekaha was known as Kaunalewa and numerous
          old mele (chants, songs) boasted about the beauty of this place.
          People across the islands knew of this grove through these mele, even
          those who had never visited the area.
        </p>
        <p className="p-2">
          The area between Polihale Beach Park and Nōhili Point is known as
          Pāpiohuli. This is the spot on the island that enjoys the last rays of
          sunlight at the end of each day, and so this fish was chosen to
          highlight Kona's position on the west end of Kaua‘i.
        </p>
        <p className="p-2">
          {" "}
          The color association for Kona is red as the brightest red dirt of
          Waimea Canyon.
        </p>
        <p className="p-2">
          {" "}
          The fish is pāpio, a common and well-loved fish among Kaua‘i fishermen
          and locals in general.
        </p>
        <p className="p-2">
          From centuries ago, the west end of Kona from the area where Waimea
          Canyon School is located today to Polihale was the site of a coconut
          grove with waterways meandering between the trees.The sugar industry
          removed the grove to plant sugar, and so the coconut tree in this logo
          is a homage to Kaunalewa.
        </p>
        <div className="moku-moku-sign p-1">
          <img className="" src={konasign} alt="kona road sign" />
        </div>
        <div className="learn-more flex justify-center text-lg">
          Learn more about the ahupua‘a in the moku of Kona:
        </div>
        {/* i dont understand how to create an array of these ahupua'a link images */}
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl">
          <Link className="ahu-link" to="/mana">
            {/* Mana */}
            <img src={mana} alt="mana ahupuaa link" />
          </Link>
          <Link className="ahu-link" to="/waimea">
            {/* Waimea */}
            <img src={waimea} alt="waimea ahupuaa link" />
          </Link>
          <Link className="ahu-link" to="/makaweli">
            {/* Makaweli */}
            <img src={makaweli} alt="makaweli ahupuaa link" />
          </Link>
          <Link className="ahu-link" to="/hanapepe">
            <img src={hanapepe} alt="hanapepe ahupuaa link" />
            {/* Hanapepe */}
          </Link>
          <Link className="ahu-link" to="/wahiawa">
            <img src={wahiawa} alt="wahiawa ahupuaa link" />
            {/* Wahiawa */}
          </Link>
          <Link className="ahu-link" to="/kalaheo">
            <img src={kalaheo} alt="kalaheo ahupuaa link" />
            {/* Kalaheo */}
          </Link>
          <Link className="ahu-link" to="/lawai">
            <img src={lawai} alt="lawai ahupuaa link" />
            {/* Lawai */}
          </Link>
          <Link className="ahu-link" to="/koloa">
            {/* Koloa */}
            <img src={koloa} alt="koloa ahupuaa link" />
          </Link>
          <Link className="ahu-link" to="/weliweli">
            {/* Weli weli */}
            <img src={weliweli} alt="weliweli ahupuaa link" />
          </Link>
          <Link className="ahu-link" to="/paa">
            {/* Pa'a */}
            <img src={paa} alt="paa ahupuaa link" />
          </Link>
          <Link className="ahu-link" to="/mahaulepu">
            {/* Mahaulepu */}
            <img src={mahaulepu} alt="mahaulepu ahupuaa link" />
          </Link>
        </div>
      </div>
    </div>

    <Footer />
  </>
);
