import { Link } from "react-router-dom";
import ahumap from "../../assets/kona-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import konasign from "../../assets/ahu-signs/konasign.png";
import waimeasign from "../../assets/ahu-signs/Kona_waimea.png";

export const Waimea = () => (
  <>
    <Navbar />
    <div className="ahu-bg">
      <div className="ahu-elements">
        <div className="breadcrumb-menu pt-4 flex color-white">
          <Link className="crumb" to="/">
            Home
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <Link className="crumb" to="/kona">
            Kona
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <div className="current-crumb">Waimea</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="kona ahupuaa breakdown" />
          </div>
          <Link className="back-to-moku" to="/kona">
            <div className="moku-sign">
              <img src={konasign} alt="Kona sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={waimeasign} alt="waimea road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Waimea: Red water An ahupua‘a of the Kona district. [Geo] [PEM] Waimea
        was the largest ahupua‘a on Kaua‘i, almost 93,000 acres in all. It
        included much of what we call Waimea Canyon and Koke‘e today. On the
        eastern bank, the boundary begins at the mouth of the river. The
        boundary line follows the low cliff until it reaches the junction with
        Makaweli river. There the boundary crosses the Waimea river, goes
        upstream a little, then re-crosses the river to climb up the ridge to
        Kane-kula. Kane-kula means Dry-land-man, named possibly after an expert
        in dry land farming of yams, sweet potatoes, and certain kinds of taro.
        This east boundary is shared with the ahupua‘a of Makaweli to the peak
        named Ka-lehua-hakihaki. This 3724 foot peak is often mentioned in
        Kaua‘i mele. A warrior broke this tree apart to make his warclub from
        the wood. The splintered trees continued to grow. The boundary now runs
        over and through part of the Alaka‘i swamp until the Ka-unu-o-Hua ridge.
        Here, just above Kanaloa-huluhulu where the Koke‘e Museum is, is a
        furrowed rock, Pōhaku-wa‘awa‘a. Its name means furrowed, or full of
        grooves. It also refers to a person whose back bulges with muscles but
        is a stupid fool. This rock was the boundary point for four ahupua‘a:
        Waimea, Kalalau, Awaawapuhi and Nualolo. From Pōhaku-wa‘awa‘a, the
        boundary line continues along the top of Ka-unu-o-Hua ridge, with the
        edge of the canyon on the east and the watershed for the ridges above
        Mānā on the west. Pu‘u-kāpele is the highest point on the canyon‘s edge
        and was the home of the specialists in canoe making. It was in the
        forest area where koa trees grow and these were carefully tended so that
        the trunks would be straight, branchless and as much as 80 feet tall.
        The original name means Distended-hill, like a pooched-out stomach. The
        meaning of Hill-of-Pele, Pu‘u-ka-Pele, came much later for Pu‘u-kāpele
        is named in the earliest legends almost eight hundred years before Pele
        came to Kaua‘i. After Pu‘u-kāpele, the boundary is shared with the
        ahupua‘a of Poki‘i-kauna whose principal village was tucked up against
        the cliffs behind present-day Kekaha. Poki‘i-kauna means the chant
        belonging to a younger sister. The ahupua‘a also included off-shore
        fishing grounds and the surf for the sport called he‘e nalu, sliding the
        waves. [appeared in the Garden Island, April 22, 1990] Waimea is a land
        of firsts. It was the first land settled by people who, it is thought,
        came from the Tahiti area. These settlers were led by
        Kūalu-nui-kini-akua. With him was a high priest named Pi‘i who brought
        the taro known as pi‘i-ali‘i with him. Also with these settlers came the
        Menehune, who were a group of skilled workers, experts in stone work,
        canoe building, and the like. They were not the little brownies or
        leprechauns or what have you that nineteenth century Europeans brought
        with them. By looking very carefully at the few stones visible of the
        Menehune Ditch, it is evident that never again were the Hawaiians
        capable of doing such work. Under Kūalu‘s grandson Ola, the island was
        explored and many of our present place names date from that time of
        discovery. Waimea was an ideal place for settlement. There was abundant
        water. The climate was warm and relatively dry, useful to a people who
        wore few clothes of beaten bark, which held together well when dry but
        disintegrated quickly when wet. Taro could be grown. Captain Cook speaks
        of yams and sweet potatoes reaching fourteen pounds or more. Fish was
        abundant, and the early settlers brought pigs and dogs for meat, kukui
        for its nuts, ti for its many uses, and bananas, coconuts, and
        breadfruit. Waimea is where Captain Cook first landed in the Hawaiian
        Islands. It is where the first Hawaiian was shot in a scuffle with
        Cook‘s marines on Ke-one-luhi. It is where the first of the European
        diseases was introduced which in the next few decades would reduce the
        native population by more than half. Waimea is where Kaumuali‘i, the
        last king of Kaua‘i, welcomed King Liholiho, son of Kamehameha who had
        been unable to conquer this island. Liholiho invited Kaumuali‘i on board
        his ship, The Pride of Hawaii, for dinner and during the meal Liholiho
        ordered the sails raised. Kaumuali‘i never returned to his island and
        was forced to cede his lands to Liholiho. After Kaumuali‘i died in 1824,
        his son George Humehume rebelled against the Kamehameha family. He
        attacked the Fort at Hipo but in the battle Humehume was defeated. The
        Kamehameha forces killed every chief who had fought with Humehume and
        many of their wives and children. Those chiefs who had gone to
        Kaumuali‘i‘s funeral which was held on Maui were never permitted to
        return to Kaua‘i and the lands were taken over by Liholiho, Ka‘ahumanu,
        and other members of that family. The Waimea is the third longest river
        on Kaua‘i, after Wainiha and Wailua. It was the center of the ahupua‘a,
        the ancient land division that stretched from Pōhaku-‘awa‘awa,
        Furrowed-rock, in the mountains down to the sea. It was a heavily
        populated area, and there are still house sites, taro patch walls and
        ruins of temples all along the Waimea nd its tributaries. Wai-mea means
        Red-stream. After a storm, the water in the river runs red but the water
        down Makaweli (which joins the Waimea just above today‘s town) runs
        white. When the two streams join, the water remains red on one side and
        white on the other. The red side was called Ka-wai-‘ula-‘ili-ahi, The
        water that turns the skin fiery red. The river runs red, the legend
        goes, because a man named Mano wanted to marry Kō-maliu, daughter of the
        chief. She did not like Mano and refused to have anything to do with
        him. One night he kidnapped her and took her to his home, which was a
        cave behind a waterfall. Here he demanded that she marry him and once
        again she refused. He hit her with his war club and she fell dead. The
        blood from her wound flowed across the floor of the cave and into the
        waterfall and was carried downstream to the village near the sea. Her
        death was avenged yet the river runs red in her memory. Waimea River was
        famous for its hinana, the spawn of the ‘o‘opu, a goby fish. During the
        season when these fish swim down river to the sea, they were so thick in
        the water that they touched the skin of anyone entering the water.
        Waimea is also the Kaua‘i name for a kind of mamaki, a native tree that
        was often used to make tapa. It had leaves with red veins and stems.
        Tapa made of waimea was coarse and heavy compared to the tapa made from
        wauke, the mulberry tree. It was durable if kept dry, but tore like
        paper when wet. [appeared June 25, 1989 in The Garden Island] Waimea is
        also a species of tree, the same as olomea. [And] There are extensive
        taro fields on both sides of the river. This is one of the most
        populated of ancient villages. Along the base of the bluffs on both
        sides of the river after getting up past the branch of the Makaweli and
        Waimea rivers, there are built up stone house sites. In some places
        these facings run for over 100 feet along the base of the bluff with the
        paving extending back 15 feet or more. At other places the terrace is
        just sufficient to maintain one house. On the east side of the river on
        the steep talus slopes, there are house sites with terraces as high as 8
        feet to maintain a level platform for a house. [Ben 25,33,27] Hinana
        were a small ‘o‘opu (1 or 2 inches in length) that only grew in the
        Waimea river and is different than the nopili. [G. Christian] PE says
        the hinana were the young of ‘o‘opu and were formerly caught in nets and
        greatly relished. [PE iii] Ka i‘a ho‘opā ‘ili kanaka o Waimea, The fish
        of Waimea that touch the skins of people. When it was the season for
        hinana, the spawn of ‘o‘opu, at Waimea, they were so numerous that one
        couldn‘t go into the water without rubbing against them. [Pukui 1339]
        Ho‘i hou ka pa‘akai i Waimea, The salt has gone back to Waimea. Said
        when someone starts out on a journey and then comes back again. The salt
        of Waimea is known for its reddish brown color. [Pukui 1028] Ka ua
        nounou ‘ili o Waimea, The skin-pelting rain of Waimea. Refers to Waimea,
        Kauai. [Pukui 1591] Ka-wai-‘ula ‘iliahi o Waimea, The red sandalwood
        water of Waimea. This expression is sometimes used in old chants of
        Waimea, Kauai. After a storm Waimea Stream is said to run red. Where it
        meets Makaweli stream to form Waimea river, the water is sometimes red
        on one side and clear on the other. The red side is called wai ‘ula
        ‘iliahi. [Pukui 1662] Ka wai ‘ula ‘ili ahi o Waimea, The fiery red skin
        of Waimea. The water of the Waimea river, like that of KawaikōÄ« and
        Koai‘e is the color similar to iced tea. When one puts an arm into the
        water, it looks as though it is on fire, e.g. fiery skin. The water from
        the Makaweli was named Wai-kea, white or clear water. [Kaohe, telephone
        conversation 12 Jul 89] Ke one kapu o Kahamalu‘ihi, The sacred sand of
        Kahamalu‘ihi. A city of refuge for those of Waimea, Mānā, and the Kona
        side of Kauai. [Pukui 1775]
      </div>
    </div>
    <Footer />
  </>
);
