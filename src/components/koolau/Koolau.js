import { Link } from "react-router-dom";
import { Footer } from "../home/Footer";
import { Navbar } from "../home/Navbar";
import koolaubd from "../../assets/ahu-divisions/koolaubd.png";
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
export const Koolau = () => (
  <>
    <Navbar />
    <div className="moku-container">
      <div className="pb-4 text-7xl tracking-widest flex justify-center">
        Ko'olau
      </div>
      <div className="moku-pic">
        <img src={mokupic} alt="koolau moku pic" />
      </div>
      <div className="flex justify-center flex-col p-2">
        <div className="flex"></div>
        <div className="moku-map">
          <img width="100%" src={koolaubd} alt="koolau map" />
        </div>
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
      <div className="learn-more text-2xl">
        Learn more about Ahupua'a's in the Moku of Ko'olau :
      </div>
      <div className="moku-sign p-1">
        <img className="w-20" src={koolausign} alt="koolau road sign" />
      </div>
      <div className="ahu-link-container">
        <div className="ahu-link-col-1">
          <Link className="ahu-link" to="/anahola">
            <img src={anahola} alt="anahola road sign" />
          </Link>
          <Link className="ahu-link" to="/aliomanu">
            <img src={aliomanu} alt="alimanu road sign" />
          </Link>
          <Link className="ahu-link" to="/papaa">
            <img src={papaa} alt="papaa road sign" />
          </Link>
          <Link className="ahu-link" to="/moloaa">
            <img src={moloaa} alt="moloaa road sign" />
          </Link>
          <Link className="ahu-link" to="/kaakaaniu">
            <img src={kaakaaniu} alt="kaakaaniu road sign" />
          </Link>
          <Link className="ahu-link" to="/lepeuli">
            <img src={lepeuli} alt="lepeuli road sign" />
          </Link>
        </div>
        <div className="ahu-link-col-2">
          <Link className="ahu-link" to="/waipake">
            <img src={waipake} alt="waipake road sign" />
          </Link>
          <Link className="ahu-link" to="/pilaa">
            <img src={pilaa} alt="pilaa road sign" />
          </Link>
          <Link className="ahu-link" to="/waiakalua">
            <img src={waiakalua} alt="waiakalua road sign" />
          </Link>
          <Link className="ahu-link" to="/kahili road sign">
            <img src={kahili} alt="kahili road sign" />
          </Link>
          <Link className="ahu-link" to="/kilauea">
            <img src={kilauea} alt="kilauea road sign" />
          </Link>
          <Link className="ahu-link" to="/namahana">
            <img src={namahana} alt="namahana road sign" />
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
