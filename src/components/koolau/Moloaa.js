import { Link } from "react-router-dom";
import ahumap from "../../assets/koolau-bd.png";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import moloaasign from "../../assets/ahu-signs/Koolau_moloaa.png";
import koolausign from "../../assets/ahu-signs/koolausign.png";

export const Moloaa = () => (
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
          <div className="current-crumb">Moloa'a</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="Ko'olau breakdown" />
          </div>
          <Link className="back-to-moku" to="/koolau">
            <div className="moku-sign">
              <img src={koolausign} alt="Ko'olau sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={moloaasign} alt="moloaa road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Moloa`a : Tangled-root Alt: Moloa`a , Tied-up-canoes; Anchored-canoes
        "Moloa`a had a good stream which watered many terraces along its three
        mile course toward the sea. A half mile of relatively flat land inland
        from its bay was all terraced beautifully. Near the shore the soil
        consists of sand mixed with humus, which makes it ideal for sweet
        potatoes. There were still a few old breadfruit trees there in 1935.
        Upstream, where there used to be a lo`i, all is now dry, owing to the
        stripping of timber from the land and to grazing cattle." [Handy] #In
        passing Molo-a’a, Keahi (a native of Kaua`i) pointed to some low hills
        mauka and makai of the highway and said, "When I was a small girl, I
        used to come here with my tutu-wahine for wauke. These hills, now
        barren, were once so thickly overgrown that the a’a (roots) of the wauke
        were molo (matted) together, weaving into each other like the meshes of
        a mat . . . This was once a great wauke growing place . . . Molo-a’a,
        Matted-roots" (Mary P. Pukui, as quoted in Handy, p. 422) #Moloa`a is
        famed for the quality of its limu kohu (edible seaweed). There were
        three types distinguished on this reef: limu kohu (Supreme-seaweed,
        Asparagopsis taxiformus, which is red in color), kohu lïpehe
        (light-colored-kohu), and kohu koko (dark-red-kohu). *The limu kohu was
        brought here from South Kohala on the island of Hawai`i by a chief of
        that place. The limu was placed under kapu and strictly reserved for the
        use of the ali`i nui. [Aly Christian]
      </div>
      <Footer />
    </div>
  </>
);
