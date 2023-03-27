import { Link } from "react-router-dom";
import ahumap from "../../assets/halelea-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import waiolisign from "../../assets/ahu-signs/Halelea_waioli.png";
import haleleasign from "../../assets/haleleabigsign.png";

export const Waioli = () => (
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
          <div className="current-crumb">Wai‘oli</div>
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
            <img width="100%" src={waiolisign} alt="waioli road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Wai‘oli: Singing water or Joyful water The ahupua‘a contains 3350 acres,
        much of it unusable mountain area, which forms a great tourist
        attraction for its sheer beauty. Wai‘oli contains the most magnificent
        and individual mountain peaks on Kauai: Hihimanu, Nāmolokama, and
        Mamalahoa. These form a deep valley through which the Wai‘oli river
        rushes from the pool at the bottom of the waterfalls of Nāmolokama,
        passing the ridge of Kamo‘okoleaka, skirting the ridge of Makaihuwa‘a,
        and forming a swampy low lying area just before entering the ocean.
        Today this area goes by the name of Hanalei valley. That the river gave
        life to the people of Wai‘oli is abundantly clear by the legends
        connected to it. It was heavily settled in ancient days. High at the top
        of Nāmolokama is a swamp where the colorful forest birds were abundant
        and plants unique to the high altitudes of this island grew in
        profusion, source of food, dyes, and medicines. The river flowed
        constantly down a sufficient slope so that the broad plain could be
        easily irrigated and kula lands were also abundantly watered, making
        this ahupua‘a a rich and fertile land. The ahupua‘a opens directly into
        the great bay, sheltered by a reef in all but the worst of winter
        storms. Here great schools of fish came and canoes could easily be
        launched out into the great ocean. When the New England Congregational
        missionaries Samuel Whitney and Samuel Ruggles, brought King
        Kaumuali‘i’s son George Humehume back to him in 1820, Kaumuali‘i asked
        them to remain, giving them land in Waimea on which to settle. Within a
        year, Samuel Whitney had crossed the Alaka‘i swamp and visited this
        area. Soon after he formed a mission in the area given him by Kaumuali‘i
        for his use. Several families from Waimea joined Whitney. They named the
        lands they settled Betelema, or Bethlehem. The settlement continued, and
        today the mission house is the second oldest building on Kauai. In 1821,
        when Liholiho (Kamehameha II) came to visit Kaua‘i, Ka-umu-ali‘i, ruler
        of the island, toured the island. While he was in Hanalei, Ka-umu-ali‘i
        gave some land to the early church members who had moved from Waimea
        under the missionaries Whitney and Ruggles. Rev. Samuel Whitney was the
        first konohiki chief of this new ‘ili. In 1824, King Lunalilo came to
        Kaua‘i to visit with King Kaumuali‘i. He sent ahead of him his favorite
        sailing vessel, Haheo of Hawaii, the former Cleopatra‘s Barge. The ship
        went aground on the reef of Wai-koko. Under Lunalilo‘s direction, huge
        ropes of hau bark were woven and tied to the ship in an effort to pull
        the ship off the rocks. However, the sea was running high and when the
        ship was finally gotten off the rocks, it was smashed back against them
        and quickly sank. There is a quarter size model of the great stateroom
        of this ship in the Peabody Museum of Salem, Massachusetts.
        [Dickey][PEM][Geo]
      </div>
      <Footer />
    </div>
  </>
);
