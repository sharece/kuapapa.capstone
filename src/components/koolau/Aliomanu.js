import { Link } from "react-router-dom";
import ahumap from "../../assets/koolau-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import aliomanusign from "../../assets/ahu-signs/Koolau_aliomanu.png";
import koolausign from "../../assets/ahu-signs/koolausign.png";

export const Aliomanu = () => (
  <>
    <Navbar />
    <div className="ahu-bg">
      <div className="ahu-elements">
        <div className="breadcrumb-menu pt-4 flex color-white">
          <Link className="crumb" to="/">
            Home
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <Link className="crumb" to="/koolau">
            Ko'olau
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <div className="current-crumb">`Aliomanu</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="koolau breakdown" />
          </div>
          <Link className="back-to-moku" to="/koolau">
            <div className="moku-sign">
              <img src={koolausign} alt="koolau sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={aliomanusign} alt="aliomanu road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        `Aliomanu: Face-scar-made-by-birds `Aliomanu is a small ahupua`a between
        Anahola and Pāpa`a. Its stream may once have flowed constantly but the
        central plains were changed in contour by the creation of pineapple
        fields. The ahupua`a has a reef and stretches to the mountain top. In
        1848, at the time of the Māhele, the traditional plants, noni, wauke,
        and ulu were reported. So too were oranges and coffee which had been
        imported a few years before as possible cash crops. `A`aka, a Menehune,
        caught a shark by weaving a fish trap of huehue vines which grew at
        `Ahihi point of Kamalomalo`o. "Homai ka wa`a," he ordered his friends,
        even though he was not the leader of the group. The canoe was brought,
        the shark caught and brought to shore at `Ali-o-manu. `A`aka wanted the
        shark skin as a souvenir, but sea birds, attracted by the bonanza,
        flocked to the carcass and began to devour it. `A`aka tried to chase
        them off but was attacked by them instead, leaving him with the souvenir
        of a scar on his face.
      </div>
      <Footer />
    </div>
  </>
);
