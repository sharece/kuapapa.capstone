import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import zoompuna from "../../assets/zoompuna.jpg";
import { Footer } from "../home/Footer";
export const Puna = () => (
  <>
    <Navbar />
    <div className="moku-container">
      <h1 className="text-4xl">Puna</h1>
      <div className="img-container">
        <img className="zoom map" src={zoompuna} alt="map" />
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
      <div className="ahu-link-container">
        <Link className="ahu-link" to="/kipu">
          Kipu
        </Link>
        <Link className="ahu-link" to="/haiku">
          Haiku
        </Link>
        <Link className="ahu-link" to="/kipu">
          Niumalu
        </Link>
        <Link className="ahu-link" to="/kipu">
          Nawiliwili
        </Link>
        <Link className="ahu-link" to="/kipu">
          Kalapaki
        </Link>
        <Link className="ahu-link" to="/kipu">
          Hanamaulu
        </Link>
        <Link className="ahu-link" to="/kipu">
          Wailua
        </Link>
        <Link className="ahu-link" to="/kipu">
          Olohena
        </Link>
        <Link className="ahu-link" to="/kipu">
          Waipouli
        </Link>
        <Link className="ahu-link" to="/kipu">
          Kapa'a
        </Link>
        <Link className="ahu-link" to="/kipu">
          Kealia
        </Link>
        <Link className="ahu-link" to="/kipu">
          Kamalomaloo
        </Link>
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
