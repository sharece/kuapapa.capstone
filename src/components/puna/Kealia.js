import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import kealia from "../../assets/Puna_kealia.png";
import kealiabd from "../../assets/ahu-divisions/Kealia.png";
import { Footer } from "../home/Footer";
export const Kealia = () => (
  <>
    <Navbar />
    <div>
      <img src={kealiabd} alt=" kealia ahupuaa breakdown" />
      <Link className="back-to-moku" to="/puna">
        Take me back to Puna
      </Link>
      <img src={kealia} alt="kealia road sign" />
      <p>
        Keālia: The-salt-encrustation; Lit: Salt-land; Salt-pan Hele ka ho`i a
        hiki i Ke-ālia, ua napo`o ka lā. When one reaches Ke-ālia at last, the
        sun is set. Said of one who procrastinates. A play on alia (to wait).
        [Pukui 744] *When Hi`iaka and Wahineomao were on their way to Hā`ena to
        fetch Lohi‘au for Pele, near Ke-ālia they came upon a man cooking his
        luau (young taro leaves) to eat with his poi. Hi`iaka by her magic power
        cooked the luau in a few minutes. Looking into the man’s house, Hi`iaka
        saw a very sick woman whom all the kahuna had been unable to help.
        Hi`iaka uttered a prayer and at once health was given back to the woman.
        [Rice]
      </p>
    </div>
    <Footer />
  </>
);
