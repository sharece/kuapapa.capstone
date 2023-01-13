import { Link } from "react-router-dom";
import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";
import konazoom from "../../assets/kona-zoom.png";
import konaroadsign from "../../assets/kona-label.jpg";
export const Kona = () => (
  //nav
  //banner
  //moku plaque
  //map
  //links to ahupuaas (11)
  <>
    <Navbar />
    <div className="moku-container">
      <h1 className="text-4xl">Kona</h1>
      <div className="img-container justify-center">
        <img className="zoom map" src={konazoom} alt="map" />
        <img className="road-sign" src={konaroadsign} alt="kona road sign" />
      </div>
      <div className="ahu-link-container">
        <Link className="ahu-link" to="/mana">
          Mana
        </Link>
        <Link className="ahu-link" to="/waimea">
          Waimea
        </Link>
        <Link className="ahu-link" to="/makaweli">
          Makaweli
        </Link>
        <Link className="ahu-link" to="/hanapepe">
          Hanapepe
        </Link>
        <Link className="ahu-link" to="/wahiawa">
          Wahiawa
        </Link>
        <Link className="ahu-link" to="/kalaheo">
          Kalaheo
        </Link>
        <Link className="ahu-link" to="/lawai">
          Lawai
        </Link>
        <Link className="ahu-link" to="/koloa">
          Koloa
        </Link>
        <Link className="ahu-link" to="/weliweli">
          Weliweli
        </Link>
        <Link className="ahu-link" to="/paa">
          Paa
        </Link>
        <Link className="ahu-link" to="/mahaulepu">
          Mahaulepu
        </Link>
      </div>
      <p>
        From centuries ago, the west end of Kona from the area where Waimea
        Canyon School is located today to Polihale was the site of a coconut
        grove with waterways meandering between the trees. This is the Kona
        logo's plant icon. The grove in the area of Kekaha was known as
        Kaunalewa and numerous old mele (chants, songs) boasted about the beauty
        of this place. People across the islands knew of this grove through
        these mele, even those who had never visited the area. The sugar
        industry removed the grove to plant sugar, and so the coconut tree in
        this logo is a homage to Kaunalewa. The fish is pāpio, a common and
        well-loved fish among Kaua‘i fishermen and locals in general. The area
        between Polihale Beach Park and Nōhili Point is known as Pāpiohuli. This
        is the spot on the island that enjoys the last rays of sunlight at the
        end of each day, and so this fish was chosen to highlight Kona's
        position on the west end of Kaua‘i. The color association for Kona is
        red as the brightest red dirt of Waimea Canyon.
      </p>
    </div>

    <Footer />
  </>
);
