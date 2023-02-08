import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import ahumap from "../../assets/puna-bd.png";
import punasign from "../../assets/punasign.png";
import olohenasign from "../../assets/ahu-signs/Puna_olohena.png";
export const Olohena = () => (
  <>
    <Navbar />
    <div className="ahu-bg">
      <div className="ahu-elements">
        <div className="breadcrumb-menu pt-4 flex color-white">
          <Link className="crumb" to="/">
            Home
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <Link className="crumb" to="/puna">
            Puna
          </Link>
          <div className="breadcrumb-arrow">&gt;</div>
          <div className="current-crumb">`Olohena</div>
        </div>
        <div className="ahu-map-and-sign">
          <div className="ahu-map">
            <img src={ahumap} alt="Puna ahupuaa breakdown" />
          </div>
          <Link className="back-to-moku" to="/puna">
            <div className="moku-sign">
              <img src={punasign} alt="puna sign" />
            </div>
          </Link>
          <div className="ahu-sign">
            <img width="100%" src={olohenasign} alt="olohena road sign" />
          </div>
        </div>
      </div>
      <div className="ahu-text">
        `Olohena: Hill-(shaped)-like-buttocks; Rubbing-the-mon-veneris;
        Back-of-a-fish; Rolling-naked Ka-lama Lit: The-torch Stream rising from
        the watershed of Ka-puka-iki. It flows across the ahupuaâ€™a of Olohena.
        [Geo] [PEM] Ka-mo`o-ho`opulu Lit: The-wet-ridge; The-treacherous-lizard
        Ridge that is the boundary line between Olohena and Wailua.[And] [Geo]
        [PEM] #Ho`opulu means to deceive, to act treacherously, to get the
        advantage of one by deceit. Ka-unana-wa`a Lit: The tiny canoe Point on
        the seacoast used to mark the boundary between Wai-pouli and Olohena
        ahupua`a. [Alex 1900] Kikake Lit: ? Point on the seacoast used to mark
        the boundary between the Olohena and Wailua ahupua`a. [Alex 1900]
        Ka-`ea. Lit., the hawkbill turtle A place on the north side of Nounou,
        in Olohena ahupua`a. It is to the right and upwards from Kalakela.
        (Akina) This is the place where Palila had a banana grove. (Akina) An
        envoy from Kamehameha I to Kaumualii died at Wailua on his mission. He
        requested that he be buried on the ridge above his pace of death, hence
        the quote: Leave the bones of travelers at Ka‘ea. (Rev. Akina) Olohena
        Māhele Names Hō-lau Lit: To give a leaf Kula. [LCA 3831] Kuanea Lit:
        Barren `Ili bordered on the N = kahawai, E = aina "Waipouli", S = kula,
        W = kula of Hō-lau.[LCA 3831]
      </div>
      <Footer />
    </div>
  </>
);
