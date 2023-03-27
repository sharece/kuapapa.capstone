import { Link } from "react-router-dom";
import ahumap from "../../assets/kona-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import konasign from "../../assets/ahu-signs/konasign.png";
import makawelisign from "../../assets/ahu-signs/Kona_makaweli.png";
import { Dropdown } from "rsuite";

export const Makaweli = () => (
  //possibly create a read more at the end of links
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
          <div className="current-crumb">Makaweli</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="kona breakdown" />
          </div>
          <Link className="back-to-moku" to="/kona">
            <div className="moku-sign">
              <img src={konasign} alt="Kona sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={makawelisign} alt="makaweli road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Makaweli: Burning-eyes; Lit: Phosphorescent eyes; Lit: Fearful eyes An
        ahupua`a of the Kona district. It lies between Hanapēpē on the east and
        Waimea on the west. Ho`olele ka uila o Makaweli. Send the lightning of
        Makaweli flying. A play on maka-weli (terrifying eyes), this saying
        refers to the sending of a god on an errand of destruction. (Pukui
        1097).
        <Dropdown title="Click to reveal more info">
          <Dropdown.Item>
            <div>
              {" "}
              to the sending of a god on an errand of destruction. (Pukui 1097)
              Pueo Lit: Owl A rock in the sea, also a place of surf-riding For
              VI: 454 & 456 Ka-pai-loa-hiki Lit: The tall rising pai fern The
              highest point on which the copper plate of the U.S. Geological
              Survey is enclosed. * Pai is a native fern, Polypodium
              hymenophylloides, with clustered, narrow pinnate fronds, two to
              five inches long, growing on trees at rather high altitudes. Also
              called huna-palai or palai-huna. Rock: Indigenous Trees
              Wai-a-ke-aloha Lit: Stream created by friendship Waterfall on the
              trail between Ka-hōlua-mano and Ka-uluwehi bog, near the 4000 foot
              elevation level. [Rock: Indigenous Trees] Ka-uluwehi Lit: ōive
              growth, e.g. a place where lush and beautiful plants thrive. A
              small bog situated at an elevation of 4200 feet back of
              Ka-hōlua-mano on the trail to Wai-a-ke-aloha waterfall. It is one
              of five similar bogs on Kauai; the others are Wai-`ale`ale,
              Alaka`i, Lehua-makanoe, and the Wahi`awa. [Rock: Indigenous Trees]
              Ka-hale-kua-kāne Lit: The house of the male god ‘Wai`ale`ale is
              the mountain and Ka-hale-kua-kāne the place where birds are
              caught.â€ [Kamakau: p. 40 in the story of Pikoi-a-ka-`alalā]
              Pe‘ape‘a Lit: Bat Peapea was noted for its makaupili rain. maka`u
              = fearful/pili = clinging [Fornander VI, 454] Ka-wai-`ula Lit: The
              red stream Stream, location unknown, whose water is muddied (wai
              iliahi) by ka paka pa`a hoa rain at Kahana. [For VI: 454] `Āluka
              Lit: Multitude Cliff and peak opposite Ka-lehua, on the west bank
              of Kahana, above the pool of Pili-a-moo. [Gay] Ha`alo Lit: Dodge
              (not in PE iii) Valley and intermittent stream opening into the
              Moku-one with headwaters on the south slope of Ke-ana-ka-akua.
              [G&R] [Gay 32] Hihi-nui Lit: Much entanglement Waterfall [Geo]
              [PEM] Ka-`aha Lit: The assembly Summit [Geo] [PEM] Ka-`ai-kumu
              Lit: The bartered taro Land area on east bank of Moku-one, three
              fords mauka of Lonopua. [Gay 41] Kā-heka-pō`ele`ele Lit: Salt pan
              of the dark night Valley. [Geo] Pō`ele`ele is a reference to great
              antiquity. Ka-hōlua-manu Lit: The sled course of Manu The highest
              cliff of Waimea valley, 3724 feet elevation. [Geo] ]PEM] [Gay]
              *Manu‘s parents made him do all the work preparing the family‘s
              food so he had no time to learn to ride the hōlua sled. One day he
              watched a Menehune slide on the hōlua. The Menehune fell from the
              slide and the sled was broken. Manu repaired the sled and the
              Menehune gave him a hōlua of his own. But each time Manu tried to
              ride the hōlua, his parents either caused stones to be thrown onto
              the course or caused freshets in the stream where the course
              ended. Manu left them in disgust and became a famous hōlua rider.
              Kahua-aka`a-ulu Lit: Place to peel breadfruit Flat above the land
              of Wiwi [Gay 65] Ka-`ili-elehu Lit: Very dark surfaced (not in PE
              iii) Land area near mouth of ‘O‘opu-lele valley [Gay 65]
              Ka-lehua-hakihaki Lit: The broken lehua tree Peak, 3548 feet (Geo
              says 3724 feet) [Geo] [PEM] Ka-lua-kea Lit: The white pit Ridge
              [Geo] Ka-lua-o-ka-lani Lit: The pit of heaven Valley [Geo] Kanaloa
              Lit: Kanaloa (one of the four major gods) Land area near the mouth
              of Ha-alo [Gay 32] Ka-puhala-a-ke-akua Lit: The god‘s pandanus
              tree Flat place by Moku-one stream. There was a ti-root oven here.
              [Gay 41] Ka-puka-paia Lit: The water hole; The walled in (by
              vegetation) hole Ridge, with summit of 2979 feet [Geo] [PEM]
              Ka-unu-`ōnohi-iki Lit: Little heiau of the eyeball Land area on
              west bank of Moku-one between Ka-makewai and Ka-puhale-a ke-akua
              [Gay 41] Ka-unu-`ōnohi-nui Lit: Large heiau of the eyeball Grove
              of wauke trees on the east side of Moku-one on stony land [Gay 41]
              Ka-wai-kāpili Lit: The joined waters Intermittent stream that
              forms the north branch of Mo-ole. [G&R] Ke-ana-ke-akua Lit: The
              cave belonging to the gods Summit, 3438 feet [Geo] [G&R] Ke-ū Lit:
              The damp spot Hollow where trees grow on the makai side of Malei
              [Gay 41] Kiho Lit: ? Peak, 2205 feet [G&R] Kuma-`ākia Lit: Dotted
              with akia trees Large kukui grove on the east side of Moku-one
              just makai of Paikau. [Gay 41] The ‘ākia is a member of the
              Wikstomemia species. Its bark, root, and leaves give a narcotic
              used for fish poisoning. Loli Lit: Sea cucumber Stream [Geo]
              Lonopua Lit: Lonopua, a god of healing A grove of kukui trees on
              the east side of Moku-one [Gay 41] Malei Lit: Malei, a goddess
              related to the Pele family Ravine draining into ‘Ō‘opu-lele close
              to its junction with Moku-one, draining A`ali`i-nui ridge. [Gay
              41] [G&R] Maniania-`ulu Lit: Red maniania grass Land area on ridge
              south of Kalua-o-ka-lani valley and Kiho peak [G&R] Moole Lit:?
              Intermittent stream, east branch that flows down to Moku-one.
              Perhaps the same as Omoole (cf). [G&R] Nā-kanuka-lolo Lit: ? Ridge
              with summit of 3738 feet [Geo] Nana-nui Lit: ? Intermittent stream
              that forms the south branch of Moole stream. The meaning will
              depend upon the proper pronunciation of the name: nana, nanā, or
              nānā. [G&R] Nā-wai-maka Lit: The tears Stream and valley [Geo]
              `Ōhule-lua Lit: Two persons (?) Ridge that divides ‘Ō‘opulele and
              Mokuone valleys. [Geo] [G&R] `Ōmaka-o-kī-lepalepa Lit: Leafing out
              of the tattered ti plant Valley on east of the Kahana above Wiwi
              [Gay 65] `Ōmoole Lit: Bottle Gulch. Perhaps the same as Moole
              (cf). [Stau] `Ō`ō-mālō Lit: Straight digging stick Valley on the
              west bank of the Kahana, opposite Ho`olono-i-ka-muhi (map 52) [Gay
              65] `Ō`opu-lele Lit: Leaping ‘O‘opu fish Waterfall at the outlet
              of ‘Ō‘opulele valley; the valley itself. The ‘Ōhulelua ridge on
              the east divides it from Mokuone valley. [Geo] [Gay 41] [G&R]
              `Ōpae-wela Lit: Hot shrimp Valley [Geo] Pā-lepa Lit: Dirty dish
              Stream flowing into Moku-one from the north [G&R] Pali-na`ena`e
              Lit: Cliff of delightful odors Cliff opposite and mauka of
              ‘O‘opu-lele valley on east side of Moku-one; runs up to
              Pali-wai-ehu [Gay 41] Papa-iki Lit: Little flat land Land area
              makai of Pili-a-moo pool [Gay 65] Pōhaku-lau-hui Lit: Rock wrapped
              in leaves Peak, 1962 feet, south of Ka-lua-o-ka-lani stream [G&R]
              Polo-iki Lit: Little trifler Valley mauka of the flat of
              Kalua-aka‘a-ulu [Gay 65] Puka-kahi Lit: Single opening Stream bed
              of Moku-one from Ka-ili-lehua to ‘Ō‘opu-lele. This name once
              applied to a mound in the stream bed, but since the disappearance
              of the mound, it has come to refer to the stream bed itself. [Gay
              41] Wāwae-nohu Lit: Porous stone foot Land area below Papa-iki
              [Gay 65] Wiwi Lit: Thin Valley and ridge on east bank of the
              Kahana opposite Oo-malo [Gay 65] `Āluka Lit: Heaped Peak, possibly
              3260 feet, on ridge between Moku-one and Wai-au [G&R] Apau-hua
              Lit: Entirely fruitful Land area on the east bank of the Kahana
              opposite Kalo-`ele`ele [Gay 67] Hale-kua Lit: Tapa beating house;
              Valley of Mokuone above Ka-pili-a-Kāne; stream. [Geo] [Gay 42]
              [PEM] [G&R] Hale-mokihana Lit: Mokihana house Valley on west side
              of Moku-one canyon opposite Kalo-`ele`ele. [Gay 67] [G&R] Halulu
              Lit: Rumbling Waterfall and land area on the east bank of the
              Kahana mauka of Poha-kea [Gay 67] Hulu-hale Lit: Beloved house
              House site with Pulama-nui on its north and the Kahana on the east
              [Gay 66] Ka`ā-huna Lit: Olona rope fragment Valley opposite, but a
              little makai of Ka-hinahina on the east side of the Kahana [Gay
              66] [G&R] Ka-ana-pahu Lit: The drum cave Valley at Kukui-hoehoe on
              the east side of the Kahana [Gay 65] Ka-hala Lit: The pandanus
              Land area mauka of and adjacent to Kea on the same side of river
              [Gay 66] Ka-hala-kea Lit: The white hala fruit Alt: Ka-hala-pe`a,
              The-bat‘s-house Land area mauka of Pili-a-moa on the east side of
              the Kahana [Gay 65] Ka-hālau Lit: The shed Land area on the west
              bank of the Kahana mauka of Ka-hala-kea [Gay 66] Ka-hale-puhi-kī
              Lit: The house in which ti is cooked Land area mauka of Pepeiao on
              the same side of the river [Gay 66] Ka-hinahina Lit: The hinahina
              plant Land area makai of Pulama-nui on the west bank of the
              Kahana. Also name of the trail that climbs the ridge. [Gay 66]
              #This name could refer to any one of seven different plants
              (silversword, Florida moss, heliotrope, geranium or artemisia) or
              even a variety of sugar cane. Ka-holoina Lit: Rushing violently
              Stream; also crossing above Ka-uluulu waterfall [Geo] [Gay 42]
              Ka-hua-kahi-`ākau Lit: The only child on the right Land area on
              the east bank of the Kahana immediately below Wai-kaka waterfall
              [Gay 67] Ka-ipu-ha`a Lit: The shallow calabash Trail up above
              Wai-kaka falls leading to Kea-pua [Gay 67] [G&R] Ka-lehua Lit: The
              lehua tree Pen for animals on the east side of the Kahana at
              Ka-hala-kea [Gay 65] [G&R] Ka-leina-a-kalo Lit: The place where
              the taro leaped Trail mauka of Hale-mokihana, leading to ridge
              between Hale-kua and Wai-au [Gay 67] [G&R] Kalo-`ele`ele Lit: Dark
              taro Land area mauka of Hale-mokihana [Gay 67] [G&R] Ka-loulu Lit:
              The loulu palm Pool mauka of Wai-a-koloa in the Moku-one stream
              [G&R] [Gay 42] Ka-lua-oho Lit: The hair pit Land area mauka and
              east of the crossing of Ka-holoina stream. This was on the path
              that led from the junction of the Waimea and Makaweli rivers to
              Koaka peak. [G&R] [Gay 42] Kamala-apeape Lit: The apeape shed Cave
              on west side of the Kahana opposite Halulu [Gay] Ka-moku Lit: The
              district Land area opposite the mouth of Ka-wai-iki, on east side
              of canyon [Gay 66] [G&R] Ka-paka Lit: The little drops of water
              Valley and land area on west side of the Kahana mauka of Paina
              [Gay 66] Ka-palaoa Lit: The whale bone ornament Valley mauka of
              Ka`a-huna, east side of the Kahana [Gay 66] Kapa-ū Lit: Wet tapa
              Peak above Makole [Gay 42] [Gay 66] Ka-pāweo Lit: The turning away
              Land area mauka and opposite Paina on the east side of the Kahana
              [Gay 66] Kapili-a-Kāne Lit: Kāne‘s mate Ka-pili-a-Kāne, The pili
              grass of Kāne Point and recess above the point in the valley mauka
              of Ka-loulu on west side of the Moku-one .[Gay 42] [G&R] Kapili,
              meaning mate, is not in PE iii. It came from the typescript of
              Gay. Ka-pua Lit: The blossom House site mauka of the mouth of
              Pilipili-hau-maka on the west bank of the Kahana [Gay 66]
              Ka-uluulu Lit: The angry (one); Rushing violently Waterfall on
              Ka-holoina just before that stream joins with Hale-kua stream to
              form the Moku-one [G&R] [Gay] Kaumaha-loa Lit: Very heavy; Very
              sad Summit [Geo] [PEM] Ka-wai-iki Lit: Small body of water; Narrow
              stream Valley opposite Ka-moku on west side of canyon [Gay 66]
              [G&R] Ka-wi-`ai-pala Lit: The freshwater bivalve that eats pala
              fern Kula land above Ke-apuapu and below Kue-manu peak [Gay 66]
              Kea Lit: White Alt: Ke-`ā The-lava Land area mauka of and adjacent
              to Ka-paweo [Gay 66] Ke-ana-one Lit: The sandy cave Cave on west
              side of the Waiau valley near the top of a ridge on a single ledge
              [Gay 67] Ke`a-pua Lit: To shoot arrows made of the stems of the
              sugar cane tassels Peak. [Geo] #Ke`a-pua was a popular sport.
              Arrows were made of sugar cane tassels and fired from bows strung
              with hau bark cord. In distance shooting, the winner was he whose
              arrow flew furthest. Shooting rats that had been caught and put in
              a pit was another sport. The winner was he whose arrow pierced
              more than one rat. Ke-apuapu Lit: The rasp Valley between
              Pulama-nui and Pilipili-a-haumaka [Gay 66] Kieia Lit: Spied on
              Land area and kula lands on the west side of Kahana makai and
              adjacent to Paoa [Gay 67] Kī-pole Lit: Apron of ti leaves Summit,
              2980 feet [Geo] [G&R] Kue-manu Lit:(A method of bird catching)
              Peak above Ke-apuapu. [PE] [G&R] [Gay 42 & 66] Kue-manu means to
              attract `ua`u birds (petrels) to a net by imitating their call,
              kue, kue, kue! Kukui-hoehoe Lit: Light by which the hoehoe
              instrument was played Land area opposite Pili-a-mo`o pool on the
              east bank of the Kahana. [Gay 65] The hoehoe was a nose flute.
              Hoehoe refers also refers to a plaintive prolonged sound as given
              by the nose flute. Moena-a-ka-lehua Lit: Where the warrior laid
              down Valley, land area, and cave opposite Ka-hālau on the east
              side of the Kahana [Gay 66] Makole Lit: Red eyed Land area south
              side of Pulama-nui [Gay 66] Moku-one Lit: Sand island Stream and
              valley [Geo] [PEM] Nā-wai-elua Lit: The two bodies of water; The
              two streams Valley mauka of Ka-paka on same side of the Kahana
              [Gay 66] Pa`ina Lit: Crackling sound Stream flowing into the
              Ka-wai-iki [Gay 66] [G&R] Pali-wai-ahau Lit: Cliff of deposited
              waters Cliff above Wai-a-koloa road down into valley and up and
              over between Kapau and Kue-manu [Gay 42] [G&R] Paoa Lit: Staff
              Land area on the west bank of the Kahana immediately below
              Wai-kaka waterfall [Gay 67] Pepeiao Lit: Ear Land area makai of
              Pulama-nui, west side of the Kahana [Gay 66] Pili-ā-mo`o Lit: To
              cling like a lizard (as on a cliff) Pool in the Kahana below Aluka
              cliff [Gay 65] Pilipili-a-haumaka, Lit: Glue of mother of pearl
              eyes Valley from the orange tree at Ke-apuapu [Gay 66] [G&R]
              Poha-kea Lit: White stone Pool and large stone in the Kahana below
              Hale-mokihana [Gay 67] Popoulu-nui Lit: Large popoulu bananas
              Ridge above Wai-kaka [Gay 67] [G&R] Pulama-nui Lit: Much cared for
              Valley makai of Ke-apuapu at pen [Gay 66] [G&R] Pu`u-kī Lit: Ti
              leaf hill Peak mauka of Kue-manu [Gay 66] Pu`u-o-kamali`i Lit:
              Children‘s hill Small round peak above Ka-hālau on the ridge to
              the west of the Kahana [Gay 66] Wai-a-kōloa Lit: Wild duck waters
              Waterfall of the Moku-one mauka of the junction with ‘O‘opu-lele
              [Gay 41] Wai-ānuenue Lit: Rainbow water Waterfall and stream [Geo]
              Wai-au Lit: Swirling water Stream [Geo] [PEM] [G&R] Wai-kaka Lit:
              Clear water Alt: Wai-kākā Smiting water Waterfall [Geo] [G&R] [Gay
              67] Ka-haiki Lit: The narrows Upper end of Pali-emo which branches
              from Ka-wai-halana as far as one can go on foot. Then one has to
              swim to get to the falls. Wild ducks were caught in this area.
              [Gay] Kahe-ka-wai Lit: Flowing water Upper part of saddle, mauka
              of Pali-opihi. Part of this area is known as Ka-lua-awai. Bird
              catchers used to camp in this saddle. [Gay] Ka-lā-lua-hakihaki
              Lit: Fragmented day for wrestling High point. This point was used
              to mark a turning in the land boundaries. This must be connected
              with Ka-lā-lua-nahelehele (cf) and Ka-la-lua-pu`u (Map 54) [Alex
              1900] Ka-lā-lua-nahelehele Lit: Weed covered day for wrestling
              Sharp peak [Gay] [Geo] Ka-lua-`āwai Lit: Platform hole Upperpart
              of saddle, mauka of Pali-opihi (cf. Kahe-ka-wai) [Gay] Ka-poki
              Lit: The shrine Peak used as a boundary point. [Alex 1900] Ke-`akū
              Lit: The aku lobelia Cave. [Geo] The `akū is and endemic lobelia
              (Cyanea-tritomantha). The leaves were cooked and eaten like
              cabbage. Ke-ala-a-ka-`opihi Lit: The road of the ‘opihi Steps cut
              into the cliff of Pali-opihi [Gay] Kū-ao-hū-kini Lit: Kū (of the)
              forty thousand swelling days Summit [Geo] Maka-`opihi Lit: Limpet
              eye Summit [Geo] Pā-lehua Lit: Lehua flower enclosure Summit, 4315
              feet [Geo] [PEM] Pali-`opihi Lit: ‘Opihi limpet cliff Cliff
              Pu`u-kī Lit: Hill where the ti plant grows Summit, hill. According
              to Gay, Pu`u-kī lies below and makai of Pu`u-lehua. The Geo map
              has them reversed. See Pua-ko-ki, Gay 14. [Gay] [Geo] Pu`u-lehua
              Lit: Hill where lehua trees grow Peak. According to Gay, this peak
              is sometimes called Pu-lehua. It was a land for birds. On the west
              side of the ridge, the birds belonged to Makaweli. On the
              south-east side, birds belonged to Manuahi and those on the
              northeast side belonged to Koula. All the birds of Olona-wehi (the
              ridge that comes up from the junction of Hauhili and Koula rivers,
              west of Kealomea) belonged to Manuahi down to Kuapo`o, and all the
              birds mauka of Olona-wehi and east of Keolomea belonged to Koula.
              [Gay] `Alae-pe`e-wale Lit: Hiding-mudhen Small cave at Kue-ka-la
              cliff [Gay 31] Hainā Lit: Cruelty Kula land opposite and mauka of
              Kua-kolekole on east side of Moku-one [Gay 31] Ilo LIt: Maggot
              Land area opposite Ka-`ili`ili and a little mauka of it [Gay 31]
              Kāhe`e-kā LIt: To-pour-out (like bailing water from a canoe)
              Spring and road on west side of Moku-one leading to Ka-unu-`enuhe
              [Gay 31] [G&R] Ka-ihu-iki LIt: Small-nosed Peak at foot of Kuha
              [Gay31] Ka-`ili`ili Lit: The-pebbles Land area on east side of
              Moku-one [Gay 31] Ka-loha Lit: The-droopy-one Lower part of
              Kahee-ka spring [Gay 31] Ka-`ohai Lit: The -`ohai-shrub Village a
              little mauka of Ka-umu-ko`o-loa on a flat place on the hillside
              [Gay 31] #The `ohai is a low shrub of the legume group.
              Ka-umu-ko`o-loa Lit: The-really-large-plover Watercourse north of
              Pu`u-o-maka-weli peak opposite land of Ka-`ili`ili [Gay 31]
              Kaunana-o-ka-lā Lit: Position-of-the-sun; Resting-place-of-the-sun
              Valley to the peak makai of the valley [Gay 31] [G&R]
              Ka-unu-`enuhe Lit: The-altar-of-the-caterpillar Heiau, on Mokihana
              ridge at 1550 foot elevation on the regular trail [Ben 41]
              Ke-ā-koa`e Lit: Ledge-for-tropic-birds Large cliff on west of
              Moku-one mauka of Wai-`awa`awa. [Gay 31] [G&R] Ke-ana-loa Lit:
              The-long-cave Large cave on the east side of Moku-one mauka of
              Wai-`awa`awa [Gay 31] [G&R] Kua-kolekole LIt: Raw-back Kula land
              on west of Moku-one mauka of Wai-`awa`awa [Gay 31] Kū`ē-ka-lā Lit:
              Opposed-to-the-sun Large cliff on east side of Moku-one opposite
              Ke-ā-koa`e just before Wai-`awa`awa [Gay 31] [G&R] Kuha Lit:
              Expectoration Land area opposite, mauka, and above Ilo [Gay 31]
              [G&R] Kukui-`ula Lit: Red-kukui-nut Spring makai of mouth of
              Wai-`awa`awa [Gay 31] [G&R] Kūnini Lit: Ridge (as of a precipice,
              steep, sheer) Gulch [Geo] Lewa-`ula Lit: Red-sky Heiau on Mokihana
              ridge on the main trail. [Ben 40] Mai-ka`a-loa Lit:
              Almost-rolled-away-entirely Cave above Kuha at the foot of the
              cliff [Gay 31] Mokihana Lit: Mokihana-plant (Pelea anisata) Valley
              and stream [Ben 39] [Geo] [PEM] Nā-hale-o-Ko`o Lit:
              The-houses-of-Ko`o Land section, 800 foot elevation. [PEM] [Geo]
              [Alex] #Who Ko`o was is unknown. Nihoa Lit: Toothed (serrated,
              notched) Gulch [Geo] None Lit: Tease Small cave makai and
              overlooking Ilo [Gay 31] Pe`a-moa Lit: Chicken-feather-stalk
              Valley [Geo] [PE] Pōhaku-ka`a Lit: Rolling-stone Stone in the
              Moku-one stream, east side of valley [Gay 31] Po`o-lolo-`ole Lit:
              Head-without-brains Land area and summit [Geo] [PEM] Pu`u-kī Lit:
              Ti-leaf-hill Hill, 1662 feet [Geo] Pu`u-o-maka-weli Lit:
              Hill-of-the-angry-eyed-one Sharp peak half way up the hill between
              Kaunana-o-ka-lā and Ka-umu-ko`o-loa [Gay 31] Wai-`awa`awa Lit:
              Bitter-waters; Sour-tasting-water Stream and valley on west of
              Moku-one [G&R] [Gay 31] Wai-pao-iki Lit: Little-scooped-water
              Gulch [Geo] [PEM] `A`aka Lit: Grumbling Ridge [Geo Hiki-lei Lit:
              Brought wreath Valley [Geo] Honua-`ula Lit: Red earth Valley [Geo]
              Ka-lua-ko`i Lit: The adze quarry Valley [Geo] Ka-unu-melemele Lit:
              The yellow altar Heiau. Located in Maka-weli on the ridge near the
              junction of Hiki-lei and Kuna-lele valleys. Thrum says ‘an open
              platform heiau in good condition.â€ [Ben 45] Kawelu Lit: A wind
              blown grass Valley [Geo] Kolo-kea Lit: Creeping white (mist)
              Valley [Geo] Kuna-lele Lit: Jumping fresh water eel Valley [Geo]
              Mahaikona Lit:? Valley [Geo] Mākū Lit: Maku (a native hibiscus)
              Gulch [Geo] Pā-pua`a Lit: Pig pen Valley and ridge [Geo] Po`o-pueo
              Lit: Owl‘s head Reservoir [Geo] Pu`u-lani, Lit: Sky mountain Alt:
              Pu`ua-lani, Strangling hill (Alex 1900) Hill, 1023 feet, in
              Makaweli ahupua`a [Geo] [PEM] Pu`u-pehu Lit: Swollen hill Summit
              [Geo] Wai-koli Lit: Castor Bean Plant Gulch [Geo] Huhu-akai Lit:
              Anger by the sea Heiau located on Wahulua bay, Wahi-awa [Ben 63]
              Kaikā-mahū Lit: Undisturbed taro patch` Land area at the head of
              Kukui-o-Kalena gulch [Gay] Ka-malama Lit: The light The western
              side of Pu`u-o-papai [Gay] Kau-makani Lit: Place (in) wind Land
              area [PEM] Ke-paha Lit: The improvised chant Intermittent stream
              flowing into the ocean to the east of Paweo point [G&R]
              Kukui-o-Kalena Lit: Torch of Kalena Valley east of Pu`upehu and
              west of Kahoni valley. It runs to Kaikamahu. Kalena means
              stretched out to dry, but here may be the name of a person.[Gay]
              Manienie-`ula Lit: Reddish grass Alt: Maniania-`ula, Red-lump
              (Gay) Ridge, volcanic pit, and flats mauka of it. [PEM] [Gay]
              [Geo] [G&R] One-olila, Lit: ? Beach west of Ke-ana-kua [G&R] Pua
              Lit: Flower Beach west of One-olila, east of Ke-paha stream [G&R]
              Pu`u-o-papa`i Lit: Crab's hill A volcanic cone, summit 481 feet
              [Geo] [Gay] [G&R] ‘A-lanalana Lit: Floating clinker lava Point
              between Paweo and Kaumakani point. [G&R] Anahulu Lit: Ten days
              Valley west of Kau-makani point. [Gay] [G&R] Hoaka Lit: The new
              moon, Crescent moon A wide rocky point between Kolea and Kaaiea.
              [Gay] [Geo] [PEM] [G&R] Hui-hau Lit: Interlacing hau trees Flat
              rocky place between Po‘o and Muliwai-palaoa. [Gay] [G&R]
              ‘Ilio-lalau Lit: Wandering dog Land and intermittent stream
              southeast of Ke-awa-au. [Gay] pG&R] Ka-aiea Lit: The aiea plant
              Intermittent stream to the west of Puolo point. [Gay] Ka-‘alalā
              Lit: The crow, Corvus tropicus Intermittent stream to the west of
              Ka-la-hu. [G&R] Ka-awa-nui Lit: The large harbor Village and gulch
              feeding into Mahina-uli. [Geo] [G&R] Ka-‘īlio-pā‘ia Lit: The
              fenced in dog Pond. This pond was named for a supernatural dog.
              [Gay 1] [G&R] Ka-lā-hu Lit: The day of the people Point west of
              Koki. [Gay] [G&R] Ka-lua-puhi Lit: The eel pit Point and pond at
              the south-eastern part of Mahina-‘ula. There is an eel-shaped rock
              in a cave in this area. [Gay] [PEM] [Geo] [G&R] Ka-mo‘o-‘īole Lit:
              The generations of rats Sand hills at Muliwai-palaoa. [Gay] [G&R]
              Kāne-hapu‘u Lit: Male tree fern Stream that flows into the ocean
              at Makaweli landing. [G&R] Ka-pa‘akai Lit: The salt Fish pond
              mauka of Ka-mo‘o-‘īole. [Gay] [G&R] Ka-pakohana Lit: The naked one
              (the name of a person) Land area ashore of Ka-unu-loa on the east
              bank of Kāne-hapu‘u stream. [G&R] Ka-pala-wai Lit: To daub with
              fresh water Land area. [Geo] Kapuai-o-Kapakohana Lit: Kapakohana‘s
              footprint Footprint in stone at the makai end of the stone wall
              under the pond. [Gay] Ka-puka-kohekohe Lit: The hole where
              kohekohe grass grows Pond between Ka-unu-loa and Pa-ka-lā. [Gay]
              Kau-makani Lit: Wind‘s resting place Point. [Gay] [Geo] [G&R]
              Ka-unu-loa Lit: The long shrine Landing place for canoes. [Gay]
              [G&R] *Offshore is a rock that was once a woman named Ou-lehelehe.
              Her brother was Kapakohana. He left his footprint in stone at
              Kapuai-o-Kapakohana. Ke-ana-wī Lit: The cave of the wi shell fish
              Cave in a cliff opposite the mouth of Ka-awa-loa. [Gay 6] [G&R]
              Ke-awa-au Lit: The harbor to swim in Point and landing place for
              canoes. [Gay] p[G&R] Ke-kupua, Lit: ? Kakupuaa (Alex 1900) Valley.
              Three heiau for human sacrifices were here: Ku-ana-lili,
              A‘a-kukui, and Ka-unu-loa. [Geo] p[PEM] [Alex 1900] Kikaha Lit:
              Sideways A sandy beach of Kekupua. [Gay] Koki Lit: Homely Cape.
              [Geo] [Gay] [G&R] Kōlea Lit: Plover Beach and valley between Koki
              and Hoaka. [Gay] [G&R] Kū-ka-nonu Lit: Kū the cheater Land area
              inland of Ka-pa‘akai. [G&R] Mahina-‘uli, Lit: Dark moon Alt:
              Mahenauli (Alex 1900) Alt: Mahina-ula [Gay] Long narrow valley
              opening to the sea where there is a good landing place. [Gay]
              [Geo] [Alex 1900] G&R] Muliwai-palaoa Lit: River of the whale
              tooth ivory The outlet of Kekupua river to the sea. [Gay] [G&R]
              Nā-lā‘au-o-ka-‘ele‘ele Lit: Trees of the black one Land area
              between Kuihau and Muliwai-palaoa. [Gay] Ou-lehelehe Lit:
              Protruding lips Rock off the land of Ka-unu-loa. She is the sister
              of Kapakohana. [Gay] Pae-lau Lit: Many landings Land area. [Gay]
              [G&R] Pā-ka-lā Lit: The sun shines Point at the west side of
              Mahina-‘uli harbor. [Gay] [G&R] [Geo] [[PEM] [Stau] Papa-hali‘i
              Lit: Spread out sheet Intermittent stream flowing into the ocean
              between A-lanalana and Kau-makani. [G&R] Pāweo Lit: To turn aside
              Cape. [Geo] [PEM] [G&R] Pō-kalakala Lit: Night of repentance and
              forgiveness Alt: Pōkalakala, The beach poppy Point on the western
              side of Mahina-‘uli. [Gay] [G&R] The beach poppy, Aragemone
              glauca, had white flowers. The Hawaiians used the yellow juice to
              relieve pain. Po‘o Lit: Head Point and beach on the Waimea side of
              the point; ancient surfing area. See Ka-iwi-o-Pele. [Geo] [Gay]
              [PEM] Ke kai kula‘i o Po‘o. The sea of Po‘o that knocks down men.
              The sea of Po‘o, Kauai, was said to be very rough. [Pukui 1726]
              Puka-iki Lit: Small hole Intermittent stream flowing into the
              ocean to the west of Paweo point. [G&R] Puna-keawe Lit: One who
              carries coral Land area inland from Ka-pakohana. [G&R] Puolo Lit:
              Bundle Point between Kau-makani and Hoaka points. [Gay] [G&R]
              Pu‘u-ha‘alulu Lit: Trembling hill Sand hill makai of cane fields
              at Kekupua. [Gay] Pu`u-o-papa`i Lit: Crab's hill A volcanic cone,
              summit 481 feet [Geo] [Gay] [G&R] ‘A‘a-kukui Lit: Kukui roots
              Heiau and gulch. [PEM] [Ben 44] [Stau] #The heiau was located at
              the east branch at Ke-kupua valley near the junction. Thrum says
              it was ‘a paved and walled heiau in good preservation.â€ PEM says
              it was a heiau for human sacrifice. Hīpō Lit: Purge night Flat on
              which Fort Elizabeth was built [Stau] Ho`ānuanu Lit: To cause
              cold; To make cold Ancient name for Maka-weli (qv) [PEM] [Stau]
              Ka-`awa-nui Lit: The large kava plant Reservoir [Geo] Ka-lae-loa
              Lit: The long headland Reservoir [Geo] Kāne-kula Lit: Dry lands
              man Summit [Geo] Māha`iha`i Lit: Brittle Heiau and land area on
              east side of Waimea river, about half a mile from the ocean. The
              heiau is now completely destroyed. Its location was determined
              from an old map made by Francis Gay. [Ben 43] #The missionary
              Samuel Whitney built his first home here. (Stau) Nana-i-ka-lani
              Lit: Look to heaven A small heiau. This was located above Wai-lele
              and mauka of the fort. [Gay] Wai-kāia Lit: Fast asleep water
              Reservoir [Geo] Wai-lele Lit: Leaping water Land area on east bank
              of the Waimea, makai of road [Gay 1] [G&R] Wai-pao Lit: Scooped
              water Valley [Geo] Wai-pao-iki Lit: Small scooped water Valley
              that runs to Nonopahu and is the east branch of Ke-kupua which
              runs to Ka-hale-honui. [Gay 10] [Geo] Ka-ū-pu`ua Lit: The choked
              teat Summit, 2863 feet [Geo] Ka-wai-papa Lit: The stratum stream
              Valley. There are many taro fields and house sites in this valley.
              It is well terraced where convenient though no great labor has
              been expended in irrigating the higher, though fertile lands. The
              terraces and the house sites on the edge of the valley are
              interesting as they show a fairly large population quite a ways
              inland. [Ben 46] [PEM] Ke-ana-`ihi`ihi Lit: The sacred cave
              Summit, cave, and cliff [Geo] [Gay 65] [G&R] Ke-`awe Lit: The
              knapsack Land area at the head of Ke-ana-`ihi`ihi cave [Gay 65]
              Kī-pale Lit: Ti leaf lining for a gourd oven Land area below
              Ke-ana-`ihi`ihi on east side of the Kahana [Gay 65] Kuna-lele Lit:
              Leaping fresh water eel Valley [Geo] [PEM] `Akia Lit: `Akia-tree
              Peak, 1816 feet, on ridge separating Moku-one and Maka-weli
              streams above Kaulu. In 1865, there was an `akia tree at the foot
              of the peak. The `akia was an endemic shrub and tree (Wikstroemia
              spp.) with small leaves, tiny yellowish flowers, and yellow to
              red, small, ovoid one-seeded fruits. The bark yields a fiber; the
              bark, roots, and leaves a narcotic used for fish poisoning. It was
              also used in `ana`ana sorcery. (PE iii) [Gay 64] [G&R] Ala-pi`i
              Pi`i‘s road; The way up Land area on west side of Moku-one. [Gay
              32] Pi`i was the kalaimoku, or chief councellor of Ola (c.f.
              Opae-pi`i and Kiki-a-Ola). Hali-`ōpae Lit: Fetched shrimp Land
              area in the Moku-one below `A`ali`i-nui on the north and Kihanau
              on the south. [Gay 32] This is perhaps a reference to the shrimp
              that were gathered to pay the Menehune for building the Kiki-a-Ola
              (qv) Haule-io-Kulu Lit: Fell on the night of Kulu Land area east
              bank of Moku-one opposite Kauaua [Gay 31] Hiki-lei Lit: Fetch lei
              Valley [Geo] [PEM] Ho`olono-i-ka-muki Lit: Listening to the
              sibilant sound Cave and land area mauka of Pa-hau on the flanks of
              Ke-ana-ihiihi, east side of the Kahana [Gay 65] Kaala Lit: ?
              Summit, 806 feet. This name demonstrates the extreme difficulty of
              translating place names in the absence of proper pronunciation.
              There are seven ways the dictionary enters this spelling: Kaala,
              ka`alā, kā`ala, kā`alā, ka-ala, ka-`ala, and ka-`alā. Each of them
              has an entirely different meaning. [Geo] [Gay 64] [G&R] Kahaiki
              Lit: Narrow Cliff on west side of Moku-one makai of Ha`alo [Gay
              32] Ka-hale-puolo Lit: House containing bundles House site on east
              bank of the Kahana between Lau-i`i and Moi-hala [Gay 65] Kahana
              Lit: Cutting Ka-hana the-work Valley [Geo] [PEM] Ka-hau-iki Lit:
              Little hau tree Land area at the head of Pōhaku-pu`upu`u, Kahana
              canyon [Gay 64] Kāhili-loa Lit: Tall kahili emblem Summit, 1847
              feet [Geo] [G&R] Kāhili-poko Lit: The short kahili emblem Peak,
              1640 feet, on ridge dividing Kahana and Olokele valleys [G&R] [Gay
              64] Kāhi`u-nui Lit: Great victory Land area between unnamed stream
              and Puka-o-kini. [Gay 32] A pule kāhi`u was a prayer for victory
              in battle. Kaholo-iki Lit: Little hasty one Valley mauka of
              Kaholo-nui on west side of Moku-one [Gay 32] Kaholo-nui Lit: Big
              hasty one Valley on west side of Moku-one mauka of Peleka-iki [Gay
              32] Kalakala-akua Lit: Bristling ghost Peak above Kumau on the
              west wall of the Kahana [Gay 65] Ka-lua-alaea Lit: Red earth pit
              Land area on west side of Ka-pueo-manu [Gay 64] Ka-lua-mo`o Lit:
              Lizard‘s pit Land area on east bank of the Kahana opposite
              Ka-ua-helu [Gay 64] Ka-lua-nui Lit: The big pit Land area on both
              sides of Moku-one river above Opae-pi`i on the east and below
              Pōhaku-pu`upu`u on west [Gay 32] Ka-lua-pua`a Lit: The pig pit
              Unspecified land area (name occurs on Gay‘s list between Maloeloe
              and Kaala) [Gay 64] Kama-e`a Lit: Risen child Valley mauka of
              Pa-hau on the east wall of Kahana [Gay 65] Ka-maka-uahi Lit: Smoke
              in the eyes Cattle pen on the west bank of the Kahana mauka of
              Pōhaku-pu`upu`u [Gay 64] Ka-makewai Lit: The thirst Cliff and land
              mauka of Mahu-o-Ola, west side of Moku-one [Gay 41] Kama-`oā Lit:
              Bereaved of children Intermittent stream flowing from Kaukelei
              into the Kahana, mauka of Pa-hau and of Pali-kea [G&R] Gay 64]
              Ka-`ōhia-iki Lit: The little ‘ōhia tree Land area just mauka of
              Kama-`oā, east side of the Kahana [Gay 64] Ka-pali-kū Lit: The
              sheer cliff Land area and cliff between Pali-kea and Kama-`oā,
              east side of the Kahana [Gay 64] Ka-po`o Lit: The head Cliff on
              east of Moku-one overlooking Opae-pi`i [Gay 32] Ka-pueo-manu Lit:
              The owl bird Land area of Alolohale (sic) at the mouth of Kahana
              [Gay 64] [G&R] Ka-pū-kani Lit: Musical conch shell Land area on
              east side of Ka-pueo-manu up Kahana [Gay 64] Ka-ua-helu Lit: Few
              showers Unspecified land area at ‘alea tree below Palikaoâ€, on
              west bank of the Kahana mauka of Wai-aloha [Gay 64] Kauaua Lit:
              Tough Stony kula land on west bank of Moku-0ne stream opposite
              Haule-io-kulu [Gay] Kaukelei Lit:? Summit [Geo] [G&R] Ka-ulu Lit:
              The breadfruit tree Stream flowing from the south side of `Akia
              into the Kahana. Also a houselot in the Wai-kaka kuleana mauka of
              Koele-lua valley, west side of Kahana [Gay 64] [G&R] Ka-wai-ū,
              Lit: The breast; The breast milk Valley [Geo] Ke-ana-paweo Lit:
              Cave of displeasure Land area and cave on east side of Moku-one
              [Gay 32] Ke-pani Lit: The covering Flat land area on ridge to
              south of Olokele and north of Hale-hau [G&R] Ke-pani Lit: The dike
              Reservoir [Geo] Kiha-nau Lit: Tedious ascent Saddle between
              Kaulana-peapea and `Akia; also road that leads up from Ka-pala-nui
              [Gay 41] [G&R] Ko`ele-lua Lit: Double rattling Valley from `Akia
              leading to Kahana stream [Gay 64] Kolo-kea Lit: Creeping white (
              mists); White creeper Valley [Gay] [Geo] [PEM] Kukui-lau-li`i Lit:
              Small leaved kukui tree Land area and cliff mauka of Ka-pueo-manu
              on west side of Kahana valley [Gay 64] Kukui-nui Lit: Big kukui
              tree Land area at the head of Ka-lua-mo`o, Kahana canyon [Gay 64]
              Kukui-pa`i-a`a Lit: Root system of the kukui tree Land area
              between Kaholo-iki and Kaha-iki [Gay 32] Kūmau Lit: Constancy Land
              area on the west bank of the Kahana makai of Pā-pua`a [Gay 65]
              Kū-`ōkala Lit: Standing goose flesh Peak, 1291 feet, on ridge
              separating Moku-one and Maka-weli streams [G&R] Kūpala-nui Lit:
              Standing gourd plant Cave and land area opposite the mouth of
              Ha`alo valley. [Gay 32] A kūpala may either be an endemic gourd,
              or a morning glory, or a sweet potato. They were eaten only in
              times of famine. Lau-i`i Lit: Tiny leaved Intermittent stream
              flowing from Kahili-loa into the Kahana [Gay 65] [G&R] Mahua-kuli
              Lit: A number of deaf mutes Land area on west side of Moku-one
              opposite Kapo`o cliff [Gay 32] Māhu-o-Ola Lit: Ola‘s stream Land
              area opposite and mauka of Hali-opae, west side of Moku-one [Gay
              41] Malo`elo`e Lit: Stiff Cave and cliff on east side of Kahana
              valley beneath Kaala peak [Gay 64] Manini Lit: ? Stream and
              valley, south side of Olokele opposite Kahiki-poko. 1. Surgeonfish
              2. Stingy (hoard like a miser) 3. Variety of cooking banana 4.
              variety of sugar cane 5. variety of dry land taro 6. variety of
              sweet potato 7. Wrath; anger 8. To pour; spill; irrigated [G&R]In
              the absence of the story behind the name, making a choice from the
              above eight possible meanings is impossible. Moea Lit: To press
              onward; To go straight ahead Peak, 1568 feet, on ridge on the
              south side of Olokele [G&R] Moi-hala Lit: ? Intermittent stream
              flowing from Kaukelei into the Kahana [Gay 65] [G&R] Moku-one Lit:
              Sandy area; sand island Valley and stream [Geo] Mo`o-pa-lahalaha
              Lit: Flat strip of land; Lizard- of the) broad platter Valley and
              land on west bank of the Moku-one mauka of Ha`alo stream [Gay 32]
              Nana-i-Ka`ula Lit: Look off at Ka`ula; Lookout to Ka`ula
              Unspecified spot where Ka`ula island is visible, on slopes of
              Kaala peak [Gay 64] Nono-pahu Lit: Perforated drum; Red drum Ridge
              [Geo] Nua-kea Lit: White trodden path Land area on east bank of
              the Moku-one opposite Kahaiki [Gay 32] Olokele Lit: Honeycreeper;
              To rub in mud Stream and canyon. There are the remains of many
              taro fields and house sites in the canyon. [Ben] [PEM] [Stau]
              Olokele is the Kaua`i name for the `i`iwi, an endangered bird
              species whose red feathers were highly prized for cloaks, leis,
              and helmets. `Ōpae-pi`i Lit: Climbing shrimp; Pi`i‘s shrimp Land
              area on east of Moku-one mauka of Haina (qv). [Gay 32] *Pi`i was
              the kālaimoku, chief counselor, of Ola who built the Kiki-a-Ola
              (qv) which was built by the Menehune. The price was one shrimp per
              Menehune. Pā-hau Lit: Enclosure of hau wood; Fence made of hau
              wood Intermittent stream flowing from Kaukelei into the Kahana,
              next valley mauka of Moi-hala. [G&R] Paka-ua Lit: Rain drops Cave
              in Ka-po`o cliff [Gay 32] Pali-kea Lit: White cliff Cliff opposite
              Ka-hau-iki on the east side of Kahana [Gay 64] Cliff and large
              land area on east side of Moku-one [Gay 41] Paoa Lit: Strongly
              odoriferous Peak above Ka-pueo-manu, makai of Kaala peak. [Gay 64]
              [G&R] *The staff which Pele, the volcano goddess, carried is
              spelled pā.oa. Note that Lohiau‘s kahuna was named Paoa, so this
              name is not to be confused with the Pele legend. Papa-`āina Lit:
              Flat land Land area makai of Wai-aloha on west bank of Kahana
              stream [Gay 64] Pā-pua`a Lit: Pig pen Land area on west bank of
              Kahana looking over to Kaukelei [Gay 65] [G&R] Peleka-iki Lit:
              Little bloated one Land area and cliff, intermittent stream, on
              west bank mauka of Puka-o-kini [Gay 64] [G&R] Peleka-nui Lit: Big
              bloated one Land area on east bank of the Moku-one opposite
              Peleka-iki [Gay 32] Pōhaku-pu`upu`u Lit: Lumpy rock Land area
              above Ka-lua-nui on the west side of Moku-one [Gay 32] Large stone
              and surrounding land area mauka of Ka-ua-helu on the west side of
              Kahana [Gay 64] Puka-lehua Lit: Lehua with a hole Land area above
              Manini and Uhilau on the ridge between Olokele and Nono-pahu [G&R]
              Puka-o-kini Lit: Innumerable holes Kula land area and wet land
              above Ala-pi`i on west side of Moku-one [Gay 32] [G&R]
              Pu`u-kapa-lei Lit: Hill of the tapa wreath Unspecified land area.
              Name occurs between Nuakea and Ka-ana-paweo indicating it is on
              the west side opposite of those two places [Gay 32] Uhi-lau Lit:
              Yam leaf Stream and valley, south side of Olokele, opposite
              Kahili-loa [G&R] Wahi-`awa Lit: Milk fish Stream entering Moku-one
              mauka of Paleka-iki [G&R] Wai-aloha Lit: Beloved water Cliff and
              land area at the foot of the cliff, west side of Kahana opposite
              Kaala [Gay 64] Wawa-nono-puha Lit: Sound of the red hollow log
              Land area east side of Moku-one stream opposite Puka-o-kini [Gay
              31] from the Māhele Records Hā-ki‘oa Lit: Sluice feeding fish
              stocking ponds ‘Ili fed by Pu‘u-lima auwai. Pali of same name.
              [3112] [6297] [6304] [6333] [6343] [6353] [9077] [9655] [9665]
              [9144] A ki‘oa was ‘a small pool for stocking fish spawn, such as
              mullet, milk fish, tenpounder, usually attached to longer ponds.â€
              One possible reading of this name in the Mahele records is
              Hā-heo-ala-Kawelo, Trail that caused Kawelo to pant. This could be
              a reference to Kawelo‘s search for the family of ‘Ai-kanaka.
              Ka-aha-kowali Lit: The cord of sweet potato vine Alt:
              Ka-eha-koali, ? Mo‘o. The pali of Ka‘ina-manu is on the west.
              Niupolina is mauka and Kaheihei is makai. [9077] [6581] Ka-hālau
              Lit: The shed Mo‘o beneath pali of same name. [9144] [6589]
              [6552-B] Ka-wai-lele Lit: The leaping water Lo‘i. [6589] Ka-heihei
              Lit: The footrace Mo‘o makai of Ka-aha-kowali. [9077] [6581]
              Ka-hue Lit: The gourd Lo‘i. [6333] Ka-hui Lit: The gathering Mo‘o
              bounded on three sides by Ka-pua-hola, with Ka-pael lo‘i on the
              east. Mauka, Kaohia, East: a lo‘i, Makai: Maoloha, a mo‘o, and
              West: Kāneakula, a pali. [6333] [6277] [6552] Ka‘ina-manu Lit:
              Bird snaring place A pali west of Ka-naele-luna mo‘o and
              Ka-aha-kowali. [6316] [9077] Ka-naele-lalo Lit: The lower swamp
              Mo‘o mauka of Kumuahane, with the pali Kaina-manu on the west of
              it. [6297] [6316] Ka-naele-luna Lit: The upper swamp Mo‘o bounded
              mauka by Kke-one-‘ula, east by Pu‘‘ulima ‘auwai, makai by
              Ka-naele-lalo, and west by Ka‘ina-manu pali. [6316] Ka-nai-niho
              Lit: Striving to obtain teeth Mo‘o. [6589] Kāne-akula Lit: Far
              away man Pali on the west side of Ka-heihei and Maoloha mo‘o.
              [3112] [6304] [6333] [6581] [6552] Kani-pu‘upu‘u Lit: Singing land
              shell Mo‘o. Keauwana is mauka and Ka-halu is makai.
              Ke-ala-ka-hālau pali is on the west. [6552-B] Ka-‘ōhi‘a Lit: The
              ‘ōhi‘a tree Mo‘o makai of Ka-heihei. [6552-B] [6581] [6552]
              Opu-weuweu Lit: ? Lo‘i. [6552-B] *Ka-paeli Lit: ? Lo‘i to the east
              of Ka-huii mo‘o. [6277] Kapahole Lit: ? Mo‘o with Maoloha mauka
              and the pali of Kāne-akula on the west. This mo‘o was fed by the
              auwai of Kepuahola. [3112] Ka-pua-hola Lit: The spreading,
              unfolding flower Mo‘o makai of Maoloha and Ka-hui.[3112] [6304]
              [6277] Ke-ala-ka-hala Lit: The road to the hālau Pali on the west
              side of Kuainiho. [6552-B] Ke-au-ana, or Keauwana Lit:? Mo‘o makai
              of Kuainiho. [6552-B] Ke-one-‘ula Lit: The red sand Mo‘o mauka of
              Ka-naele-luna. [6316] [9662] Kū‘ai-ihe Lit: Place to barter for
              spears Mo‘o with Opuweuweu mauka and Kū‘ai-iho makai. [3112]
              Kū‘ai-iho Lit: Place to barter for inner layers of white sleeping
              tapa Mo‘o makai of Kū‘ai-ihe. [3112] Kū‘ai-niho Lit: Place to
              barter for teeth Mo‘o makai of Kū‘ai-‘ohe. [6333] [6353] [6552-B]
              Kū‘ai-‘ohe Lit: Place to barter for bamboo Mo‘o bordered mauka by
              Ka-hui, east by Ka-hue lo‘i, makai by Kū‘ai--niho, and west by
              Kāne-akula. [6333] [6552-B] Kumuahane Lit: Alt: Kumuakāne,?
            </div>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <Footer />
    </div>
  </>
);
