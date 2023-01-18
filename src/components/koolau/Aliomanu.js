import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import aliomanubd from "../../assets/ahu-divisions/Aliomanu.png";
import { Footer } from "../home/Footer";
import koolausign from "../../assets/ahu-signs/koolausign.png";
import aliomanusign from "../../assets/ahu-signs/Koolau_aliomanu.png";

export const Aliomanu = () => (
  <>
    <Navbar />
    <div className="ahu-elements">
      <div className="ahu-sign">
        <img width="100%" src={aliomanusign} alt="aliomanu road sign" />
      </div>
      <div className="ahu-map-and-sign">
        <div className="anaholabd">
          <img src={aliomanubd} alt="aliomanu ahupuaa breakdown" />
        </div>
        <Link className="back-to-moku" to="/koolau">
          <div className="moku-sign">
            <img src={koolausign} alt="koolau sign" />
          </div>
        </Link>
      </div>
    </div>
    <div className="ahu-text">
      `Aliomanu: Face-scar-made-by-birds `Aliomanu is a small ahupua`a between
      Anahola and Pāpa`a. Its stream may once have flowed constantly but the
      central plains were changed in contour by the creation of pineapple
      fields. The ahupua`a has a reef and stretches to the mountain top. In
      1848, at the time of the Māhele, the traditional plants, noni, wauke, and
      ulu were reported. So too were oranges and coffee which had been imported
      a few years before as possible cash crops. `A`aka, a Menehune, caught a
      shark by weaving a fish trap of huehue vines which grew at `Ahihi point of
      Kamalomalo`o. "Homai ka wa`a," he ordered his friends, even though he was
      not the leader of the group. The canoe was brought, the shark caught and
      brought to shore at `Ali-o-manu. `A`aka wanted the shark skin as a
      souvenir, but sea birds, attracted by the bonanza, flocked to the carcass
      and began to devour it. `A`aka tried to chase them off but was attacked by
      them instead, leaving him with the souvenir of a scar on his face.
    </div>
    <Footer />
  </>
);
