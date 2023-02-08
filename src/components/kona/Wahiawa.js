import { Link } from "react-router-dom";
import ahumap from "../../assets/kona-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import konasign from "../../assets/ahu-signs/konasign.png";
import wahiawasign from "../../assets/ahu-signs/Kona_wahiawa.png";

export const Wahiawa = () => (
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
          <div className="current-crumb">Wāhiawā</div>
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
            <img width="100%" src={wahiawasign} alt="wahiawa road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Wā hiawā: Milkfish place Ahupua‘a between Hanapēpē and Kalāheo. The
        ahupua‘a was divided further into Wahi-awa-uka (Upland Wahi-awa) and
        Wahi-awa-loa (Long Wahi-awa), which was located on the plains next to
        Kalāheo. The remains of terraces are remarkable in places for their
        number on a small area of land. Awa was a fish that was grown in the
        taro fields. The meat of the belly, soaked in salt water, eaten raw, was
        a favorite dish. It was eaten with seaweed, especially manauea or o`olu.
        Poki, the supernatural dog, was noted for the very fat awa that grew in
        his taro fields. Also a stream draining Ka-naele bog.
      </div>
      <Footer />
    </div>
  </>
);
