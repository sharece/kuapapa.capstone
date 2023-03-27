import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import "./index.css";
import { Resources } from "./components/home/Resources";
import { MayorMsg } from "./components/home/MayorMsg";
import { BoundaryCert } from "./components/home/BoundaryCert";
import { Niihau } from "./components/niihau/Niihau";
import { Kona } from "./components/kona/Kona";
import { Puna } from "./components/puna/Puna";
import { Koolau } from "./components/koolau/Koolau";
import { Halelea } from "./components/halelea/Halelea";
import { Kalihikai } from "./components/halelea/Kalihikai";
import { Kalihiwai } from "./components/halelea/Kalihiwai";
import { Hanalei } from "./components/halelea/Hanalei";
import { Waioli } from "./components/halelea/Waioli";
import { Waikoko } from "./components/halelea/Waikoko";
import { Waipa } from "./components/halelea/Waipa";
import { Lumahai } from "./components/halelea/Lumahai";
import { Wainiha } from "./components/halelea/Wainiha";
import { Haena } from "./components/halelea/Haena";
import { Napali } from "./components/napali/Napali";
import { Hanakapiai } from "./components/napali/Hanakapiai";
import { Hanakoa } from "./components/napali/Hanakoa";
import { Pohakuau } from "./components/napali/Pohakuau";
import { Kalalau } from "./components/napali/Kalalau";
import { Honopu } from "./components/napali/Honopu";
import { Awaawapuhi } from "./components/napali/Awaawapuhi";
import { HomePage } from "./components/home/HomePage";
import { Disclaimer } from "./components/home/Disclaimer";
import { Kipu } from "./components/puna/Kipu";
import { Haiku } from "./components/puna/Haiku";
import { Niumalu } from "./components/puna/Niumalu";
import { Nawiliwili } from "./components/puna/Nawiliwili";
import { Kalapaki } from "./components/puna/Kalapaki";
import { Hanamaulu } from "./components/puna/Hanamaulu";
import { Wailua } from "./components/puna/Wailua";
import { Olohena } from "./components/puna/Olohena";
import { Waipouli } from "./components/puna/Waipouli";
import { Kapaa } from "./components/puna/Kapaa";
import { Kealia } from "./components/puna/Kealia";
import { Kamalomaloo } from "./components/puna/Kamalomaloo";
import { Mana } from "./components/kona/Mana";
import { Waimea } from "./components/kona/Waimea";
import { Makaweli } from "./components/kona/Makaweli";
import { Hanapepe } from "./components/kona/Hanapepe";
import { Wahiawa } from "./components/kona/Wahiawa";
import { Kalaheo } from "./components/kona/Kalaheo";
import { Lawai } from "./components/kona/Lawai";
import { Koloa } from "./components/kona/Koloa";
import { Weliweli } from "./components/kona/WeliWeli";
import { Paa } from "./components/kona/Paa";
import { Mahaulepu } from "./components/kona/Mahaulepu";
import { Anahola } from "./components/koolau/Anahola";
import { Aliomanu } from "./components/koolau/Aliomanu";
import { Papaa } from "./components/koolau/Papaa";
import { Moloaa } from "./components/koolau/Moloaa";
import { Kaakaaniu } from "./components/koolau/Kaakaaniu";
import { Lepeuli } from "./components/koolau/Lepeuli";
import { Waipake } from "./components/koolau/Waipake";
import { Pilaa } from "./components/koolau/Pilaa";
import { Waiakalua } from "./components/koolau/Waiakalua";
import { Kahili } from "./components/koolau/Kahili";
import { Kilauea } from "./components/koolau/Kilauea";
import { Namahana } from "./components/koolau/Namahana";

