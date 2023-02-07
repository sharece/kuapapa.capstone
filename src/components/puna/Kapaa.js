import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import ahumap from "../../assets/puna-bd.png";
import kapaasign from "../../assets/ahu-signs/Puna_kapaa.png";
import punasign from "../../assets/punasign.png";
import { Footer } from "../home/Footer";
export const Kapaa = () => (
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
          <div className="current-crumb">Kapa'a</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="Puna ahupua'a breakdown" />
          </div>
          <Link className="back-to-moku" to="/puna">
            <div className="moku-sign">
              <img src={punasign} alt="puna sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={kapaasign} alt="kapaa road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Kapa`a: The-solid; The-closing; The-enclosure; To hold; firm Ka lulu o
        Moikeha i ka laulā o Kapa`a. The calm of Moikeha in the breadth of
        Kapa`a. The chief Moikeha enjoyed the peace of Kapa`a, the place he
        chose as his permanent home. [Pukui 1450] Ke kalukalu moe ipo o Kapa`a.
        The kalukalu of Kapa`a that sleeps with the lover. Lovers were said to
        like whiling the time in the soft kalukalu plants. [Pukui 1736]
        Kupa-nihi Lit: Edge of the red cowry shell Pond. (Lahainaluna)
        [Staudard] #"This was where Keawe was shot by Ki’ikīikī. Keawe was
        Ka-umu-ali’i’s older brother. After his death Ka-umu-ali’i ruled Kaua’i.
        This was a kapu pool in the olden days and only the ruling chief of
        Kaua’i could bathe in it. It was kapu down to the death of Keawe, After
        that it was not kapu." Pukaki Lit: ? A reservoir, on the Geo list, but
        not on map Ka-lua-pā-lepo Lit: The pit for dirty dishes Point on the
        seacoast used to mark the boundary between Kapa`a and Wai-pouli
        ahupua`a. [Alex 1900] Moa-lepe Lit: Chicken-(with)-comb Ridge and
        stream. [Geo, PEM] Ka`ina-manu Lit: Line-of-birds Summit, 1179 feet. It
        is the uppermost point of Waipouli ahupuaa, and is on the border with
        Kapaa auhupuaa. [Geo] Ka-māhuna Lit: The-scaly-skin Summit, 1726
        feet[Geo] Kamali`i Lit: Children Ridge[Geo] [PEM] Pōha-ki`iki`i Lit:
        Tilted-stone Summit and land area[Geo, PEM] Pu`u-lawi`i Lit: ? Summit.
        [Geo] Ho`opi`i Lit: To-cause-to-rise Waterfall[Geo] Kapaa Mahele Names
        `Apōpō Lit: Tomorrow `Ili and pali. There was a marsh on the east. [LCA
        8843] •Pueo Lit: Owl Pali on the south side of `ili. [LCA 8843]
        `Au’aua-loa Lit: Very coarse (as wrinkled skin) `Ili. [LCA 8837] •Nā’ele
        Lit: The dark spring covered with growth Pali on the west side of
        `Au’aua-loa. [LCA 8837] •Puoho-maka Lit: Startled eyes Pali on the south
        side of `Au’aua-loa. [LCA 8837] Hāhā-nui Lit: Large haha plant `Ili and
        stream.. [LCA 3554] Hāhā is the Kaua’i name for the large `ape’ape
        (Elephant Ears) plant. [Neal 651] Ka-hana Lit: `Ili. The Hāhā-nui stream
        is on the north. [LCA 3971] •Hulu-moa Lit: Chicken feather Kula. [LCA
        3971] •Kolehaka Lit: ? Pali on the south of Ka-hana. [LCA 3971]
        Ma’ele’ele Lit: ? `Ili. [3638] •Pūpū-kai Lit: Sea shell Pali to the
        north of Ma’ele’ele. [LCA 3638] •Hoa Lit: Friend Pali to the south of
        Ma’ele’ele. [LCA 3638] Moa-lepe Lit: Rooster comb `Ili and valley [LCA
        8247] (See above.) •Hui-nui-’ulu Lit: Grove of large breadfruit trees
        Mountain on the west of Moa-lepe. LCA[8247] •Maka-leha Lit: Eyes that
        glance about Pali on the north of Moa-lepe. [LCA 8247] Kolo-unā Lit:
        Tired of creeping Pali to the south of Moa-lepe. [LCA 8247] Ulu-kiu Lit:
        Rising of the kiu wind `Ili on the sea shore. There was a village here.
        [LCA 8837] Kiu is a "strong, moderately cold northwesterly wind." [PE]
        This windwas called kiu anu in Kalāheo, Kiu kai nui when it blew in the
        Ko’olau district, and Kiu ke’e in Nāwiliwili. •Ka-peku Lit: The kick
        Lo’i. [LCA 8837] •Ka’upulehua Lit: ? Kula. [LCA 8837] •Pu’u-’eke’eke
        Lit: Purse or scrotum hill Pali on the south side of Ulu-kiu. [LCA 8837]
        Ulu-kiu-lalo Lit: ? `Ili on the west of Ulu-kiu. [LCA 8837]
      </div>
      <Footer />
    </div>
  </>
);
