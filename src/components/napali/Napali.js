import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";

export const Napali = () => (
  //nav
  //banner
  //moku plaque
  //map
  //links to ahupuaas (6)
  <>
    <Navbar />
    <div className="moku-container">
      <h1 className="text-4xl">Napali</h1>
      <div className="img-container">
        {/* <img className="zoom map" src={zoompuna} alt="map" /> */}
      </div>
      <p>
        Nāpali’s plant is the olonā, a plant that grows straight whose stems are
        used to make among the strongest rope to come out of the Pacific through
        native ingenuity. Nineteenth-century western ships would often trade
        their own rope for olonā rope, including Capt. Cook himself, and Nāpali
        was one area where olonā plantations were once well known. This reminds
        us of potential industries that remain to be tapped on Kaua‘i,
        industries that Kaua‘i could be uniquely situated to spawn into a
        thriving industry. The fish (another i‘a in Hawaiian terms) is the honu,
        a creature whose story is one of near ecological disaster with an upturn
        in resurgence thanks to concerted efforts to stave off the collapse of
        its populations. A success story, the honu serves as an example of the
        potential for positive outcomes. As a well-loved seafood among native
        peoples of the Pacific, this resource, with proper lāhui management,
        could once again thrive as a food source. The color designated for
        Nāpali is the color of the sea on this coast, which is the brightest
        turquoise blue in the sunshine.
      </p>
    </div>
    <Footer />
  </>
);
