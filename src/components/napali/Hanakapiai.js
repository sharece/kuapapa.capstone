import { Link } from "react-router-dom";
import ahumap from "../../assets/napali-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import hanakapiaisign from "../../assets/ahu-signs/Napali_hanakapiai.png";
import napalisign from "../../assets/napali-sign.png";

export const Hanakapiai = () => (
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
          <div className="current-crumb">Hanakāpi‘ai</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="Napali ahupua'a breakdown" />
          </div>
          <Link className="back-to-moku" to="/napali">
            <div className="moku-sign">
              <img src={napalisign} alt="Napali road sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={hanakapiaisign} alt="awaawapuhi road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Hanakāpi‘ai: Name of a Menehune chiefess Hanakāpi‘ai is one of the seven
        ahupua‘a of the Nāpali district. This valley was well populated. There
        were extensive irrigation systems and house sites in the valley.
        [Bennett] [PEM] [Kelsey] It was named after a chiefess who died in
        childbirth on the edge of the cliffs as the Menehune were on their way
        to Hā‘ena to leave Kaua‘i. Those who do not know this attempt to
        translate the name as "Bay sprinkling food." No one knows what the
        Menehune meaning would be. Hana-kā-pi‘ai was famed for its ‘o‘opu peke,
        a dwarf ‘o‘opu (the goby fish, Sicopterus stimpsoni) named nōpili. It
        was one of the ‘ai-lehua, lehua flower eating goby, which can climb up a
        vertical stone jar or wall by slightly moving its suction disk, first on
        one side, then on the other. It was said to pili, cling, to stones and
        was used in weaning and housewarming ceremonies so that luck would pili,
        cling. The largest nōpili were found in the Wainiha, Hanalei and
        Makaweli rivers, but the Hana-kā-pi‘ai nōpili were thicker and shorter.
        A fat woman was compared to the nōpili. So was a short penis, which was
        also referred to as an ‘o‘opu peke or pokole. In the 1930s fishermen
        from Hā‘ena and Wainiha would row in a six oar rowboat to Kalalau to
        catch moi. One time, when a man who wore wide-legged palaka shorts
        leaned back on a pull of his oar, his penis stuck out. Another fisherman
        grabbed it and yelled, "I caught a nōpili!" All the men laughed so much,
        one of them fell overboard. The fish smelled and heard him and swam
        away, so the fishermen had to row home again empty-handed. But they
        thought the joke was worth the trip. [Hashimoto] Evidently the people of
        Hanakāpi‘ai endured quite a bit of teasing for they coined a boast: Ka
        iki koai‘e a Hana-kā-pi‘ai The small koai‘e tree of Hanakāpi‘ai One may
        be of small size but nonetheless is as tough and sturdy as a koai‘e
        tree, which was prized for its hard wood. (Pukui 1399) An alternative
        spelling of the ahupua‘a is Hana-ka-pī‘ei, which can be translated as
        Constantly looking out to protect a love affair. Pī‘ei is a rare Kaua‘i
        version of kī‘ei, meaning "to peer through a door or crevice. No
        Hawaiian could resist the pun and created this story: a certain chiefess
        named Honokoa liked to "make trouble" with a handsome chief named
        Waiehu. They met in a cave in the valley thinking themselves secure from
        prying eyes but brought attention upon themselves by constantly peeking
        out to see if they were observed. [Kelsey] [I] PEM translates the name
        as bay sprinkling food and also spells the name as Hanakāpī‘ai. The
        macron over the i is incorrect; see the entry pi‘ai in PE and Pukui‘s
        ‘ōlelo No‘eau.
      </div>
      <Footer />
    </div>
  </>
);
