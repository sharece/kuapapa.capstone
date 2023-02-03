import { Link } from "react-router-dom";
import ahumap from "../../assets/ahu-divisions/Mana.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import konasign from "../../assets/ahu-signs/konasign.png";
import manasign from "../../assets/ahu-signs/Kona_mana.png";
import { SubNav } from "../home/SubNav";
export const Mana = () => (
  <>
    <Navbar />
    <div className="pt-14">
      <SubNav />
    </div>

    <div className="ahu-elements">
      {/* <Link className="back-to-moku" to="/kona">
        <div className="back-to-moku-sign">
          <img className="" src={konasign} alt="kona sign" />
        </div>
      </Link> */}
      <div className="ahu-map">
        <img src={ahumap} alt="mana ahupuaa breakdown" />
      </div>
      <div className="ahu-sign">
        <img width="100%" src={manasign} alt="mana road sign" />
      </div>
    </div>
    <div className="ahu-text">
      <p className="p-2">
        Mānā: Arid An ahupua‘a of the Kona district. Also a ridge. The western
        boundary abuts the rugged cliffs of Miloli‘i and Nā Pali; the eastern
        border Wai‘awa ahupua‘a. Originally the land slopes from the mountains,
        drops over a cliff-like formation, and then consists of a reedy marsh
        with open ponds, and the long sand dunes and beaches lining its entire
        length. *During the twelfth century, many voyaging canoes traveled
        between Kahiki and Hawai’i. One of these paddlers settled at Mānā,
        having come to admire ka moena hohola o Mānā, the unfolding mat of Mānā.
        He lived on the one kani, barking sands, and could look north to
        Polihale and south to Waimea and see nothing but an unending sandy
        beach. He went to visit a friend in Kona in Hawai’i but soon became
        homesick and brought his friend with him to show him the beauties of ka
        moena hohola o Mānā, the unfolding mat of Mānā. [Wichman: More Kaua’i
        Tales]{" "}
      </p>
      <p className="p-2">
        One section of the dunes are called The Barking Sands, because any
        disturbance of the sand causes a far-away sound of dogs barking.
        Ke-one-kani-o-Nohili, The-barking-sands-of-Nohili Large sand dunes at
        Kapu-`ai point where the Mānā coastline angles sharply to the west.
        [PEM] [POP][Geo] [Alex 1900] *Nohili, Tedious and slow, was a fisherman
        who had nine dogs. When he canoed out to sea, he tethered the dogs,
        tying three to each of three sturdy pegs driven into the sand. Once he
        was caught in a terrible storm which blew him almost to Nihoa Island.
        The nine dogs barked and barked, first to warn him, then to guide him
        home. They jumped, turned, twisted, and spun around and around their
        pegs, constantly barking. When Nohili reached home again, he found no
        trace of the dogs except great circles around each of the pegs. But as
        he walked, he heard his dogs barking deep inside the sand where, in
        their frenzy, they had dug themselves.
      </p>
      <p className="p-2">
        {" "}
        (Kauai Tales) Oki pau ka hana i ke one kani o Nohili. Strange indeed are
        the activities at the sounding sands of Nohili. Barking Sands beach was
        believed to be the haunt of ghosts. Said of a person whose behavior is
        peculiar.
      </p>
      <p className="p-2">
        {" "}
        (Pukui 2468) The marshes teemed with marsh and ocean birds. The mirage
        of Mānā was famous and could often be seen at twilight on the nights of
        Kāne. [Geo] *When she came to Kaua`i, Kapo-kina’u-’ula introduced the
        lei made of kauna’oa-lei, Cuscuta sandwichiana Choisy, a parasitical
        vine with orange stems, native to these islands. It was called "the
        motherless plant" because it is a parasite. Kauna’oa vine, vine of Mānā
        How I love that orphan vine A proverb applied to a loved individual who
        has no home or family. [Neal:710]
      </p>
      <p className="p-2">
        {" "}
        Kapo-kina’u-`ula was a goddess of the hula, practitioner of medicine
        (especially mental diseases), and of poison. She was the sister of Pele,
        the volcano goddess, and of Nā-maka-o-kaha’i, goddess of the ocean. She
        came to Kaua’i from the west when Mano-ka-lani-pō was Ruling Chief,
        circa 1200 A.D. She married one of her hand-maidens, Moe-haunaka, to
        Limaloa (konohiki chief of Mānā, brother of Lohiau, Pele`s lover who
        became Hi’iaka-i-ka-poli-o-Pele`s husband). *See legend of
        Uwe‘uwelekā"hau in Fornander.
      </p>
    </div>
    <Footer />
  </>
);
