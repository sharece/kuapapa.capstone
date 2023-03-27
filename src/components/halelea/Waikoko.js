import { Link } from "react-router-dom";
import ahumap from "../../assets/halelea-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import waikokosign from "../../assets/ahu-signs/Halelea_waikoko.png";
import haleleasign from "../../assets/haleleabigsign.png";

export const Waikoko = () => (
  <>
    <Navbar />
    <div className="ahu-bg">
      <div className="ahu-elements">
        <div className="breadcrumb-menu pt-4 flex color-white">
          <Link className="crumb" to="/">
            Home
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <Link className="crumb" to="/halelea">
            Halele‘a
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <div className="current-crumb">Waikoko</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="halelea breakdown" />
          </div>
          <Link className="back-to-moku" to="/halelea">
            <div className="moku-sign">
              <img src={haleleasign} alt="halelea sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={waikokosign} alt="waikoko road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Waikoko: Bloody water The smallest of the nine Halele‘a ahupua‘a,
        Waikoko contains only 1.8 square kilometers. It is smaller than many
        ‘ili found in other ahupua‘a but nothing has come down to us to say why
        this is nevertheless a full fledged ahupua‘a. It had no access to the
        colorful mountain birds whose feathers were so highly prized. The
        Waikoko stream runs through it, sometimes unusually acting as a boundary
        marker. It does have a reef although the waves are usually quite strong
        and the rip tide can be very swift. Even recently, a fisherman standing
        on the rocks below Makahoa was swept to his death by the waves. It is
        bordered by Lumaha‘i on the west and Waipā on the east. Two reasons are
        given for the name of this ahupua‘a. The first says that the stream was
        red because of the blood of warriors that had flowed into it during a
        battle against Lauhaka. The second says the water was colored red by a
        small plant that grew in the water. This fresh-water algae disappeared
        after rice began to be grown in Waipā. Both Waikoko and Lumaha‘i had
        sinister reputations for being dangerous to travelers. The ancient road
        crossed Makahoa headland and descended to the beach. At the next
        headland, a path of rocks was made. This path washed out any time there
        was a storm, which meant a traveler had to return home to wait until the
        path had been repaired. This path and the safety of crossing it belonged
        to the mo‘o maiden Ho‘ohila. The beach’s name can be translated as "The
        Beach of Dead Bodies". There is no record of any heiau in Waikoko,
        although there certainly would have been one to receive Lono during the
        Makahiki season, as well as a fishing shrine near the shore. [Luahiwa]
      </div>
      <Footer />
    </div>
  </>
);
