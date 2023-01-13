import { Link } from "react-router-dom";
import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";
import koolauzoom from "../../assets/koolau-zoom.png";

import koolau from "../../assets/koolau-label.jpg";
export const Koolau = () => (
  //nav
  //banner
  //moku plaque
  //map
  //links to ahupuaas (12)

  <>
    <Navbar />
    <div className="moku-container">
      <h1 className="text-4xl">Ko'olau</h1>
      <div className="img-container">
        <img className="road-sign" src={koolau} alt="kona road sign" />
        <img className="koolau-zoom" src={koolauzoom} alt="map" />
      </div>
      <p>
        Ko‘olau’s plant icon is the flower of the koko‘olau (also known as
        ko‘oko‘olau). It is easy to see why this plant would be chosen for this
        moku by simply noticing it’s name, but koko‘olau is a widely used
        medicinal plant. It is made into tea and has medicinal properties and is
        used in a variety of ways for healing. This is a very useful plant that
        through ingenuity hundreds of years ago became highly valued. Referred
        to as an i‘a (fish) in Hawaiian, the ula, or spiny lobster, is highly
        prized as food. It’s delicate life and spawning cycle should remind us
        about the need for self control and proper management of natural
        resources around the island through lāhui, or temporary restriction
        periods. The color is a cross between red (‘ula‘ula, like the name of
        this fish) and purple, Kaua‘i’s designated color since the late 1940s.
      </p>
    </div>
    <div className="ahu-link-container">
      <Link className="ahu-link" to="/anahola">
        Anahola
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
    <Footer />
  </>
);
