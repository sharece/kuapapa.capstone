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
import mokumap from "../../assets/kona-moku-map.png";
import { Dropdown } from "rsuite";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";

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
          From centuries ago, the west end of Kona from the area where Waimea
          Canyon School is located today to Polihale was the site of a coconut
          grove with waterways meandering between the trees. This is the Kona
          logo's plant icon.
        </p>
        <p className="p-2">
          The grove in the area of Kekaha was known as Kaunalewa and numerous
          old mele (chants, songs) boasted about the beauty of this place.
          People across the islands knew of this grove through these mele, even
          those who had never visited the area.
        </p>
        <p className="p-2">
          The sugar industry removed the grove to plant sugar, and so the
          coconut tree in this logo is a homage to Kaunalewa.{" "}
        </p>
        <p className="p-2">
          {" "}
          The fish is pāpio, a common and well-loved fish among Kaua‘i fishermen
          and locals in general.
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
      </div>
      <div className="learn-more flex justify-center text-lg">
        Learn more about Ahupua'a's in the Moku of Kona :
      </div>
      <div className="moku-moku-sign p-1">
        <img className="" src={konasign} alt="kona road sign" />
      </div>
      <div className="ahu-dropdown text-xl">
        <div className="flex justify-center">
          <Dropdown title="Select an Ahupua'a">
            <Dropdown.Item>
              {" "}
              <Link className="ahu-link" to="/mana">
                {/* Mana */}
                <img src={mana} width="50%" alt="mana ahupuaa link" />
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              {" "}
              <Link className="ahu-link" to="/waimea">
                {/* Waimea */}
                <img src={waimea} width="50%" alt="waimea ahupuaa link" />
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              {" "}
              <Link className="ahu-link" to="/makaweli">
                {/* Makaweli */}
                <img src={makaweli} width="50%" alt="makaweli ahupuaa link" />
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              {" "}
              <Link className="ahu-link" to="/hanapepe">
                <img src={hanapepe} width="50%" alt="hanapepe ahupuaa link" />
                {/* Hanapepe */}
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              {" "}
              <Link className="ahu-link" to="/wahiawa">
                <img src={wahiawa} width="50%" alt="wahiawa ahupuaa link" />
                {/* Wahiawa */}
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              {" "}
              <Link className="ahu-link" to="/kalaheo">
                <img src={kalaheo} width="50%" alt="kalaheo ahupuaa link" />
                {/* Kalaheo */}
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              {" "}
              <Link className="ahu-link" to="/lawai">
                <img src={lawai} width="50%" alt="lawai ahupuaa link" />
                {/* Lawai */}
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              {" "}
              <Link className="ahu-link" to="/koloa">
                {/* Koloa */}
                <img src={koloa} width="50%" alt="koloa ahupuaa link" />
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link className="ahu-link" to="/weliweli">
                {/* Weli weli */}
                <img src={weliweli} width="50%" alt="weliweli ahupuaa link" />
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              {" "}
              <Link className="ahu-link" to="/paa">
                {/* Pa'a */}
                <img src={paa} width="50%" alt="paa ahupuaa link" />
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              {" "}
              <Link className="ahu-link" to="/mahaulepu">
                {/* Mahaulepu */}
                <img src={mahaulepu} width="50%" alt="mahaulepu ahupuaa link" />
              </Link>
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
