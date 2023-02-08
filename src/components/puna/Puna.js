import { Link } from "react-router-dom";
import { Navbar } from "../home/Navbar";
import { Footer } from "../home/Footer";
import punamap from "../../assets/puna-moku-map.png";
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
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
import { Dropdown } from "rsuite";

export const Puna = () => (
  <>
    <Navbar />
    <div className="moku-container">
      <div className="moku-title pb-4 text-7xl tracking-widest flex justify-center">
        Puna
      </div>
      <div className="moku-pic">
        <img src={mokupic} alt="menehune fish pond" />
      </div>
      <div className="img-cap flex justify-center text-xs">
        Menehune Fish Pond, Lihue
      </div>
      <div className="flex justify-center flex-col p-2">
        <div className="moku-map">
          <img width="100%" src={punamap} alt="puna map" />
        </div>
      </div>
      <div className="moku-text">
        <h1 className="p-2">Wailuanuiho‘āno</h1> (great, sacred spirit) is the
        full name of Wailua,{" "}
        <p className="p-2">
          the seat of government and religious center of the Kaua‘i Kingdom for
          centuries. The heiau, Holoholokū, near the bottom of Kuamo‘o Road was
          the birth place of the highest ranking ali‘i, acknowledged even by
          ali‘i of the other islands as possessing among the highest mana in the
          Hawaiian Islands.{" "}
        </p>
        <p className="p-2">
          It’s plant icon is the ‘ie‘ie, a thick vine that crawls up tall trees
          with long, thick aerial roots that had been manufactured into strong
          cordage to lash the posts of traditional Hawaiian houses. The name of
          the channel between Kaua‘i and O‘ahu is Ka‘ie‘iewaho (the ‘ie‘ie vine
          on the outside) and so this icon is a homage to Wailua’s position on
          Kaua‘i’s eastern shore.{" "}
        </p>
        <p className="p-2">
          The fish icon is moi, another favorite eating fish among locals, this
          name resembles, mō‘ī (monarch), indicating that Puna, with Wailua and
          Līhu‘e situated in the moku, is the government seat of Kaua‘i.{" "}
        </p>
        <p className="p-2">
          The color yellow is associated with royalty, as seen in ahu‘ula, the
          royal feather capes of Kaua‘i’s mō‘ī.
        </p>
      </div>
      <div className="learn-more flex justify-center text-lg">
        Learn more about Ahupua'a's in the Moku of Puna :
      </div>
      <div className="moku-moku-sign p-1">
        <img className="w-20" src={punasign} alt="puna road sign" />
      </div>
      <div className="ahu-dropdown text-xl">
        <div className="flex justify-center">
          <Dropdown title="Select an Ahupua'a">
            <DropdownItem>
              {" "}
              <Link className="ahu-link" to="/kipu">
                <img src={kipu} width="50%" alt="kipu road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link className="ahu-link" to="/haiku">
                <img src={haiku} width="50%" alt="haiku road rign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link className="ahu-link" to="/niumalu">
                <img src={niumalu} width="50%" alt="niumalu road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link className="ahu-link" to="/nawiliwili">
                <img src={nawiliwili} width="50%" alt="nawiliwii road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link className="ahu-link" to="/kalapaki">
                <img src={kalapaki} width="50%" alt="kalapaki road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link className="ahu-link" to="/hanamaulu">
                <img src={hanamaulu} width="50%" alt="hanamaulu road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              {" "}
              <Link className="ahu-link" to="/wailua">
                <img src={wailua} width="50%" alt="wailua road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link className="ahu-link" to="/olohena">
                <img src={olohena} width="50%" alt="olohena road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link className="ahu-link" to="/waipouli">
                <img src={waipouli} width="50%" alt="waipouli road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link className="ahu-link" to="/kapaa">
                <img src={kapaa} width="50%" alt="kapaa road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link className="ahu-link" to="/kealia">
                <img src={kealia} width="50%" alt="kealia road sign" />
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link className="ahu-link" to="/kamalomaloo">
                <img
                  src={kamalomaloo}
                  width="50%"
                  alt="kamalomaloo road sign"
                />
              </Link>
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
