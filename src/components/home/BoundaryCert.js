import { Link } from "react-router-dom";
import { useState } from "react";
import { Dropdown } from "rsuite";
import bc from "../../assets/boundary-certs-01.png";
import bcomm from "../../assets/boundary-commission-01.png";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PdfViewer } from "../boundries/pdfviewer";
import bclawai from "../../pdf/BC_01_10_1_Lawai.pdf";
import bckapaa from "../../pdf/BC_06_05_Kapaa.pdf";

export const BoundaryCert = () => {
  const [pdfUrl, setPdfUrl] = useState();
  const handleClick = (url) => {
    setPdfUrl(url);
  };
  return (
    <>
      <Navbar />
      <div className="sidebar mt-32">
        <ul className="">
          <li>
            <button onClick={() => handleClick(bclawai)}>BC Lawai</button>
          </li>
          <li>
            <button onClick={() => handleClick(bckapaa)}>BC Kapa'a</button>
          </li>
        </ul>
      </div>

      <div className="boundary-container">
        {!pdfUrl && (
          <>
            <div className="top-boundary-text w-96 p-3">
              <div className="text-5xl p-3">Kauaʻi Boundary Certificates</div>
              <div className="p-1">
                The following resource data has contributed to the research used
                to help determine moku and ahupuaʻa boundary designation and
                location.
              </div>

              <div className="p-1">
                The Kauai Boundary Commission data and viewable pdf documents
                include the records of commision of boundaries for the island of
                Kauai between the years of 1864 - 1901.
              </div>
            </div>
          </>
        )}
        <div className="pdf-container">
          {pdfUrl && <PdfViewer pdf={pdfUrl} />}
        </div>
      </div>
      <Footer />
    </>
  );
};