import { BCLawai } from "./components/boundries/BCLawai";
import { BCKalihi } from "./components/boundries/BCKalihi";
import { BCKealia1 } from "./components/boundries/BCKealia1";
import { BCKealia2 } from "./components/boundries/BCKealia2";
import { BCKuiloa } from "./components/boundries/BCKuiloa";
import { BCWaimea } from "./components/boundries/BCWaimea";
import { BCKikiaola } from "./components/boundries/BCKikiaola";
import { BCKoloa } from "./components/boundries/BCKoloa";
import { BCWawapuhi } from "./components/boundries/BCWawapuhi";
import { BCHonopu } from "./components/boundries/BCHonopu";
import { BCKalalau } from "./components/boundries/BCKalalau";
import { BCPohakuau } from "./components/boundries/BCPohakuau";
import { BCHanakapiai } from "./components/boundries/BCHanakapiai";
import { BCOlohena } from "./components/boundries/BCOlohena";
import { BCKamalomalo } from "./components/boundries/BCKamalomalo";
import { BCAnahola } from "./components/boundries/BCAnahola";
import { BCManuahi } from "./components/boundries/BCManuahi";
import { BCEleele } from "./components/boundries/BCEleele";
import { BCHanapepe } from "./components/boundries/BCHanapepe";
import { BCKoula } from "./components/boundries/BCKoula";
import { BCWahiawa } from "./components/boundries/BCWahiawa";
import { BCKalaheo } from "./components/boundries/BCKalaheo";
import { BCWaipaa } from "./components/boundries/BCWaipaa";
import { BCWailua } from "./components/boundries/BCWailua";
import { BCKapaa } from "./components/boundries/BCKapaa";
import { BCKahili } from "./components/boundries/BCKahili";
import { BCPilaa } from "./components/boundries/BCPilaa";
import { BCHanalei } from "./components/boundries/BCHanalei";
import { BCWaioli } from "./components/boundries/BCWaioli";
import { BCWaipouli } from "./components/boundries/BCWaipouli";
import { BCLumahai } from "./components/boundries/BCLumahai";

