import { Link } from "react-router-dom";
import ahumap from "../../assets/napali-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import hanakoasign from "../../assets/ahu-signs/Napali_hanakoa.png";
import napalisign from "../../assets/napali-sign.png";

export const Hanakoa = () => (
  <>
    <Navbar />
    <div className="ahu-bg">
      <div className="ahu-elements">
        <div className="breadcrumb-menu pt-4 flex color-white">
          <Link className="crumb" to="/">
            Home
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <Link className="crumb" to="/napali">
            Nāpali
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <div className="current-crumb">Hanakoa</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="napali breakdown" />
          </div>
          <Link className="back-to-moku" to="/napali">
            <div className="moku-sign">
              <img src={napalisign} alt="Napali road sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={hanakoasign} alt="hanakoa road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Hanakoa: Warrior bay Alt: Hana-koa, Koa tree bay Alt: Hana-ko`a, Fishing
        shrine bay Alt: Hana-keao, Name of a Menehune chiefess Hanakoa is a
        Nāpali ahupua`a between Hanakāpi`ai on the east and Kalalau and
        Pōhaku`au on the west, with a short border shared with Waimea on the
        southern mountainous region. It is a sizable valley with a good deal of
        gently sloping land on either side of the stream. There were housesites
        and wet taro terraces extending more than half a mile inland on either
        side of the stream, as well as extensive agricultural areas in the
        Waiahuakua drainage basin. When the Menehune were leaving Kaua`i, they
        met at Kanaloahuluhulu, the open meadow in the mountains, and moved
        along the top of the cliffs toward Hā`ena where they embarked in canoes.
        Hanakeao, a Menehune chiefess, stepped on a stone on the edge of the
        cliff above this valley. The stone rolled and she fell to her death. The
        valley was named in her memory. The name has come to be shorted to
        Hanakoa and is translated to be either the Bay of warriors or of koa
        trees. In old chants warriors are often compared to a koa, thus the name
        as written now makes sense even though it is wrong.
      </div>
      <Footer />
    </div>
  </>
);
