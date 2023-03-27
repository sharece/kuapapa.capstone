import { Link } from "react-router-dom";
import ahumap from "../../assets/halelea-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import lumahaisign from "../../assets/ahu-signs/Halelea_lumahai.png";
import haleleasign from "../../assets/haleleabigsign.png";

export const Lumahai = () => (
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
          <div className="current-crumb">Lumaha'i</div>
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
            <img width="100%" src={lumahaisign} alt="lumahai road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Lumaha`i: A medicinal plant Alt: Lū-maha`i, Broken and scattered, like
        the waves Lumaha`i contains 3150 acres of land in a valley 9 miles long.
        It undoubtably had many lo`i in the ancient days, but only one claim was
        made during the Mahele in 1848, so the extent of agriculturally
        developed fields and population remain unknown. In 1935 most of it was
        used as ranch lands and, except far up in the valley, all evidence of
        Hawaiian farming is gone. Lumaha`i was famed for three groves of trees:
        the hau of Maihi, the ulu of Weli, and the hala of Mapuana.
        Ka-hala-o-mapuana was the sister of chief Aiwohikupuna. They lived about
        the year 1200, during the reign of Ka`ililauokekoa. The trees were noted
        for their red fruit, whereas the normal fruit is yellow. Kalena ka
        makani lawe pua hala `ai a ke kina`u. The Kalena is the wind that strews
        the pandanus fruit eaten by kina`u eels. [AA] The kina`u, a small white
        eel, ate the hala fruit and in turn were eaten themselves. Kalena means,
        as a verb, to stretch out tight. It was also the name of a lua stroke,
        one of the deadliest forms of martial arts in which no hold was barred
        and death was the outcome. On August 7, 1873, Charles R. Bishop, whose
        wife Bernice Pauahi had inherited the land from her hānai parent Abner
        Paki, formally submitted a Certificate of Boundary for this ahupua`a. It
        had been surveyed by James W. Gay. A small brown shell used for the lei
        pūpū was found only at Lumaha‘i. They were used to make hat bands in
        more modern times. [Akina]. Lumaha‘i contained areas of quicksand that
        trapped unwary travelers. The main road ran along the sea, around the
        point of Ho`ohila. The path around the point was hand made and replaced
        each time the waves washed it out. The sands are said to summer in
        Lumaha‘i and winter in Kalalau. Lumaha‘i, nowadays, is pronounced with
        the glotteral stop, but most native speakers say Lumahai, without the
        stop. This may be due to two reasons: the Kaua`i version of the
        glotteral stop is much softer than that used by Mary Pukui (the source
        for Samuel Elbert) who was from Ka`u on the Big Island. Another reason
        for the lack of a glotteral is "fast speech" where the speaker will not
        pronounce the glotteral as he speaks, assuming the listener knows what
        place he is talking about.
      </div>
      <Footer />
    </div>
  </>
);