import { PunaKealia } from "./components/boundries/PunaKealia";
import { WaimeaKuiloa } from "./components/boundries/WaimeaKuiloa";
import { KoolauPilaa } from "./components/boundries/KoolauPilaa";
import { PunaWaipouli } from "./components/boundries/PunaWaipouli";
import { PunaKapaa } from "./components/boundries/PunaKapaa";
import { PunaOlohena } from "./components/boundries/PunaOlohena";
import { PunaWailua } from "./components/boundries/PunaWailua";
import { KoloaKalaheo } from "./components/boundries/KoloaKalaheo";
import { KoloaWahiawa } from "./components/boundries/KoloaWahiawa";
import { KoloaLawai } from "./components/boundries/KoloaLawai";
import { HanaleiLumahai } from "./components/boundries/HanaleiLumahai";
import { HanaleiWaipaa } from "./components/boundries/HanaleiWaipaa";
import { HanaleiWaioli } from "./components/boundries/HanaleiWaioli";
import { WaimeaKoula } from "./components/boundries/WaimeaKoula";
import { WaimeaManuahi } from "./components/boundries/WaimeaManuahi";
import { WaimeaHanapepe } from "./components/boundries/WaimeaHanapepe";
import { WaimeaEleele } from "./components/boundries/WaimeaEleele";
import { HanaleiHanalei } from "./components/boundries/HanaleiHanalei";
import { KoolauAnahola } from "./components/boundries/KoolauAnahola";
import { KoolauKamalomalo } from "./components/boundries/KoolauKamalomaloo";
import { HanaleiHanakapiai } from "./components/boundries/HanaleiHanakapiai";
import { HanaleiHanakoa } from "./components/boundries/HanaleiHanakoa";
import { HanaleiPohakuau } from "./components/boundries/HanaleiPohakuau";
import { HanaleiKalalau } from "./components/boundries/HanaleiKalalau";
import { HanaleiHonopu } from "./components/boundries/HanaleiHonopu";
import { HanaleiWawapuhi } from "./components/boundries/HanaleiWawapuhi";
import { KoloaKoloa } from "./components/boundries/KoloaKoloa";
import { WaimeaWaimea } from "./components/boundries/WaimeaWaimea";
import { WaimeaKikiaola } from "./components/boundries/WaimeaKikiaola";
import { KoolauKahili } from "./components/boundries/KoolauKahili";
import { HaleleaKalihiKaiKalihiWai } from "./components/boundries/HaleleaKalihiKaiKalihiWai";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/mayor-message" element={<MayorMsg />} />
        <Route path="/boundary-certificates" element={<BoundaryCert />} />
        <Route path="/niihau" element={<Niihau />} />
        <Route path="/kona" element={<Kona />} />
        <Route path="/puna" element={<Puna />} />
        <Route path="/kipu" element={<Kipu />} />
        <Route path="/haiku" element={<Haiku />} />
        <Route path="/niumalu" element={<Niumalu />} />
        <Route path="/nawiliwili" element={<Nawiliwili />} />
        <Route path="/kalapaki" element={<Kalapaki />} />
        <Route path="/hanamaulu" element={<Hanamaulu />} />
        <Route path="/wailua" element={<Wailua />} />
        <Route path="/olohena" element={<Olohena />} />
        <Route path="/waipouli" element={<Waipouli />} />
        <Route path="/kapaa" element={<Kapaa />} />
        <Route path="/kealia" element={<Kealia />} />
        <Route path="/kamalomaloo" element={<Kamalomaloo />} />
        <Route path="/koolau" element={<Koolau />} />
        <Route path="/halelea" element={<Halelea />} />
        <Route path="/kalihikai" element={<Kalihikai />} />
        <Route path="/kalihiwai" element={<Kalihiwai />} />
        <Route path="/hanalei" element={<Hanalei />} />
        <Route path="/waioli" element={<Waioli />} />
        <Route path="/waikoko" element={<Waikoko />} />
        <Route path="/waipa" element={<Waipa />} />
        <Route path="/lumahai" element={<Lumahai />} />
        <Route path="/wainiha" element={<Wainiha />} />
        <Route path="/haena" element={<Haena />} />
        <Route path="/napali" element={<Napali />} />
        <Route path="/mana" element={<Mana />} />
        <Route path="/waimea" element={<Waimea />} />
        <Route path="/makaweli" element={<Makaweli />} />
        <Route path="/hanapepe" element={<Hanapepe />} />
        <Route path="/wahiawa" element={<Wahiawa />} />
        <Route path="/kalaheo" element={<Kalaheo />} />
        <Route path="/lawai" element={<Lawai />} />
        <Route path="/koloa" element={<Koloa />} />
        <Route path="/weliweli" element={<Weliweli />} />
        <Route path="/paa" element={<Paa />} />
        <Route path="/mahaulepu" element={<Mahaulepu />} />
        <Route path="/anahola" element={<Anahola />} />
        <Route path="/aliomanu" element={<Aliomanu />} />
        <Route path="/papaa" element={<Papaa />} />
        <Route path="/moloaa" element={<Moloaa />} />
        <Route path="/kaakaaniu" element={<Kaakaaniu />} />
        <Route path="/lepeuli" element={<Lepeuli />} />
        <Route path="/waipake" element={<Waipake />} />
        <Route path="/pilaa" element={<Pilaa />} />
        <Route path="/waiakalua" element={<Waiakalua />} />
        <Route path="/kahili" element={<Kahili />} />
        <Route path="/kilauea" element={<Kilauea />} />
        <Route path="/namahana" element={<Namahana />} />
        <Route path="/awaawapuhi" element={<Awaawapuhi />} />
        <Route path="/hanakapiai" element={<Hanakapiai />} />
        <Route path="/hanakoa" element={<Hanakoa />} />
        <Route path="/pohakuau" element={<Pohakuau />} />
        <Route path="/kalalau" element={<Kalalau />} />
        <Route path="/honopu" element={<Honopu />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        {/* 31 boundry comm ,? boundry cert */}
        <Route path="/BC_01_10_1_Lawai" element={<BCLawai />} />
        <Route path="/BC_02_01_Kealia" element={<BCKealia1 />} />
        <Route path="/BC_03_02_Kuiloa-Ili" element={<BCKuiloa />} />
        <Route path="/BC_04_03_Pilaa" element={<BCPilaa />} />
        <Route path="/BC_05_04_Waipouli" element={<BCWaipouli />} />
        <Route path="/BC_06_05_Kapaa" element={<BCKapaa />} />
        <Route path="/BC_07_07_Wailua" element={<BCWailua />} />
        <Route path="/BC_09_08_Kalaheo" element={<BCKalaheo />} />
        <Route path="/BC_10_09_Wahiawa" element={<BCWahiawa />} />
        <Route path="/BC_11_11_Lumahai" element={<BCLumahai />} />
        <Route path="/BC_12_13_1_Waioli" element={<BCWaioli />} />
        <Route path="/BC_13_13_2_Waipaa" element={<BCWaipaa />} />
        <Route path="/BC_14_14_Koula-Ili" element={<BCKoula />} />
        <Route path="/BC_15_15_Manuahi" element={<BCManuahi />} />
        <Route path="/BC_16_16_Eleele-Ili" element={<BCEleele />} />
        <Route path="/BC_17_17_Hanapepe" element={<BCHanapepe />} />
        <Route path="/BC_18_18_Hanalei" element={<BCHanalei />} />
        <Route path="/BC_19_30_Kahili" element={<BCKahili />} />
        <Route path="/BC_20_20_Anahola" element={<BCAnahola />} />
        <Route path="/BC_21_19_Kamalomalo" element={<BCKamalomalo />} />
        <Route path="/BC_22_06_Olohena" element={<BCOlohena />} />
        <Route path="/BC_23_21_Hanakapiai" element={<BCHanakapiai />} />
        <Route path="/BC_24_23_Pohakuau" element={<BCPohakuau />} />
        <Route path="/BC_25_24_Kalalau" element={<BCKalalau />} />
        <Route path="/BC_26_25_Honopu" element={<BCHonopu />} />
        <Route path="/BC_27_26_Wawapuhi" element={<BCWawapuhi />} />
        <Route path="/BC_28_27_Koloa" element={<BCKoloa />} />
        <Route path="/BC_29_29_Kikiaola" element={<BCKikiaola />} />
        <Route path="/BC_30_28_Waimea" element={<BCWaimea />} />
        <Route path="/BC_31_01_Kealia" element={<BCKealia2 />} />
        <Route path="/BC_32_31_Kalihi-Kai-Kalihi-Wai" element={<BCKalihi />} />

        <Route path="/COB_01_Puna-Kealia" element={<PunaKealia />} />
        <Route path="/COB_02_Waimea-Kuiloa" element={<WaimeaKuiloa />} />
        <Route path="/COB_03_Koolau-Pilaa" element={<KoolauPilaa />} />
        <Route path="/COB_04_Puna-Waipouli" element={<PunaWaipouli />} />
        <Route path="/COB_05_Puna-Kapaa" element={<PunaKapaa />} />
        <Route path="/COB_06_Puna-Olohena" element={<PunaOlohena />} />
        <Route path="/COB_07_Puna-Wailua" element={<PunaWailua />} />
        <Route path="/COB_08_Koloa-Kalaheo" element={<KoloaKalaheo />} />
        <Route path="/COB_09_Koloa-Wahiawa" element={<KoloaWahiawa />} />
        <Route path="/COB_10_Koloa-Lawai" element={<KoloaLawai />} />
        <Route path="/COB_11_Hanalei-Lumahai" element={<HanaleiLumahai />} />
        <Route path="/COB_12_Hanalei-Waipaa" element={<HanaleiWaipaa />} />
        <Route path="/COB_13_Hanalei-Waioli" element={<HanaleiWaioli />} />
        <Route path="/COB_14_Waimea-Koula" element={<WaimeaKoula />} />
        <Route path="/COB_15_Waimea-Manuahi" element={<WaimeaManuahi />} />
        <Route path="/COB_17_Waimea-Hanapepe" element={<WaimeaHanapepe />} />
        <Route path="/COB_16_Waimea-Eleele" element={<WaimeaEleele />} />
        <Route path="/COB_18_Hanalei-Hanalei" element={<HanaleiHanalei />} />
        <Route
          path="/COB_19_Koolau-Kamalomalo"
          element={<KoolauKamalomalo />}
        />
        <Route path="/COB_20_Koolau-Anahola" element={<KoolauAnahola />} />
        <Route
          path="/COB_21_Hanalei-Hanakapiai"
          element={<HanaleiHanakapiai />}
        />
        <Route path="/COB_22_Hanalei-Hanakoa" element={<HanaleiHanakoa />} />
        <Route path="/COB_23_Hanalei-Pohakuau" element={<HanaleiPohakuau />} />
        <Route path="/COB_24_Hanalei-Kalalau" element={<HanaleiKalalau />} />
        <Route path="/COB_25_Hanalei-Honopu" element={<HanaleiHonopu />} />
        <Route path="/COB_26_Hanalei-Wawapuhi" element={<HanaleiWawapuhi />} />
        <Route path="/COB_27_Koloa-Koloa" element={<KoloaKoloa />} />
        <Route path="/COB_28_Waimea-Waimea" element={<WaimeaWaimea />} />
        <Route path="/COB_29_Waimea-Kikiaola" element={<WaimeaKikiaola />} />
        <Route path="/COB_30_Koolau-Kahili" element={<KoolauKahili />} />
        <Route
          path="/COB_31_Halelea-Kalihi-Kai-Kalihi-Wai"
          element={<HaleleaKalihiKaiKalihiWai />}
        />
      </Routes>
    </div>
  );
}
export default App;
