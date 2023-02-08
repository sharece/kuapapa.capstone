import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import ahumap from "../../assets/koolau-bd.png";
import { Footer } from "../home/Footer";
import koolausign from "../../assets/ahu-signs/koolausign.png";
import waipakesign from "../../assets/ahu-signs/Koolau_waipake.png";

export const Waipake = () => (
  <>
    <Navbar />
    <div className="ahu-bg">
      <div className="ahu-elements">
        <div className="breadcrumb-menu pt-14 flex color-white">
          <Link className="crumb" to="/">
            Home
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <Link className="crumb" to="/koolau">
            Ko'olau
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <div className="current-crumb">Waipakē</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="Ko'olau ahupuaa breakdown" />
          </div>
          <Link className="back-to-moku" to="/koolau">
            <div className="moku-sign">
              <img src={koolausign} alt="koolau sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={waipakesign} alt="waipake road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        Waipakē: Brittle water Waipakē is an ahupua`a of the Ko`olau district,
        situated on the broad plains between Lepeuli and Pila`a. It has an
        excellent reef and extensive upland country suitable for dry-land
        farming. It is cut off from the mountains by Lepeuli ahupua`a, which
        borders on the south and east sides. Pila`a lies on the west. Wherever
        the land could be irrigated, taro was grown. There is no steadily
        flowing stream fed from the mountains but a series of springs supplied
        the necessary water Noni, a plant grown for dye and medicine, grew in
        the uplands, as well as the edible and bitter, bottle gourds. Small
        gourds, emptied and dried, were used as food and water receptacles while
        bitter gourds provided calabashes large enough for clothing and net
        storage. In 1848, at the time of the Māhele, there were ten claims made
        for 9 1/4 acres of taro fieldsand irrigated farm lands. The remainder of
        the land, 697 acres, was claimed by the konohiki chief, Narole. *The
        story concerning the naming of this ahupua`a concerns two women pounding
        poi. The poi of the first one made a popping sound, pakē, whenever it
        was mixed or stirred. The second woman teased the first and sat down to
        pound some poi. But her poi too was pakē, and the ahupua`a was named
        Wai-pakē after these two.
      </div>
      <Footer />
    </div>
  </>
);
