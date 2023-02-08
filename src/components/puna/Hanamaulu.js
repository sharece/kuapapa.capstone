import { Link } from "react-router-dom";
import hanamaulusign from "../../assets/ahu-signs/Puna_hanamaulu.png";
import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";
import ahumap from "../../assets/puna-bd.png";
import punasign from "../../assets/punasign.png";

export const Hanamaulu = () => (
  <>
    <Navbar />
    <div className="ahu-bg">
      <div className="ahu-elements">
        <div className="breadcrumb-menu pt-4 flex color-white">
          <Link className="crumb" to="/">
            Home
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <Link className="crumb" to="/puna">
            Puna
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <div className="current-crumb">Hanamā`ulu</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="hanamaulu ahupuaa breakdown" />
          </div>
          <Link className="back-to-moku" to="/puna">
            <div className="moku-sign">
              <img src={punasign} alt="puna sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={hanamaulusign} alt="hanamaulu road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Hanamā`ulu: Tired-bay (as from walking) Alt: Hana-mā`ula -If pronounced
        Ha-na-ma-oo-la, it means "work at plant culture." If pronounced
        Hana-maula, it means make legs tired." #This ahupua`a was ruled by
        Kawelo-lei-makua’s parents in the late 1600s. When they were killed by
        Ai-kanaka, it began a civil war which Ai-kanaka lost. O Hanamāulu ipu
        puehu. Hanamāulu’s calabashes are hidden. Hanamāulu was considered a
        very stingy place. Once a party from the Kona side came to Puna. As they
        descended the hill into Hanamāulu, they could see the people below
        peeling their taro but when they got there everything was hidden away
        and they got nothing to eat. (Kelsey) No Hanamā`ulu ka ipu puehu. The
        quickly emptied container belongs to Hanamā`ulu. Said of the stingy
        people of Hanamā`ulu, no hospitality there. At one time, food containers
        would be hidden away and the people would apologize for having so little
        to offer their guests. (Pukui 2320) Hanama`ulu stretched seaward from
        Ka-wai-kini, the tallest peak on the island. On the shore, the boundary
        point with Kalapaki was at Opoi, while Ka-wai-loa stream divided
        Hanamā`ulu from Wailua. The name means Bay-(that)-makes-legs-tired. It
        was off the main road in ancient times, and in order to reach it, one
        had to walk a long distance. The traveler arrived at the village near
        the sea with tired legs. Not only would the traveler have sore feet, but
        he could expect to go hungry once he reached the village. "No Hanama`ulu
        ka ipu pueho," everyone said. "An empty calabash at Hanama`ulu." One
        time, some travelers from the Kona district reached the valley rim where
        they saw people peeling taro and heard the sound of poi pounders coming
        from the village. The travelers were pleased to know there would be
        pololei, fresh poi, at the end of their journey, so they hurried down
        the path., When these travelers arrived at the village, they found no
        poi at all, only villagers with sad faces apologizing for the lack of
        food. The visitors went hungry that night. Of course, the story was told
        and from that time the Hanama`ulu people were known as stingy and
        miserly. At the foot of Kalepa hill, where the sugar mill once stood,
        was a large walled heiau. Its named was Ka-lau-i-ka-manu, The thatched
        house of the bird. It was greatly feared because of the many human
        sacrifices that were made there. The stench of the heiau was so bad that
        travelers would hurry past holding their noses. Across the bay from
        Ahukini are cliffs which were once called Pali-`o`oma-o-Hanama`ulu, The
        concave cliffs of Hanama`ulu. Later these were called Ke-`alohi-wai, The
        sparkling water. There was once a young man named Pueo, Owl, who lived
        at Pali-’o’oma. It was time for him to choose a wife, but he had not
        found anyone who compared to the woman he saw in his dreams on Kaua’i.
        He went to O’ahu, and there he heard of a young woman named
        Ka-’alohi-wai. She had refused to marry any of the men her parents had
        chosen for her, saying that the man of her dreams would come for her.
        When Pueo and Ke-’alohi-wai met, they recognized each other immediately
        from their dreams. They married and lived many years at Pali-'o'oma.
        After their deaths, the cliffs were renamed Ke-’alohi-wai in honor of
        the woman from O’ahu.
      </div>
      <Footer />
    </div>
  </>
);
