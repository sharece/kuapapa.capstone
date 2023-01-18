import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import kilaueabd from "../../assets/ahu-divisions/Kilauea.png";
import { Footer } from "../home/Footer";
import koolausign from "../../assets/ahu-signs/koolausign.png";
import kilaueasign from "../../assets/ahu-signs/Koolau_kilauea.png";

export const Kilauea = () => (
  <>
    <Navbar />
    <div className="ahu-elements">
      <div className="ahu-sign">
        <img width="100%" src={kilaueasign} alt="kilauea road sign" />
      </div>
      <div className="ahu-map-and-sign">
        <div className="kilaueabd">
          <img src={kilaueabd} alt="kilauea ahupuaa breakdown" />
        </div>
        <Link className="back-to-moku" to="/koolau">
          <div className="moku-sign">
            <img src={koolausign} alt="koolau sign" />
          </div>
        </Link>
      </div>
    </div>
    <div className="ahu-text">
      Kīlauea: Spewing, much spreading An ahupua‘a of the Ko‘olau district. To
      the east lies Kahili ahupua‘a and to the west lies Kalihiwai in the
      district of Halele‘a. There are few lo‘i (irrigated taro fields) in this
      ahupua‘a because most of the arable land is far above streams. There are
      three long ‘auwai (irrigation ditches) far inland, so ancient that legends
      say that they are the claw marks of a mo‘o (dragon or lizard). The land
      would have grown sweet potatoes and gourds. From the plains, before the
      days of sugar cane, three large stones stood on the slopes of the crater.
      These were once three sisters named Kalama, Pua and Lāhela. They were
      turned to stone by the goddess of the volcano, Pele, as she sought a home
      for herself and her lover Lohi‘au. At this place she came upon these
      girls. They were so beautiful that Pele became jealous, fearful that
      Lohi‘au would see them and fall in love with them. So she turned them to
      stone and from then on never went back because "the sooner she gets out of
      their sight, the better she feels". (Juliette Ferreira, Kamehameha School
      for Girls, Martha Beckwith contest, 1938)
    </div>
    <Footer />
  </>
);
