import { Link } from "react-router-dom";
import ahumap from "../../assets/napali-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import awaawapuhisign from "../../assets/ahu-signs/Napali_awaawapuhi.png";
import napalisign from "../../assets/napali-sign.png";

export const Awaawapuhi = () => (
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
          <div className="current-crumb">Awa‘awapuhi</div>
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
            <img width="100%" src={awaawapuhisign} alt="awaawapuhi road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Awa‘awapuhi: Eel valley Alt: Awāwa-puhi, Eel valley Alt: ‘Awa‘awapuhi,
        Ginger valley Alt: Waha-puhi, Noisy eel Awa‘awapuhi is a narrow steep
        sided valley extending from the sea to its headwaters on the south end
        of Ka-hua-ma‘a flats in the mountains. The mauka border point is
        Pōhaku-wa‘awa‘a on the Ka-unu-o-Hua ridge. There are remains of taro
        terraces on both sides of the stream, ranging from two to four feet
        high. There are also many house sites. There are burial caves on the
        western cliffs. The valley, according to legend, was gouged out by a
        large eel. He had come from the south with his two sisters but when they
        reached Ni‘ihau, the sisters were so tired they crawled ashore to rest.
        The brother however was too curious to rest and swam along the Nāpali
        coast. He gazed up into the mountains and was curious as to what was up
        there. So he climbed the cliff, gouging out this valley. It was cold in
        the uplands and the eel became sluggish and fell asleep.
      </div>
      <Footer />
    </div>
  </>
);
