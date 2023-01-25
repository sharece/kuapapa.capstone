import { Link } from "react-router-dom";
import ahumap from "../../assets/ahu-divisions/Wahiawa.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import konasign from "../../assets/ahu-signs/konasign.png";
import wahiawasign from "../../assets/ahu-signs/Kona_wahiawa.png";
export const Wahiawa = () => (
  <>
    <Navbar />
    <div className="ahu-elements">
      <div className="ahu-sign">
        <img width="100%" src={wahiawasign} alt="wahiawa road sign" />
      </div>
      <div className="ahu-map-and-sign">
        <div className="ahu-map">
          <img src={ahumap} alt="wahiawa ahupuaa breakdown" />
        </div>
        <Link className="back-to-moku" to="/kona">
          <div className="moku-sign">
            <img src={konasign} alt="kona sign" />
          </div>
        </Link>
      </div>
    </div>
    <div className="ahu-text">
      Wāhiawā: Milkfish place Ahupua‘a between Hanapēpē and Kalāheo. The
      ahupua‘a was divided further into Wahi-awa-uka (Upland Wahi-awa) and
      Wahi-awa-loa (Long Wahi-awa), which was located on the plains next to
      Kalāheo. The remains of terraces are remarkable in places for their number
      on a small area of land. Awa was a fish that was grown in the taro fields.
      The meat of the belly, soaked in salt water, eaten raw, was a favorite
      dish. It was eaten with seaweed, especially manauea or o`olu. Poki, the
      supernatural dog, was noted for the very fat awa that grew in his taro
      fields. Also a stream draining Ka-naele bog.
    </div>
    <Footer />
  </>
);
