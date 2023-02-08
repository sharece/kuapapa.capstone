import { Link } from "react-router-dom";
import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";
import koolaubd from "../../assets/koolau-moku-map.png";
import koolausign from "../../assets/ahu-signs/koolausign.png";
import aliomanu from "../../assets/ahu-signs/Koolau_aliomanu.png";
import anahola from "../../assets/ahu-signs/Koolau_anahola.png";
import kaakaaniu from "../../assets/ahu-signs/Koolau_kaakaaniu.png";
import lepeuli from "../../assets/ahu-signs/Koolau_lepeuli.png";
import moloaa from "../../assets/ahu-signs/Koolau_moloaa.png";
import namahana from "../../assets/ahu-signs/Koolau_namahana.png";
import papaa from "../../assets/ahu-signs/Koolau_papaa.png";
import pilaa from "../../assets/ahu-signs/Koolau_pilaa.png";
import waiakalua from "../../assets/ahu-signs/Koolau_waiakalua.png";
import waipake from "../../assets/ahu-signs/Koolau_waipake.png";
import kilauea from "../../assets/ahu-signs/Koolau_kilauea.png";
import kahili from "../../assets/ahu-signs/Koolau_kahili.png";
import mokupic from "../../assets/moku-imgs/koolauimg.png";
import { Dropdown } from "rsuite";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";

export const Koolau = () => (
  <>
    <Navbar />
    <div className="moku-container">
      <div className="moku-title pb-4 text-7xl tracking-widest flex justify-center">
        Ko‘olau{" "}
      </div>
      <div className="moku-pic">
        <img src={mokupic} alt="koolau moku pic" />
      </div>
      <div className="img-cap flex justify-center text-xs">Ko‘olau, Kaua‘i</div>
      <div className="moku-map">
        <img src={koolaubd} alt="koolau map" />
      </div>
      <div className="moku-text">
        <p className="p-2">
          Ko‘olau’s plant icon is the flower of the koko‘olau (also known as
          ko‘oko‘olau). It is easy to see why this plant would be chosen for
          this moku by simply noticing it’s name, but koko‘olau is a widely used
          medicinal plant. It is made into tea and has medicinal properties and
          is used in a variety of ways for healing. This is a very useful plant
          that through ingenuity hundreds of years ago became highly valued.
          Referred to as an i‘a (fish) in Hawaiian, the ula, or spiny lobster,
          is highly prized as food. It’s delicate life and spawning cycle should
          remind us about the need for self control and proper management of
          natural resources around the island through lāhui, or temporary
          restriction periods.
        </p>
        <p className="p-2">
          {" "}
          The color is a cross between red (‘ula‘ula, like the name of this
          fish) and purple, Kaua‘i’s designated color since the late 1940s.
        </p>
      </div>
      <div className="learn-more flex justify-center text-lg">
        Learn more about Ahupua'a's in the Moku of Ko‘olau :
      </div>
      <div className="moku-moku-sign">
        <img className="w-20" src={koolausign} alt="koolau road sign" />
      </div>
      <div className="ahu-dropdown text-xl">
        <div className="flex justify-center text-lrg">
          <Dropdown title="Select an Ahupua'a">
            <Dropdown.Item>
              {" "}
              <Link className="ahu-link" to="/anahola">
                {/* Anahola */}
                <img src={anahola} width="50%" alt="anahola road sign" />
              </Link>
            </Dropdown.Item>
            <DropdownItem>
              <Link className="ahu-link" to="/aliomanu">
                {/* Aliomanu */}
                <img src={aliomanu} width="50%" alt="alimanu road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link className="ahu-link" to="/papaa">
                {/* Papa'a */}
                <img src={papaa} width="50%" alt="papaa road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              {" "}
              <Link className="ahu-link" to="/moloaa">
                {/* Moloa'a */}
                <img src={moloaa} width="50%" alt="moloaa road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              {" "}
              <Link className="ahu-link" to="/kaakaaniu">
                {/* ka'aka'aniu */}
                <img src={kaakaaniu} width="50%" alt="kaakaaniu road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              {" "}
              <Link className="ahu-link" to="/lepeuli">
                {/* Lepeuli */}
                <img src={lepeuli} width="50%" alt="lepeuli road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              {" "}
              <Link className="ahu-link" to="/waipake">
                {/* Waipake */}
                <img src={waipake} width="50%" alt="waipake road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              {" "}
              <Link className="ahu-link" to="/pilaa">
                {/* Pila'a */}
                <img src={pilaa} width="50%" alt="pilaa road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              {" "}
              <Link className="ahu-link" to="/waiakalua">
                {/* Waiakalua */}
                <img src={waiakalua} width="50%" alt="waiakalua road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              {" "}
              <Link className="ahu-link" to="/kahili road sign">
                {/* Kahili */}
                <img src={kahili} width="50%" alt="kahili road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              {" "}
              <Link className="ahu-link" to="/kilauea">
                {/* Kilauea */}
                <img src={kilauea} width="50%" alt="kilauea road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              {" "}
              <Link className="ahu-link" to="/namahana">
                {/* Namahana */}
                <img src={namahana} width="50%" alt="namahana road sign" />
              </Link>
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
