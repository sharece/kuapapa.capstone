import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import wailua from "../../assets/wailuaforever.png";

//first para from home page second para from disclaimer footer
export const Disclaimer = () => (
  <>
    <Navbar />
    <div className="disclaimer-container">
      <div className="moku-title pt-20 text-3xl pb-6 p-10">
        Disclaimer about Kauaʻi Nui Kuapapa:
      </div>
      <div className="disclaimer-text">
        This project is not survey grade and is not checked for legal validity
        regarding personal land ownership or various claims. This project hss
        been developed for historical and archaeological purposes. The sole
        intention of this project is to document the historical record of
        Kauaʻi's place names, which in some cases has not been recorded in any
        any existing publication or mapping survey. The place name boundaries
        that make up Kauaʻi Nui Kuapapa correspond to several 18th and 19th
        century survey maps. The intent of this project is to represent three
        (3) periods in time with respect to moku and ahupua‘a borders—those time
        periods being the era of the reign of King Kaumuali‘i (circa 1778 to
        1824), the Kingdom of Kamehameha (1810 to 1893), and the Territory of
        Hawai‘i (1893 onwards), as opposed to the data sets regarding the same
        land areas that derive from the State of Hawai‘i or USGS, which describe
        present-day land areas. The orthography of place names was researched by
        this project's contributors from a variety of sources that can be found
        in the "Resources" section of this website. With regard to place names
        whose meanings are uncertain, the best educated guess was the basis for
        orthography. Note that the following symbols were appended to ahupua‘a
        names in cases where correct spellings for place names are in question:
        - pronunciation and meaning are uncertain - not found in any existing
        database, archive, written or published in any record regarding place
        names of Hawaiʻi
      </div>
      <div className="disclaimer-img">
        <img src={wailua} width="75%" alt="Opaeka'a falls" />
      </div>
      <div className="disclaimer-text">
        Disclaimer: There are no expressed warranties associated with the
        release of this information. Specifically, no warranty is made that the
        GIS data or any subsequent updates will be error free and no warranty is
        made regarding the positional or thematic accuracy of the GIS data. The
        GIS data and any features it depicts do not represent or confer any
        legal rights, privileges, benefits, boundaries or claims of any kind and
        have no implication for real estate, tax or political purposes. Nā Hōkū
        Welo, LLC and the County of Kaua‘i encourages users to report any
        discrepancies with regards to moku and ahupua‘a borders as represented
        in Kaua‘i Nui Kuapapa project.
      </div>
    </div>
    <Footer />
  </>
);
