import { Link } from "react-router-dom";
import ahumap from "../../assets/napali-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import kalalausign from "../../assets/ahu-signs/Napali_kalalau.png";
import napalisign from "../../assets/napali-sign.png";

export const Kalalau = () => (
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
          <div className="current-crumb">Kalalau</div>
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
            <img width="100%" src={kalalausign} alt="kalalau road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Kala-lau can be translated as Fluted leaves, a reference to the
        curtain-like appearance of the cliffs. Kala-lau can also be translated
        at Leaves of the ‘okala berry, a raspberry-like plant that can still be
        found in the mountains. Kalalau, as one word, means to call, as one
        person does to another. Ka-lalau means The wandering one. Kalalau was
        the largest of the Nāpali ahupua‘a. It rises from a beach which is
        reputed to "winter in Kalalau and summer in Lumahai". The lower portion
        is a broad plain formed by erosion from two valleys surrounded by two to
        three thousand foot high cliffs. These cliffs are fringed at the four
        thousand foot level by a narrow plain and the Kaunuohua ridge. Like all
        Nāpali ahupua‘a, Kalalau was reached by sea in good weather or by a
        steep dangerous trail leading up a ridge to the mountains. The trail is
        marked by two pinnacles of stone named Nākeikionā‘iwi (The children of
        Nā‘iwi) who played too late by moonlight and were turned to stone when a
        ray of sunshine touched them as they ran home. The valley was heavily
        populated. There are remains of many house sites, of irrigation ditches
        and dry-land farming terraces. The valley was self-sufficient. The
        people grew taro, sweet potatoes, sugar cane and bananas. Wauke and
        mamaki trees were grown to provide bark for tapa which was made into
        clothing and bedding. `Olonā plants provided strong twine or rope which
        was much prized later on by the whalers who used to winter off the
        shores of Kaua‘i. They found that `olona ropes were stronger than any
        cordage they could get from New England. Pili, a giant, was very
        friendly with a troop of Menehune and lived with them on the banks of
        the Wailua river. From time to time, they would make an excursion to
        Kalalau. Pili, being so much larger, always arrived first and to while
        away the time until his friends came, decided to shape the walls of the
        Kalalau cliffs. When the Menehune arrived and saw what he was doing they
        asked what he was making but Pili told them it would be a surprise.
        Unfortunately, Pili died before the shaping was finished and the
        Menehune never did know what Pili‘s plan for the Kalalau cliffs was. A
        famous tapa maker was Kahuanui who lived in the fourteenth century. She
        was the sister of Limaloa, the god of the Mānā mirage, and of Lohi‘au
        who was beloved by Pele and Hi‘iaka. Kahua-nui was the first to beat
        fronds of the laua‘e fern into her tapa which gave it a delicious smell.
        This valley was also the home of Kukua-o-Kalalau. He was named after the
        large graspid crab, Metopograpsus thukuhar. Whenever he seized boys,
        fish, or anything that did not belong to him, he would shout "‘Owā!" In
        time the word "kaikaowa" was coined meaning to seize, take, or follow.
        `Owā has several meanings: 1. to talk loudly back and forth, to roar; 2.
        the cry of the `auku‘u heron; 3. to retch or gag; 4. split, cracked,
        burst grooves; to split, crack; and in time came to mean figuratively,
        bereaved, forsaken. In 1893 this was the home of Ko‘olau, a leper who
        wished to remain with his wife and son until his death. He stood off an
        army armed with howitzers and is buried in the valley. When the army
        left, they forced all the inhabitants to leave and burned down the
        houses. Since then no one has lived full time in any of the ahupua‘a of
        Nāpali. A variety of taro was called kalalau, perhaps because it
        originated here. The white corm yielded a gray poi. Ua hala i Kaua‘i, i
        Kalalau. Gone to Kalalau, at Kaua‘i. Gone astray, a pun on the word
        "lalau", astray. Refers to the fact that someone has gone to Kalalau on
        Kaua‘i instead of Kalalau on Hawai‘i, a big mistake indeed. (Judd 633)
        Napelepele na pali o Kalalau, i ka wili ia e ka makani. Crumbling are
        the cliffs of Kalalau, twisted by the winds. Expression to describe a
        man in great anger. (Judd 635) Naue Kalalau, poniu Kalawakua. Trembling
        Kalalau, swayed and dizzy. Unreasonable anger. (Judd 636) Ha‘ulelau i o
        Kalalau, i Luali‘i la i Kauli‘ili‘i. Haulelau is at Kalalau and Lualii
        is at Kauliilii. Such a scattering all over the place, like fallen
        leaves, with bits and pieces strewn all about. (Pukui 490) Ka laua‘e
        `ala o Kalalau. Fragrant laua‘e ferns of Kalalau. Kahuanui scented tapa
        with laua‘e. (Pukui 1433) Molale loa no kumupali o Kalalau. Clearly seen
        is the base of Kalalau cliff. It is obvious that one is way off the
        subject. A play on "lalau", to wander, to err. (Pukui 2190) Nāpelepele
        kalalau `ōwili i ka makani. Wounded, yelled at, twisted by the wind.
        (Andrews)
      </div>
      <Footer />
    </div>
  </>
);
