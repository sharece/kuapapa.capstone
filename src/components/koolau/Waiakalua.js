import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import ahumap from "../../assets/koolau-bd.png";
import { Footer } from "../home/Footer";
import koolausign from "../../assets/ahu-signs/koolausign.png";
import waiakaluasign from "../../assets/ahu-signs/Koolau_waiakalua.png";

export const Waiakalua = () => (
  <>
    <Navbar />
    <div className="ahu-bg">
      <div className="ahu-elements">
        <div className="breadcrumb-menu pt-4 flex color-white">
          <Link className="crumb" to="/">
            Home
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <Link className="crumb" to="/koolau">
            Ko'olau
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <div className="current-crumb">Waiakalua</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="Ko'olau ahupuaa breakdown" />
          </div>
          <Link className="back-to-moku" to="/koolau">
            <div className="moku-sign">
              <img src={koolausign} alt="koolau sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={waiakaluasign} alt="Waiakalua road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Waiakalua: Stream of the crater Wai-a-ka-lua is one of the ten ahupua`a
        of the Ko`olau district. The ahupua`a was divided into two areas:
        Waiakalua-iki and Waiakalua-nui. Sometimes these are referred to as
        separate ahupua`a, but like Ka`aka`aniu, these areas would have been
        extremely small and hardly able to pay the tribute/taxation demanded
        from an ahupua`a during the Makahiki season. The streams of Wai-a-ka-lua
        are all fed from springs. There were taro fields in the valleys. The
        house lots were scattered among dry-land fields and on the ridge between
        the two streams. [Handy] [Fornander] [Nai] Nā-pū-elua A boy was born in
        Waiakalua circa 1790. He was trained to be a warrior and became an
        expert at spear-dodging, slinging stones, bone-breaking and other
        martial arts. He became part of Kaumuali`i`s guard and was tattooed from
        his hip to his foot on one leg. Kaumuali`i was the king of Kaua`i and
        this tattooing of his immediate guard was a reminder that his father`s
        brother Kahekili, king of Maui and Oahu, was similarly tattooed. This
        young man must have been very tall, as one of the requirements for his
        position was to be seven feet in height. In 1824, after Kaumuai`i died,
        a battle was waged between Humehume, Kaumuali`i`s oldest son, and the
        forces of Kamehameha II. The Kaua`i warriors attacked Fort Hipo at
        Waimea and were repulsed. They retreated to the plains of Hanapepe and
        Wahiawa, armed with the ancient wooden weapons. The Kamehameha forces
        were armed with modern weapons and defeated the Kaua`i forces easily.
        The war was named `Ai-pua`a, Eating pork. For two weeks after this
        battle, the Kamehameha forces hunted the defeated in order to destroy
        them, man woman, and child, once and for all. All men with"black legs"
        were to be killed on sight. When they reached Wai-a-ka-lua, they found
        the young man hiding in a woman's sacred house. He was led out and
        placed before a firing squad. The young warrior refused to have his
        hands bound and stood facing the enemy soldiers. As the command "Fire!"
        was given, the young man ducked, ran forward at top speed, grabbed two
        of the rifles from the soldiers and, pushing past them, escaped. From
        then on, this young warrior was given the name Nā-pū-elua, The two
        rifles. After an amnesty was declared, Nāpūelua returned to Wai-a-ka-lua
        where he lived peacefully and in 1848 lay claim to some land which he
        received two years later. He is the last known "black leg", the last of
        the honor guard that protected the person of Kaua`i's last king.
      </div>
      <Footer />
    </div>
  </>
);
