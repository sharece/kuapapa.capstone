import { Link } from "react-router-dom";
import weliwelibd from "../../assets/ahu-divisions/Weliweli.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import konasign from "../../assets/ahu-signs/konasign.png";
import weliwelisign from "../../assets/ahu-signs/Kona_weliweli.png";
export const Weliweli = () => (
  <>
    <Navbar />
    <div className="ahu-elements">
      <div className="ahu-sign">
        <img width="100%" src={weliwelisign} alt="weliweli road sign" />
      </div>
      <div className="ahu-map-and-sign">
        <div className="weliwelibd">
          <img src={weliwelibd} alt="weliweli ahupuaa breakdown" />
        </div>
        <Link className="back-to-moku" to="/kona">
          <div className="moku-sign">
            <img src={konasign} alt="kona sign" />
          </div>
        </Link>
      </div>
    </div>
    <div className="ahu-text">
      Weliweli: Fearful Ahupua`a of the Kona district. There are many "pens"
      here, small enclosures with rough walls most prevalent here, in Kalalau
      and Kipukai.
    </div>
    <Footer />
  </>
);
