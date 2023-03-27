import { Link } from "react-router-dom";
import ahumap from "../../assets/halelea-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import haenasign from "../../assets/ahu-signs/Halelea_haena.png";
import haleleasign from "../../assets/haleleabigsign.png";

export const Haena = () => (
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
          <div className="current-crumb">Hā‘ena</div>
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
            <img width="100%" src={haenasign} alt="haena road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Hā‘ena: Red hot This literal translation may refer to the strong taboos
        that surrounded this ahupua‘a and the schools that were located here.
        Lit: Red stem This translation may refer to the reddish stem of the
        uhi-kalakoa, a variety of sweet potato grown here. Lit: Sun heat Hā‘ena
        is the westernmost ahupua‘a of the Halele‘a district. It is bordered by
        Hanakapi‘ai on the west and Wainiha on the east. Hā‘ena is dominated by
        cliffs broken by a deep valley, Limahuli, and a shallow valley, Mānoa.
        In front of the cliffs lie a flat sandy plain with dunes along the
        beach. A reef extends almost the entire length of the ahupua‘a and forms
        one large lagoon and a bay, Makua, and a small bay and lagoon at Kē‘ē.
        Carbon dating in 1989 made from a site in Limahuli indicated that there
        was a settlement here by 300 A.D. (Sei) This figure has been disputed
        and will need to be refigured. Hā‘ena was always ruled by a chiefess and
        remained politically independent from the Ali‘i Nui (Ruling Chief) of
        Kaua‘i. The chiefess was in place for life, unlike other ahupua‘a chiefs
        who lost their position when a new ruler was named. After his second
        failed attempt to invade Kaua‘i, Kamehameha sent several envoys, one
        after the other, to persuade Kaumuali‘i, the Ruling Chief, to submit to
        Kamehameha’s sovereignty. The first few envoys were greeted warmly and
        given land and material wealth. One of these envoys was the high
        chiefess Kekela who was offered Hā‘ena, which she took, never returning
        to Kamehameha. She was still alive in 1848 and directed the people here
        to file their claims for land. Monk seals were often seen here and were
        called ‘ilio, perhaps because the bark of seal and dog are similar.
        Hā‘ena was noted for the quality of dog which was grown here as food for
        the chiefesses who were not permitted to eat pork. The name hā‘ena was
        given a variety of tapa which was used to clothe wooden images of the
        god Kū-nui-akua. This was the embodiment of the most powerful and senior
        god worshipped on Kaua‘i. [Kamakau: Na Po‘e Kahiko, p 12] Perhaps more
        than anything else, Hā‘ena is most famous as the site of the legend of
        Pele, Lohi‘au, Paoa, and Hi‘iaka. This long legend is possibly based
        upon a real woman who came to Kaua‘i about the year 1350 A.D. In those
        years of peace on Kaua‘i, the haku mele (myth makers) wove a story much
        as Homer did the story of the war against Troy. This story is unique to
        the Hawaiian Islands. and has no counterpart on any other Polynesian
        islands. Pele came to Kē‘ē when she first sought a home and safety from
        her sister Namakaokaha‘i. Here she met Lohi‘au and fell in love with
        him. But each time she dug a cave to make a home for them, she met with
        water. She left Kaua‘i to seek a home, promising Lohi‘au she would
        return for him. Eventually she made her home at Kilauea on Hawai‘i, then
        sent her sister Hi‘iaka to fetch Lohi‘au . Meanwhile Lohi‘au hung
        himself in despair. His body was placed in a cave above Kē‘ē and was
        guarded by two mo‘o sisters, Kilioe and Aka. Hi‘iaka and her friend
        Wahine‘ōma‘o arrived to bring Lohi‘au back to Pele. Hi‘iaka killed the
        two guardian mo‘o and, with herbs and prayers, restored Lohi‘au to life.
        The two then went back to Hawai‘i, where Hi‘iaka found Pele had broken
        her promises to her and in defiance, Hi‘iaka embraced Lohi‘au. This
        enraged Pele and she covered Lohi‘au with lava. Hi‘iaka then dug a
        tunnel from the sea to the fire pit but was persuaded by her brothers to
        spare Pele. Hi‘iaka returned to Kaua‘i and never saw Pele again.
        Meanwhile Hi‘iaka’s brothers restored Lohi‘au to life once again and
        took him to Kaua‘i. There Hi‘iaka and Lohi‘au were reunited and spent
        the rest of their lives at Hā‘ena.
      </div>
      <Footer />
    </div>
  </>
);
