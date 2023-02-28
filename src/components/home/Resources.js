import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import resourceimg from "../../assets/ahustones.png";

export const Resources = () => (
  <>
    <Navbar />
    <div className="resource-container">
      <div className="moku-title p-10 pt-20 flex justify-center text-3xl">
        BIBLIOGRAPHY
      </div>
      <div className="resource-text">
        Kaua‘i Nui Kuapapa: Talking About Our Island is a project developed by
        Nā Hōkū Welo Inc. , a consultant to the County of Kaua‘i, starting in
        2011. Although not survey grade, and not checked for legal validity, the
        boundaries correspond to several 18th and 19th century survey maps.
        <p className="">
          {" "}
          The intent of Kaua‘i Nui Kuapapa: Talking About Our Island is to
          represent three (3) periods in time with respect to moku and ahupua‘a
          borders—those time periods being the era of the reign of King
          Kaumuali‘i (circa 1778 to 1824), the Kingdom of Kamehameha (1810 to
          1893), and the Territory of Hawai‘i (1893 onwards), as opposed to
          following the latest data regarding the same that derive from the
          State of Hawai‘i or USGS, which attempt to describe present-day
          borders. The orthography of place names was researched by Nā Hōkū Welo
          Inc. With regards to place names whose meanings are uncertain, the
          best educated guess was the basis for orthography. Note that the
          following symbols were appended to ahupua‘a names in cases where
          correct spellings for place names are in question: * Pronunciation and
          meaning uncertain † Not found in Place Names of Hawai‘i ‡ No island
          reference found in Place Names of Hawai‘i NOTE: These land divisions
          are graphic representations compiled and organized by Nā Hōkū Welo
          LLC. from various sources and have not been checked against land
          survey records for legal validity.
        </p>
      </div>
      <div className="resource-img">
        <img src={resourceimg} width="75%" alt="kaua'i valley" />
      </div>
      <div className="resource-text">
        <p>
          {""}PROJECT SUPPORT FOR KAUA‘I NUI KUAPAPA:{""}
          <br></br> The project has so far enjoyed the warm support of Kaua‘i
          community organizations, private individuals, Kaua`i’s representative
          to the Office of Hawaiian Affairs, and the County of Kaua‘i. In
          particular, the following individuals and organizations are extended a
          tremendous mahalo for their support! The Garden Island Resource,
          Conservation and Development Inc. The Kaua‘i Historical Society
          Hawai‘i Tourism Authority Kaua‘i Visitors Bureau The County Council of
          the County of Kaua‘i The Office of Economic Development of the County
          of Kaua‘i Kaua‘i Museum Mayor Bernard Carvalho Trustee Dan Ahuna,
          Office of Hawaiian Affairs DataSpace Industries Pass-the-Projects Inc.
          Private individuals whose support means a whole lot
        </p>
        <p className="">
          Sources: Akina, Joseph. The Story of the Menehune People. .
          Unpublished holographic manuscript in Hawaiian, transcribed by Frances
          Frazier. In private collection; [Alex] original list of names sent by
          W. S. Alexander, official surveyor under the Republic of Hawai‘i and
          the Territory of Hawai‘i. This handwritten list was sent to
          Washington, D.C. In 1904 where it was copied but the copy never sent
          to Hawaii for correction. These names are found on the official list
          as well as on the maps themselves. This list can no longer be found;
          Andrews, Lorrin. A Dictionary of the Hawaiian Language; Beckwith, M.
          Hawaiian Mythology. Honolulu: University of Hawai‘i Press. 1970;
          Bennett, W.C. Archaeology of Kaua‘i. B.P. Bishop Museum Bull. 80,
          Millwood: Kraus. Reprint Co. 1976; Certificate of Boundary No.18,
          Bureau of Conveyances, State of Hawai‘i; Dickey, Lyle. Place Names of
          Halele‘a, Kaua‘i Museum Archives; Dickey, Lyle. String Figures;
          Emerson, Nathaniel B. Unwritten Literature of Hawaii - The sacred
          Songs of the Hula. Rutland, Vermont: Charles E. Tuttle Company.1964;
          Fornander, W.C. Fornander Collection of Hawaiian Antiquities and
          Folk-Lore. Bishop Mus. Memoirs, vols 4-6. Honolulu: Bishop Museum
          Press, 1916-20; Gay, Francis, Place Names of Kaua‘i, Bishop Museum,
          copy in Kaua‘i Museum; United States Department of Accounting maps of
          Kaua‘i; The Gay & Robinson map drawn in 1905; Gomez, Henry (personal
          communication, interviews in newspapers); Handy, E.S. Craighill and
          Elizabeth Green Handy. Native Planters in Old Hawai‘i; Thomas
          Hashimoto, personal communication; Kalama, Place Names, Hawaii State
          Archives; Henry Kekahuna, Notes, Hawai‘i State Archives; Kelsey,
          Theodore. Kaua‘i Place Names. Kelsey Collection, Archives of Hawai‘i;
          Kelsey, Theodore. Hanalei District; Knudsen, Eric. Teller of Tales;
          Luahiwa, Place Names, Hawai‘i State Archives; Luomala, Katherine,
          Whispers on the Wind; Maka, Jacob, (Personal communication); Rains of
          Kaua‘i, list that appeared in a Hawaiian newspaper Ka Na’i Aupuni,
          June 18-26, 1906, and translated by Mary Pukui, Bishop Museum
          Archives; Pukui, M.K. and S.H. Elbert. Hawaiian Dictionary. Honolulu:
          Univ. of Hawai‘i Press; Pukui , Mary Kawena, Samuel H. Elbert and
          Esther T. Mookini, Place Names of Hawaii, [PEM] Place Names of
          Hawai‘i. U. Of Hawaii University Press; Pukui, Mary, ‘Ōlelo No‘eau,
          Bishop Museum Press; Rice, W.H. Hawaiian Legends. B.P. Bishop Mus.
          Bull. 3. Millwood, NY: Kraus Reprint Co.,1971; Stillman, Charles,
          Place Names of Kaua‘i; from Ruby Scott; Thrum. Heiau of Hawaii,
          Hawaiian Almanac. 1907.
        </p>
      </div>
    </div>
    <Footer />
  </>
);
