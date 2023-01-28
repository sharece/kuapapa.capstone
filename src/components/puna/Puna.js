import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import punamap from "../../assets/punamap.png";
import punasign from "../../assets/punasign.png";
import waipouli from "../../assets/ahu-signs/Puna_waipouli.png";
import kapaa from "../../assets/ahu-signs/Puna_kapaa.png";
import kealia from "../../assets/ahu-signs/Puna_kealia.png";
import kamalomaloo from "../../assets/ahu-signs/Puna_kamalomaloo.png";
import olohena from "../../assets/ahu-signs/Puna_olohena.png";
import wailua from "../../assets/ahu-signs/Puna_wailua.png";
import hanamaulu from "../../assets/ahu-signs/Puna_hanamaulu.png";
import kalapaki from "../../assets/ahu-signs/Puna_kalapaki.png";
import nawiliwili from "../../assets/ahu-signs/Puna_nawiliwili.png";
import niumalu from "../../assets/ahu-signs/Puna_niumalu.png";
import haiku from "../../assets/ahu-signs/Puna_haiku.png";
import kipu from "../../assets/ahu-signs/Puna_kipu.png";
import mokupic from "../../assets/moku-imgs/menehune.png";
export const Puna = () => (
  <>
    <Navbar />
    <div className="moku-container">
      <div className="moku-pic">
        <img src={mokupic} alt="menehune fish pond" />
      </div>
      <div className="flex justify-center flex-col p-2">
        <div className="flex">
          <div className="moku-sign p-1">
            <img className="w-10" src={punasign} alt="puna road sign" />
          </div>
          <h1 className="text-7xl tracking-widest">Puna</h1>
        </div>
        <div className="moku-map">
          <img width="100%" src={punamap} alt="puna map" />
        </div>
      </div>
      <div className="moku-text">
        <h1>Wailuanuiho‘āno</h1> (great, sacred spirit) is the full name of
        Wailua, the seat of government and religious center of the Kaua‘i
        Kingdom for centuries. The heiau, Holoholokū, near the bottom of Kuamo‘o
        Road was the birth place of the highest ranking ali‘i, acknowledged even
        by ali‘i of the other islands as possessing among the highest mana in
        the Hawaiian Islands. It’s plant icon is the ‘ie‘ie, a thick vine that
        crawls up tall trees with long, thick aerial roots that had been
        manufactured into strong cordage to lash the posts of traditional
        Hawaiian houses. The name of the channel between Kaua‘i and O‘ahu is
        Ka‘ie‘iewaho (the ‘ie‘ie vine on the outside) and so this icon is a
        homage to Wailua’s position on Kaua‘i’s eastern shore. The fish icon is
        moi, another favorite eating fish among locals, this name resembles,
        mō‘ī (monarch), indicating that Puna, with Wailua and Līhu‘e situated in
        the moku, is the government seat of Kaua‘i. The color yellow is
        associated with royalty, as seen in ahu‘ula, the royal feather capes of
        Kaua‘i’s mō‘ī.
      </div>
      <div className="learn-more text-2xl">
        Learn more about Ahupua'a's in the Moku of Puna
      </div>
      <div className="ahu-link-container">
        <Link className="ahu-link" to="/kipu">
          <img src={kipu} alt="kipu road sign" />
        </Link>
        <Link className="ahu-link" to="/haiku">
          <img src={haiku} alt="haiku road rign" />
        </Link>
        <Link className="ahu-link" to="/niumalu">
          <img src={niumalu} alt="niumalu road sign" />
        </Link>
        <Link className="ahu-link" to="/nawiliwili">
          <img src={nawiliwili} alt="nawiliwii road sign" />
        </Link>
        <Link className="ahu-link" to="/kalapaki">
          <img src={kalapaki} alt="kalapaki road sign" />
        </Link>
        <Link className="ahu-link" to="/hanamaulu">
          <img src={hanamaulu} alt="hanamaulu road sign" />
        </Link>
        <Link className="ahu-link" to="/wailua">
          <img src={wailua} alt="wailua road sign" />
        </Link>
        <Link className="ahu-link" to="/olohena">
          <img src={olohena} alt="olohena road sign" />
        </Link>
        <Link className="ahu-link" to="/waipouli">
          <img src={waipouli} alt="waipouli road sign" />
        </Link>
        <Link className="ahu-link" to="/kapaa">
          <img src={kapaa} alt="kapaa road sign" />
        </Link>
        <Link className="ahu-link" to="/kealia">
          <img src={kealia} alt="kealia road sign" />
        </Link>
        <Link className="ahu-link" to="/kamalomaloo">
          <img src={kamalomaloo} alt="kamalomaloo road sign" />
        </Link>
      </div>
    </div>
    <Footer />
  </>
);
