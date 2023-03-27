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
        <div className="pb-3">
          Kaua‘i Nui Kuapapa: Talking About Our Island is a project developed by
          Nā Hōkū Welo Inc. , a consultant to the County of Kaua‘i, starting in
          2011.
        </div>
        <div className="pb-4">
          Although not survey grade, and not checked for legal validity, the
          boundaries correspond to several 18th and 19th century survey maps.
        </div>

        <div className="pb-3">
          The intent of Kaua‘i Nui Kuapapa: Talking About Our Island is to
          represent three (3) periods in time with respect to moku and ahupua‘a
          borders—those time periods being the era of the reign of King
          Kaumuali‘i (circa 1778 to 1824), the Kingdom of Kamehameha (1810 to
          1893), and the Territory of Hawai‘i (1893 onwards), as opposed to
          following the latest data regarding the same that derive from the
          State of Hawai‘i or USGS, which attempt to describe present-day
          borders.
        </div>
        <div className="pb-4">
          <b>PROJECT SUPPORT FOR KAUA‘I NUI KUAPAPA:</b> The project has so far
          enjoyed the warm support of Kaua‘i community organizations, private
          individuals, Kaua`i’s representative to the Office of Hawaiian
          Affairs, and the County of Kaua‘i. In particular, the following
          individuals and organizations are extended a tremendous mahalo for
          their support!
          <ul className="pb-4">
            <li>
              {" "}
              The Garden Island Resource, Conservation and Development Inc.
            </li>
            <li> The Kaua‘i Historical Society</li>
            <li> Hawai‘i Tourism Authority</li>
            <li>Kaua‘i Visitors Bureau</li>
            <li>The County Council of the County of Kaua‘i</li>
            <li>The Office of Economic Development of the County of Kaua‘i</li>
            <li> Kaua‘i Museum</li>
            <li> Mayor Bernard Carvalho</li>
            <li> Trustee Dan Ahuna, Office of Hawaiian Affairs</li>
            <li>DataSpace Industries</li>
            <li>Pass-the-Projects Inc.</li>
            <li> Private individuals whose support means a whole lot</li>
          </ul>
          <div className="pb-4">
            The orthography of place names was researched by Nā Hōkū Welo Inc.
            With regards to place names whose meanings are uncertain, the best
            educated guess was the basis for orthography. Note that the
            following symbols were appended to ahupua‘a names in cases where
            correct spellings for place names are in question:
            <ul>
              <li>* Pronunciation and meaning uncertain</li>
              <li> † Not found in Place Names of Hawai‘i</li>
              <li> ‡ No island reference found in Place Names of Hawai‘i</li>
            </ul>
            <div className="pb-4">
              NOTE: These land divisions are graphic representations compiled
              and organized by Nā Hōkū Welo LLC. from various sources and have
              not been checked against land survey records for legal validity.
            </div>
          </div>
        </div>
        <div className="resource-img pb-8">
          <img src={resourceimg} width="75%" alt="kaua'i valley" />
        </div>
        <b> Sources:</b>
        <ul>
          <li>
            {" "}
            Akina, Joseph. The Story of the Menehune People. . Unpublished
            holographic manuscript in Hawaiian, transcribed by Frances Frazier.
            In private collection;
          </li>
          <li>
            {" "}
            [Alex] original list of names sent by W. S. Alexander, official
            surveyor under the Republic of Hawai‘i and the Territory of Hawai‘i.
            This handwritten list was sent to Washington, D.C. In 1904 where it
            was copied but the copy never sent to Hawaii for correction. These
            names are found on the official list as well as on the maps
            themselves. This list can no longer be found;
          </li>
          <li> Andrews, Lorrin. A Dictionary of the Hawaiian Language;</li>
          <li>
            {" "}
            Beckwith, M. Hawaiian Mythology. Honolulu: University of Hawai‘i
            Press. 1970;
          </li>
          <li>
            {" "}
            Bennett, W.C. Archaeology of Kaua‘i. B.P. Bishop Museum Bull. 80,
            Millwood: Kraus. Reprint Co. 1976;
          </li>
          <li>
            {" "}
            Certificate of Boundary No.18, Bureau of Conveyances, State of
            Hawai‘i;
          </li>
          <li>
            {" "}
            Dickey, Lyle. Place Names of Halele‘a, Kaua‘i Museum Archives;
          </li>
          <li>Dickey, Lyle. String Figures;</li>
          <li>
            Emerson, Nathaniel B. Unwritten Literature of Hawaii - The sacred
            Songs of the Hula. Rutland, Vermont: Charles E. Tuttle Company.1964;
          </li>
          <li>
            {" "}
            Fornander, W.C. Fornander Collection of Hawaiian Antiquities and
            Folk-Lore. Bishop Mus. Memoirs, vols 4-6. Honolulu: Bishop Museum
            Press, 1916-20;
          </li>
          <li>
            {" "}
            Gay, Francis, Place Names of Kaua‘i, Bishop Museum, copy in Kaua‘i
            Museum;
          </li>
          <li> United States Department of Accounting maps of Kaua‘i;</li>
          <li> The Gay & Robinson map drawn in 1905;</li>
          <li>
            {" "}
            Gomez, Henry (personal communication, interviews in newspapers);
          </li>
          <li>
            {" "}
            Handy, E.S. Craighill and Elizabeth Green Handy. Native Planters in
            Old Hawai‘i;
          </li>
          <li>
            Thomas Hashimoto, personal communication; Kalama, Place Names,
            Hawaii State Archives;
          </li>
          <li> Henry Kekahuna, Notes, Hawai‘i State Archives;</li>
          <li>
            {" "}
            Kelsey, Theodore. Kaua‘i Place Names. Kelsey Collection, Archives of
            Hawai‘i;
          </li>
          <li>Kelsey, Theodore. Hanalei District;</li>
          <li> Knudsen, Eric. Teller of Tales;</li>
          <li>Luahiwa, Place Names, Hawai‘i State Archives;</li>
          <li> Luomala, Katherine, Whispers on the Wind;</li>
          <li> Maka, Jacob, (Personal communication);</li>
          <li>
            {" "}
            Rains of Kaua‘i, list that appeared in a Hawaiian newspaper Ka Na’i
            Aupuni, June 18-26, 1906, and translated by Mary Pukui, Bishop
            Museum Archives;
          </li>
          <li>
            Pukui, M.K. and S.H. Elbert. Hawaiian Dictionary. Honolulu: Univ. of
            Hawai‘i Press;
          </li>
          <li>
            {" "}
            Pukui , Mary Kawena, Samuel H. Elbert and Esther T. Mookini, Place
            Names of Hawaii, [PEM] Place Names of Hawai‘i. U. Of Hawaii
            University Press; Pukui, Mary, ‘Ōlelo No‘eau, Bishop Museum Press;
          </li>
          <li>
            {" "}
            Rice, W.H. Hawaiian Legends. B.P. Bishop Mus. Bull. 3. Millwood, NY:
            Kraus Reprint Co.,1971;
          </li>
          <li>
            Stillman, Charles, Place Names of Kaua‘i; from Ruby Scott;
          </li>{" "}
          <li> Thrum. Heiau of Hawaii, Hawaiian Almanac. 1907.</li>
        </ul>
      </div>
    </div>
    <Footer />
  </>
);
