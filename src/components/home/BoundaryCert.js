import { Link } from "react-router-dom";
import { Dropdown } from "rsuite";
import bc from "../../assets/boundary-certs-01.png";
import bcomm from "../../assets/boundary-commission-01.png";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const BoundaryCert = () => (
  <>
    <Navbar />
    <div className="boundary-container">
      <div className="top-boundary-text w-96 p-3">
        <div className="text-5xl p-3">Kauaʻi Boundary Certificates</div>
        <div className="p-1">
          The following resource data has contributed to the research used to
          help determine moku and ahupuaʻa boundary designation and location.
        </div>

        <div className="p-1">
          The Kauai Boundary Commission data and viewable pdf documents include
          the records of commision of boundaries for the island of Kauai between
          the years of 1864 - 1901.
        </div>
      </div>
      {/*  */}

      <div className="flex p-3">
        <img src={bcomm} alt="Kaua'i Boundry Certificates" />
      </div>
      <div className="dropdown1 flex justify-center p-8 text-lg">
        <Dropdown title="Kauai Boundary Commission Vol 1, No 1. Hawaii State Archives">
          <Dropdown.Item>
            <Link to="/COB_01_Puna-Kealia" className="bc" target="_blank">
              Puna-Kealia
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/COB_02_Waimea-Kuiloa" className="bc" target="_blank">
              Waimea-Kuiloa
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/COB_03_Koolau-Pilaa" className="bc" target="_blank">
              Koolau-Pilaa
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_04_Puna-Waipouli" className="bc" target="_blank">
              Puna-Waipouli
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_05_Puna-Kapaa" className="bc" target="_blank">
              Puna-Kapaa
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_06_Puna-Olohena" className="bc" target="_blank">
              Puna-Olohena
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_07_Puna-Wailua" className="bc" target="_blank">
              Puna-Wailua
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_08_Koloa-Kalaheo" className="bc" target="_blank">
              Koloa-Kalaheo
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_09_Koloa-Wahiawa" className="bc" target="_blank">
              Koloa-Wahiawa
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_10_Koloa-Lawai" className="bc" target="_blank">
              Koloa-Lawai
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_11_Hanalei-Lumahai" className="bc" target="_blank">
              Hanalei-Lumahai
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_12_Hanalei-Waipaa" className="bc" target="_blank">
              Hanalei-Waipaa
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_13_Hanalei-Waioli" className="bc" target="_blank">
              Hanalei-Waioli
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_14_Waimea-Koula" className="bc" target="_blank">
              Waimea-Koula
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_15_Waimea-Manuahi" className="bc" target="_blank">
              Waimea-Manuahi
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_17_Waimea-Hanapepe" className="bc" target="_blank">
              Waimea-Hanapepe
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_16_Waimea-Eleele" className="bc" target="_blank">
              Waimea-Eleele
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_18_Hanalei-Hanalei" className="bc" target="_blank">
              Hanalei-Hanalei
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_19_Koolau-Kamalomalo" className="bc" target="_blank">
              Koolau-Kamalomalo
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_20_Koolau-Anahola" className="bc" target="_blank">
              Koolau-Anahola
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link
              to="/COB_21_Hanalei-Hanakapiai"
              className="bc"
              target="_blank"
            >
              Hanalei-Hanakapiai
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_22_Hanalei-Hanakoa" className="bc" target="_blank">
              Hanalei-Hanakoa
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_23_Hanalei-Pohakuau" className="bc" target="_blank">
              Hanalei-Pohakuau
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_24_Hanalei-Kalalau" className="bc" target="_blank">
              Hanalei-Kalalau
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/COB_25_Hanalei-Honopu" className="bc" target="_blank">
              Hanalei-Honopu
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/COB_26_Hanalei-Wawapuhi" className="bc" target="_blank">
              Hanalei-Wawapuhi
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/COB_27_Koloa-Koloa" className="bc" target="_blank">
              Koloa-Koloa
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/COB_28_Waimea-Waimea" className="bc" target="_blank">
              Waimea-Waimea
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_29_Waimea-Kikiaola" className="bc" target="_blank">
              Waimea-Kikiaola
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/COB_30_Koolau-Kahili" className="bc" target="_blank">
              Koolau-Kahili
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link
              to="/COB_31_Halelea-Kalihi-Kai-Kalihi-Wai"
              className="bc"
              target="_blank"
            >
              Halelea-Kalihi-Kai-Kalihi-Wai
            </Link>
          </Dropdown.Item>
        </Dropdown>
      </div>

      {/*  */}
      <div className="p-3">
        <img src={bc} alt="Kaua'i Boundry Certificates" />
      </div>
      <div className="dropdown2 flex justify-center p-8 text-lg">
        <Dropdown title="Boundary Certificates. Department of Land and Natural Resources">
          <Dropdown.Item>
            <Link to="/BC_01_10_1_Lawai" className="bc" target="_blank">
              Lawai
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_02_01_Kealia" className="bc" target="_blank">
              Kealia
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_03_02_Kuiloa-Ili" className="bc" target="_blank">
              Kuiloa-Ili
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_04_03_Pilaa" className="bc" target="_blank">
              Pilaa
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_05_04_Waipouli" className="bc" target="_blank">
              Waipouli
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_06_05_Kapaa" className="bc" target="_blank">
              Kapaa
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_07_07_Wailua" className="bc" target="_blank">
              Wailua
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_09_08_Kalaheo" className="bc" target="_blank">
              Kalaheo
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_10_09_Wahiawa" className="bc" target="_blank">
              Wahiawa
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_11_11_Lumahai" className="bc" target="_blank">
              Lumahai
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_12_13_1_Waioli" className="bc" target="_blank">
              Waioli
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_13_13_2_Waipaa" className="bc" target="_blank">
              Waipaa
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_14_14_Koula-Ili" className="bc" target="_blank">
              Koula-Ili"
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_15_15_Manuahi" className="bc" target="_blank">
              Manuahi
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_16_16_Eleele-Ili" className="bc" target="_blank">
              Eleele-Ili
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_17_17_Hanapepe" className="bc" target="_blank">
              Hanapepe
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_18_18_Hanalei" className="bc" target="_blank">
              Hanalei
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_19_30_Kahili" className="bc" target="_blank">
              Kahili
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_20_20_Anahola" className="bc" target="_blank">
              Anahola
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_21_19_Kamalomalo" className="bc" target="_blank">
              Kamalomalo
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_22_06_Olohena" className="bc" target="_blank">
              Olohena
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_23_21_Hanakapiai" className="bc" target="_blank">
              Hanakapiai
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_24_23_Pohakuau" className="bc" target="_blank">
              Pohakuau
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_25_24_Kalalau" className="bc" target="_blank">
              Kalalau
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/BC_26_25_Honopu" className="bc" target="_blank">
              Honopu
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="BC_27_26_Wawapuhi" className="bc" target="_blank">
              Wawapuhi
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/BC_28_27_Koloa" className="bc" target="_blank">
              Koloa
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/BC_29_29_Kikiaola" className="bc" target="_blank">
              Kikiaola
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/BC_30_28_Waimea" className="bc" target="_blank">
              Waimea
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/BC_31_01_Kealia" className="bc" target="_blank">
              Kealia_31
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link
              to="/BC_32_31_Kalihi-Kai-Kalihi-Wai"
              className="bc"
              target="_blank"
            >
              Kalihi-Kai Kalihi-Wai
            </Link>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <Footer />
    </div>
  </>
);
