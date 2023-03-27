import { Link } from "react-router-dom";
import ahumap from "../../assets/halelea-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import hanaleisign from "../../assets/ahu-signs/Halelea_hanalei.png";
import haleleasign from "../../assets/haleleabigsign.png";

export const Hanalei = () => (
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
          <div className="current-crumb">Hanalei</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="Halelea breakdown" />
          </div>
          <Link className="back-to-moku" to="/halelea">
            <div className="moku-sign">
              <img src={haleleasign} alt="halelea sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={hanaleisign} alt="hanalei road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Hanalei: Crescent bay Wreath making Lei valley What is called Hanalei
        today once consisted of four ahupua`a, Hanalei, Wai`oli, Waipa, and
        Waikoko. Hanalei was the largest of the nine ahupua`a of the Halele`a
        district. It stretched from Wai`ale`ale through the steep canyon
        following the Hanalei river to the ocean. It included what is known
        today as Princeville, Wainini, and about a quarter of the crescent
        beach. The eastern boundary was shared with the ahupua`a of Kalihikai. A
        heap of stones topped with a carving of a pig's head was the boundary
        between the two. It stood at Hulokoa at the far end of Wainini. There is
        a channel here between the reef that extends along Kalaeokaweonui and
        the reef that stretches in front of Kalihikai. The western boundary was
        shared with Wai`oli and ended at the beach near today's County Pavilion.
        When a Ruling Chief's heiau was about to be completed, priests fastened
        several bundles of white tapa to the ridgepole of the newly completed
        image house. Then a prayer was offered to Kū. E Kū i kaupaku o Hanalei,
        maku’u oloa O Kū of the mystic, wonderful ridgepole of Hanalei [Malo] #A
        maku`u is a bundle of white tapa which is fastened to the ridgepole,
        while an oloa is a fine white tapa. The reference here may well be to
        the white clouds that often hang over the mountains of Hanalei. However,
        this same ridgepole is used to disparage the character of Hanalei
        people. Ki’eki’e kaupoku o Hanalei The high ridgepole of Hanalei. [Said
        of conceited or willful persons, a pun on a place name of Hanalei.] [PE]
        In 1816, Kaumuali`i, the last Ali`i Nui (Ruling chief) of Kauai gave
        Hanalei to Dr. Georg Schaeffer, the envoy of the Russians. Dr. Schaeffer
        raised the Russian flag, built Fort Alexander on Pu`upōā headland, and
        left Aleuts to man it. Dr. Schaeffer thought of Hanalei as private
        property and, failing to act as a proper konohiki should, became hated
        by the people. They rose against the Aleuts when Kaumuali`i ordered the
        Russians to leave, killed several, and took the rest prisoners. When Dr.
        Schaeffer, thinking word had not spread, sailed into Hanalei, the
        prisoners were put on board the badly leaking boat and Dr. Schaeffer was
        forced to leave without going ashore. Near the ocean, there were two
        large fishponds that must have supplied a great quantity of fish. Kanoa,
        near the present-day pier, is still is use. The other is completely
        overgrown but the area remains marshy and usable by water fowl. Usually
        the translation of the name Hanalei is given as "Crescent Bay", but the
        translations "Wreath Making" and "Lei Valley" are closer to the
        original. Poetically it was said that the wreaths are the constant
        rainbows that appear in the upper valley due to the constant rain
        showers that fall there. Akule, Selar crumenophtahlmus, was called "the
        fish of Hanalei" because it was so abundant in the bay.
        Ka-mo`o-o-ka-muliwai was a mo`o (supernatural lizard) that guarded the
        Hanalei river mouth.The mo`o refused to let Hi`iaka, on her way to
        Hā`ena to get Lohi`au for her sister Pele, the volcano goddess, cross
        the river and sent freshets of water to sweep her off her feet. Hi`iaka
        struck it dead and since that time it has not been as difficult to cross
        the river. Hanalei was the home of Ka-ua-hoa (friendly rain), a warrior
        who lived circa 1660. He was born in the same day and place as the
        future ruling chief `Ai-kanaka (Leader of men), and his cousin
        Kawelo-lei-makua (Kawelo beloved by his parents). In the war between
        these two, `Aikanaka did not immediately call upon Kauahoa, who sat in
        the headwaters of Hanalei river and dammed up the water for so long that
        the fish gasped in the dry bottom. After he was summoned, Kauahoa tore
        up a koa tree to use as a war club. He did not trim the branches from
        the trunk and as he trudged along, birds perched in the branches and
        sang. Kauahoa and Kaweloleimakua met on the battlefield in single
        combat. Kauahoa struck with his war club but Kawelo`s wife threw her
        pikoi and deflected the blow. Kawelo then struck Kauahoa and killed him.
        Me‘e u‘io Hanalei The handsome hero of Hanalei Refers to Ka-ua-hoa
        [Pukui 2151] [Geo] [Dickey] [PEM] [Pukui] [Rice] Hanalei … ‘āina a ka
        pe‘a i noho ai Hanalei … land where the bat lived [PE]
      </div>
      <Footer />
    </div>
  </>
);
