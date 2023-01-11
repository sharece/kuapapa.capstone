import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";

export const Niihau = () => (
  //nav
  //banner
  //moku plaque
  //map
  //title
  //text content
  <>
    <Navbar />
    <div className="moku-container">
      <h1 className="text-4xl">Ni'ihau</h1>
      <div className="img-container">
        {/* <img className="zoom map" src={zoompuna} alt="map" /> */}
      </div>
      <p>
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
