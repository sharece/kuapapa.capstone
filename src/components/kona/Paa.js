import { Link } from "react-router-dom";
import ahumap from "../../assets/kona-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import paasign from "../../assets/ahu-signs/Kona_paa.png";
import konasign from "../../assets/ahu-signs/konasign.png";

export const Paa = () => (
  <>
    <Navbar />
    <div className="ahu-bg">
      <div className="ahu-elements">
        <div className="breadcrumb-menu pt-4 flex color-white">
          <Link className="crumb" to="/">
            Home
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <Link className="crumb" to="/kona">
            Kona
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <div className="current-crumb">Pa'a</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="kona breakdown" />
          </div>
          <Link className="back-to-moku" to="/kona">
            <div className="moku-sign">
              <img src={konasign} alt="Kona sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={paasign} alt="paa road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Pā`ā: Dry, rocky Certificate of Boundary The boundary of this ahupua`a
        is from SE a rock on SE corner of KA-PUNA-AKEA pond, skirts pond on S,
        then N to a heap of stones (so far common boundary with Māhā`ulepu),
        then N along southerly side of range of hills called KOHONI to a certain
        conical peak of said range, thence to a bald rock called KOLOAKOPAHU, up
        to KAMAULELE, west to KOKII (NW corner), down to ULUPEUEHU, across
        PALENA to a heap of stones on PUUHUNIHUNI, then to a monument of stones
        standing upon the sea near KANEAUKAI. The ahupua`a is comprised of 3,263
        acres, 1 rood, and 33 perches. On the lower side, a stone wall marks the
        boundary between Pā`ā and Weliweli. *After a defeat in war, some
        warriors hid in a cave here. They were fed by a giant crab who caught
        squid for them to eat. The chief of Pā’ā soon noticed the scarcity of
        squid and asked his kahuna to find out why, which the kahuna does. The
        warriors are killed and the crab was no longer seen. [Polihale & Other
        Kaua’i Legends]
      </div>
      <Footer />
    </div>
  </>
);
