import { Link } from "react-router-dom";
import bc from "../../assets/boundary-certs-01.png";
import { Navbar } from "./Navbar";
export const BoundaryCert = () => (
  <>
    <Navbar />
    <div className="boundary-container">
      <div className="text-5xl">Kauaʻi Boundary Certificates</div>
      <div>
        The following resource data has contributed to the research used to help
        determine moku and ahupuaʻa boundary designation and location.
      </div>
      <div className="">
        The Kauai Boundary Commission data and viewable pdf documents include
        the records of commision of boundaries for the island of Kauai between
        the years of 1864 - 1901.
      </div>
      {/*  */}
      <div className="bc-sign-and-bcs flex">
        <img src={bc} alt="Kaua'i Boundry Certificates" />
        <div className="text-xs">
          Kauai Boundary Commission Vol 1, No 1. Hawaii State Archives
        </div>
        <div className="boundary-comm flex flex-col">
          <Link to="/BC_01_10_1_Lawai" className="bc" target="_blank"></Link>
          <Link to="/BC_02_01_Kealia" className="bc" target="_blank"></Link>
          <Link to="/BC_03_02_Kuiloa-Ili" className="bc" target="_blank"></Link>
          <Link to="/BC_04_03_Pilaa" className="bc" target="_blank"></Link>
          <Link to="/BC_05_04_Waipouli" className="bc" target="_blank"></Link>
          <Link to="/BC_06_05_Kapaa" className="bc" target="_blank"></Link>
          <Link to="/BC_07_07_Wailua" className="bc" target="_blank"></Link>
          <Link to="/BC_09_08_Kalaheo" className="bc" target="_blank"></Link>
          <Link to="/BC_10_09_Wahiawa" className="bc" target="_blank"></Link>
          <Link to="/BC_11_11_Lumahai" className="bc" target="_blank"></Link>
          <Link to="/BC_12_13_1_Waioli" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          <Link to="" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          <Link to="/" className="bc" target="_blank"></Link>
          {/*  */}
          <div className="bc-sign-and-bcs flex">
            <img src={bc} alt="Kaua'i Boundry Certificates" />
            Boundary Certificates. Department of Land and Natural Resources
          </div>
          <div className="boundary-cert flex flex-col">
            <Link to="/BC_01_10_1_Lawai" className="bc" target="_blank">
              Lawai
            </Link>
            <Link to="/BC_02_01_Kealia" className="bc" target="_blank">
              Kealia
            </Link>
            <Link to="/BC_03_02_Kuiloa-Ili" className="bc" target="_blank">
              Kuiloa-Ili
            </Link>
            <Link to="/BC_04_03_Pilaa" className="bc" target="_blank">
              Pilaa
            </Link>
            <Link to="/BC_05_04_Waipouli" className="bc" target="_blank">
              Waipouli
            </Link>
            <Link to="/BC_06_05_Kapaa" className="bc" target="_blank">
              Kapaa
            </Link>
            <Link to="/BC_07_07_Wailua" className="bc" target="_blank">
              Wailua
            </Link>
            <Link to="/BC_09_08_Kalaheo" className="bc" target="_blank">
              Kalaheo
            </Link>
            <Link to="/BC_10_09_Wahiawa" className="bc" target="_blank">
              Wahiawa
            </Link>
            <Link to="/BC_11_11_Lumahai" className="bc" target="_blank">
              Lumahai
            </Link>
            <Link to="/BC_12_13_1_Waioli" className="bc" target="_blank">
              Waioli
            </Link>
            <Link to="/BC_13_13_2_Waipaa" className="bc" target="_blank">
              Waipaa
            </Link>
            <Link to="/BC_14_14_Koula-Ili" className="bc" target="_blank">
              Koula-Ili"
            </Link>
            <Link to="/BC_15_15_Manuahi" className="bc" target="_blank">
              Manuahi
            </Link>
            <Link to="/BC_16_16_Eleele-Ili" className="bc" target="_blank">
              Eleele-Ili
            </Link>
            <Link to="/BC_17_17_Hanapepe" className="bc" target="_blank">
              Hanapepe
            </Link>
            <Link to="/BC_18_18_Hanalei" className="bc" target="_blank">
              Hanalei
            </Link>
            <Link to="/BC_19_30_Kahili" className="bc" target="_blank">
              Kahili
            </Link>
            <Link to="/BC_20_20_Anahola" className="bc" target="_blank">
              Anahola
            </Link>
            <Link to="/BC_21_19_Kamalomalo" className="bc" target="_blank">
              Kamalomalo
            </Link>
            <Link to="/BC_22_06_Olohena" className="bc" target="_blank">
              Olohena
            </Link>
            <Link to="/BC_23_21_Hanakapiai" className="bc" target="_blank">
              Hanakapiai
            </Link>
            <Link to="/BC_24_23_Pohakuau" className="bc" target="_blank">
              Pohakuau
            </Link>
            <Link to="/BC_25_24_Kalalau" className="bc" target="_blank">
              Kalalau
            </Link>
            <Link to="/BC_26_25_Honopu" className="bc" target="_blank">
              Honopu
            </Link>
            <Link to="BC_27_26_Wawapuhi" className="bc" target="_blank">
              Wawapuhi
            </Link>
            <Link to="/BC_28_27_Koloa" className="bc" target="_blank">
              Koloa
            </Link>
            <Link to="/BC_29_29_Kikiaola" className="bc" target="_blank">
              Kikiaola
            </Link>
            <Link to="/BC_30_28_Waimea" className="bc" target="_blank">
              Waimea
            </Link>
            <Link to="/BC_31_01_Kealia" className="bc" target="_blank">
              Kealia_31
            </Link>
            <Link
              to="/BC_32_31_Kalihi-Kai-Kalihi-Wai"
              className="bc"
              target="_blank"
            >
              Kalihi-Kai Kalihi-Wai
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);
