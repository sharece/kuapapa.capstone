import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import punazoom from "../../assets/puna-zoom.png";
import { Footer } from "../home/Footer";
import punasign from "../../assets/puna-label.jpg";
export const Puna = () => (
  <>
    <Navbar />
    <div className="moku-container">
      <h1 className="text-4xl">Puna</h1>
      <div className="img-container">
        <img className="road-sign" alt="puna road sign" src={punasign} />
        <img className="zoom map" src={punazoom} alt="map" />
      </div>
      <div className="ahu-link-container">
        <Link className="ahu-link" to="/kipu">
          Kipu
        </Link>
        <Link className="ahu-link" to="/haiku">
          Haiku
        </Link>
        <Link className="ahu-link" to="/niumalu">
          Niumalu
        </Link>
        <Link className="ahu-link" to="/nawiliwili">
          Nawiliwili
        </Link>
        <Link className="ahu-link" to="/kalapaki">
          Kalapaki
        </Link>
        <Link className="ahu-link" to="/hanamaulu">
          Hanamaulu
        </Link>
        <Link className="ahu-link" to="/wailua">
          Wailua
        </Link>
        <Link className="ahu-link" to="/olohena">
          Olohena
        </Link>
        <Link className="ahu-link" to="/waipouli">
          Waipouli
        </Link>
        <Link className="ahu-link" to="/kapaa">
          Kapa'a
        </Link>
        <Link className="ahu-link" to="/kealia">
          Kealia
        </Link>
        <Link className="ahu-link" to="/kamalomaloo">
          Kamalomaloo
        </Link>
      </div>
      <div className="">
        <p className="moku-text">
          Wailuanuiho‘āno (great, sacred spirit) is the full name of Wailua, the
          seat of government and religious center of the Kaua‘i Kingdom for
          centuries. The heiau, Holoholokū, near the bottom of Kuamo‘o Road was
          the birth place of the highest ranking ali‘i, acknowledged even by
          ali‘i of the other islands as possessing among the highest mana in the
          Hawaiian Islands. It’s plant icon is the ‘ie‘ie, a thick vine that
          crawls up tall trees with long, thick aerial roots that had been
          manufactured into strong cordage to lash the posts of traditional
          Hawaiian houses. The name of the channel between Kaua‘i and O‘ahu is
          Ka‘ie‘iewaho (the ‘ie‘ie vine on the outside) and so this icon is a
          homage to Wailua’s position on Kaua‘i’s eastern shore. The fish icon
          is moi, another favorite eating fish among locals, this name
          resembles, mō‘ī (monarch), indicating that Puna, with Wailua and
          Līhu‘e situated in the moku, is the government seat of Kaua‘i. The
          color yellow is associated with royalty, as seen in ahu‘ula, the royal
          feather capes of Kaua‘i’s mō‘ī.
        </p>
      </div>
    </div>
    <Footer />
  </>
);
//nav
//banner
//moku plaque
//map
//links to ahupuaas (12)
