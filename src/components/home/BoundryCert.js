import React from "react";
import { Navbar } from "./Navbar";
import { Document } from "react-pdf";

// import SinglePagePDFViewer from "../pdf/single-page";
// import AllPagesPDFViewer from "../../pdf/all-pages";
// import pdf from "../pdf/BC_01_10_1_Lawai.pdf";
export const BoundryCert = () => (
  <>
    <Navbar />
    <div className="pt-20">
      <div>
        KAUAI BOUNDARY COMMISSION The Kauai Boundary Commission data and
        viewable pdf documents include the records of commision of boundaries
        for the island of Kauai between the years of 1864 - 1901.
      </div>
      <div className="bg-gray-800 text-white">
        {/* <SinglePagePDFViewer pdf={sampdf} /> */}
        {/* <AllPagesPDFViewer pdf={sampdf} /> */}
      </div>
      <div className="">
        The following resource data has contributed to the research used to help
        determine moku and ahupuaʻa boundary designation and location.
      </div>
      <div className="top">
        Puna-KealiaWaimea-KuiloaKoolau-PilaaPuna-WaipouliPuna-KapaaPuna-OlohenaPuna-WailuaKoloa-KalaheoKoloa-WahiawaKoloa-LawaiHanalei-LumahaiHanalei-WaipaaHanalei-WaioliWaimea-KoulaWaimea-ManuahiWaimea-EleeleWaimea-HanapepeHanalei-HanaleiKoolau-KamalomaloKoolau-AnaholaHanalei-HanakapiaiHanalei-HanakoaHanalei-PohakuauHanalei-KalalauHanalei-HonopuHanalei-WawapuhiKoloa-KoloaWaimea-WaimeaWaimea-KikiaolaKoolau-KahiliHalelea-Kalihi-Kai-Kalihi-Wai
      </div>
      <div className="bottom">
        BOUNDARY CERTIFICATES IN ISLAND OF KAUAI These original boundary
        certificates are viewable as PDF files.
        Halelea-Kalihi-Kai-Kalihi-WaiLawaiKealiaKuiloa-IliPilaaWaipouliKapaaWailuaLawaiKalaheoWahiawaLumahaiWaioliWaipaaKoula-IliManuahiEleele-IliHanapepeHanaleiKahiliAnaholaKamalomaloOlohenaHanakapiaiPohakuauKalalauHonopuWawapuhiKoloaKikiaolaWaimeaKealiaKalihi-Kai-Kalihi-Wai
      </div>
      <div className="pdfs text-red-500">
        <Document file="/kuapapa.capstone/public/pdf/BC_01_10_1_Lawai.pdf">
          pdf
        </Document>
      </div>
    </div>
  </>
);
