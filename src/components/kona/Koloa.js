import { Link } from "react-router-dom";
import koloabd from "../../assets/ahu-divisions/Koloa.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import konasign from "../../assets/ahu-signs/konasign.png";
import koloasign from "../../assets/ahu-signs/Kona_koloa.png";
export const Koloa = () => (
  <>
    <Navbar />
    <div className="ahu-elements">
      <div className="ahu-sign">
        <img width="100%" src={koloasign} alt="koloa road sign" />
      </div>
      <div className="ahu-map-and-sign">
        <div className="koloabd">
          <img src={koloabd} alt="koloa ahupuaa breakdown" />
        </div>
        <Link className="back-to-moku" to="/kona">
          <div className="moku-sign">
            <img src={konasign} alt="kona sign" />
          </div>
        </Link>
      </div>
    </div>
    <div className="ahu-text">
      An ahupua‘a of the Kona district. Kōloa was an ahupua‘a, one of the
      fifty-four land divisions of ancient days. It belonged to the Kona
      district. The ahupua‘a started at the top of Kahili, a peak of 3089 feet.
      Along the shore the eastern boundary point between Koloa and Weliweli was
      near today's Poipu Beach Park. On the west, the boundary point with Lāwa‘i
      was at Kukui-‘ula. There are three possible meanings of its name. First,
      the land may have been named after the native duck (Anas wuvilliana
      wyvilliana) that lived in the large lake Ka-lua-honu and in the marshes
      that covered much of the western area of this land. The koloa was not a
      migratory bird unlike the migratory ducks, koloa-mapu, the pin-tail duck,
      and the koloa-moha, the shoveler or spoonbill duck. There was also a now
      extinct three-foot high flightless duck that lived here whose skeletons
      have been found by archaeologists. Second, it is sometimes said that the
      ahupua‘a took its name from a steep rock on the east bank of Maulili pond
      in Waikomo stream, named Pali-o-Koloa, Cliff of Koloa, but there is no
      indication of who or what Koloa was. Third, it may mean Long sugar cane.
      Sugar cane was brought by the earliest settlers and planted in their
      gardens as a source of sugar. Sometimes the leaves were used for thatching
      houses. The Hawaiians had names for at least 40 varieties of sugar cane.
      The largest kō-loa grew up to 30 feet in height. The most common cane was
      a soft and large sized one. It was perhaps no accident that the first
      sugar plantation was established at Koloa. Aie o Koloa Is at Koloa A play
      on ko (drawn) and loa (long), drawn a long way under. Drunk. [Hyde] nā
      iliili o Kōloa the pebbles of Kōloa [Hyde]
    </div>
    <Footer />
  </>
);
