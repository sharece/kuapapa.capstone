import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";
import niihau from "../../assets/niihau-zoom.png";
import niihausign from "../../assets/niihausign.png";

export const Niihau = () => (
  <>
    <Navbar />
    <div className="moku-container">
      <h1 className="moku-title pb-4 text-7xl tracking-widest flex justify-center">
        Ni‘ihau
      </h1>
      <div className="flex justify-center p-4">
        <div className="flex justify-center">
          <div className="img-container">
            <img className="niihau" src={niihau} alt="niihau" />
          </div>
          <div className="moku-sign">
            <img src={niihausign} alt="Ni'ihau sign" />
          </div>
        </div>
      </div>
      <p className="moku-text">
        Ni‘ihau: The whole island plus Ka‘ula and Lehua ‘Uala (sweet potato) is
        a staple in the native diet. This plant embodies the deeply rooted
        nature of the people of Ni‘ihau as people of the earth. Still a
        well-loved food on the island, Ni‘ihau was famous from centuries ago as
        a place where ‘uala was found growing profusely there. The plant is
        entirely edible and also has medicinal properties. The fish of Ni‘ihau
        is ‘opihi, as like ‘uala, it clings to the earth tightly like the people
        of the island cling to their heritage, their language, and their
        traditions and are resilient like the hard shell of this i‘a. The color
        is an earthy tan, which signifies connectedness to the land like the
        ‘uala and ‘opihi.
      </p>
    </div>
    <Footer />
  </>
);
