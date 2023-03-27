import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import ahumap from "../../assets/koolau-bd.png";
import { Footer } from "../home/Footer";
import koolausign from "../../assets/ahu-signs/koolausign.png";
import pilaasign from "../../assets/ahu-signs/Koolau_pilaa.png";

export const Pilaa = () => (
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
          <div className="current-crumb">Pīla`a</div>
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
            <img width="100%" src={pilaasign} alt="pilaa road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Pīla`a: Ceremonial Sprinkling Pīla`a is a very small ahupua`a of the
        Ko`olau district containing only 1250 acres in all. It is fronted by a
        reef and a sandy beach reaching from Ke-puhi, The eel or The blow-hole,
        which marked the border with Lepeuli to Pōhaku-malumalu, Sheltering
        stone, on the border with Waiakalua. There is a small plain between the
        beach and a low set of pali that is broken by two gulches, one carved by
        the Pila`a stream and the other named Kanoa. One of the cliffs was
        Kai-hale (Ocean house). Another was Ka-`uha-heke (The tatooed thigh).
        After the 1824 rebellion was lost by the Kaua`i forces, the Kamehameha
        victors ordered that any Kaua`i chief that was tattooed from ankle to
        thigh, even if only on one leg, to be killed. The island was searched
        and all those found, save one, was executed. Above the beach-front pali
        there is a gently rising plain, dominated by a cinder cone of 761 feet
        elevation. Beyond that the plain rises to a ridge of hills just above
        the 800 foot elevation level. The ahupua`a stops short of the mountains.
        This must have posed a problem of tax paying, for one of the tributes
        demanded each year was a supply of feathers from colorful mountain
        birds. The solution may be indicated by the name of a cultivated area:
        Ka-moa-`ahu-`ula, The chicken feather cloak. Chicken feathers were also
        used in the kahili, the long spike topped with a feathered cylinder that
        always marked the rank of the highest ali`i. This land was well
        cultivated. There were many taro lo`i, patches, indicating great deal
        more water flowed through Pila`a in the olden days than does now. One
        farmer, in 1848, cultivated 7 lo`i. In the kula, or upland pasture area,
        farmers grew noni for its medicines and dyes, and bitter gourd from
        which to make calabashes of all sizes and shapes. Several place names
        indicate that `olona (sennit) was grown which was used to make cords and
        rope: Ka-`aha-makole, The sennit scraper, Ka-wa`u, The scraper made of
        cowry shell. Wauke, the paper mulberry from which tapa was made also
        grew abundantly. The land was covered with mahiki grass, a coarse clumpy
        grass which was prized for it carried the same name a a shrimp. The
        mahiki shrimp was used to cast out spirits or exorcise troubles, and
        mahiki grass was a substitute if the shrimp was not to be found. There
        were clumps of hala trees. One was named Ka-hua (The fruit) which was
        used as a marker on the border with Waipake ahupua`a, just below the
        present government road. At the junction of Pila`a, Waipake, and
        Lepe`ula was Ka-lana-ki`i, (The lana image), a clump of hala trees.
        Perhaps the trunks of these trees were used to carve images (lana) which
        were then placed in the lowest floor of the oracle towers where
        offerings were placed. The place names Lola-`ulu (Drooping breadfruit)
        and Ulu-kāne (Male breadfruit) indicate there were breadfruit trees
        growing there once. Breadfruit was not common since it fruited only once
        a year. Only one species of breadfruit had been brought in by Kaha`i,
        grandson of the famed Moikeha in the twelfth century, and after him
        voyaging to the southern Polynesian islands stopped. Therefore
        breadfruit trees were important enough to be individually named. There
        was possibly a salt pan called Kaheka. A kaheka was a pool, especially a
        rock basin where the sea washes through an opening and salt forms.
        However, in Pila`a, Kaheka is far up on the plain and therefore the name
        may be properly said to be Ka-heka, The bleary one. These possibilities
        demonstrate the difficulty of translating Hawaiian names into English.
        Unless the story of the naming is known, any English translated is an
        educated guess. Other trees that grew in Pila`a are the kou (Coria
        subcordata) which has durable beautiful wood which was used to make
        cups, dishes and calabashes, since kou does not impart flavor to any
        foodstuff or liquid stored in it. Kukui, one of the plants brought by
        the earliest settlers, provided the nuts used to make torches and, when
        crushed, an oil which produced a flame that burned slowly and gave a
        smokey light for night use. An old `ahakea tree named Ka-momoku, The
        broken fragments, grew on top of the ridge which is the uppermost
        boundary of Pila`a. The `ahakea is a native tree, a species of Bobea,
        with yellow wood that made excellent poi boards. After the foreigner
        came, orange trees, given by Captain George Vancouver in 1794, were
        planted and became highly prized. In 1848 oranges were shipped to
        California, then in the midst of its Gold Rush, and were sold at
        fabulous prices.
      </div>
      <Footer />
    </div>
  </>
);
