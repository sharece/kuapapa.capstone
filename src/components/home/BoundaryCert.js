import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Dropdown } from 'rsuite';
import bc from '../../assets/boundary-certs-01.png';
import bcomm from '../../assets/boundary-commission-01.png';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { PdfViewer } from '../boundries/pdfviewer';
import boundaries from '../boundries/boundaries';

export const BoundaryCert = () => {
  const [pdfUrl, setPdfUrl] = useState();
  const handleClick = (url) => {
    setPdfUrl(url);
  };
  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-[auto_1fr] place-items-start place-content-start mt-12">
        <select
          className="w-full md:hidden"
          onChange={(evt) => handleClick(evt.target.value)}
        >
          <option value="">Select One</option>
          <option value="">Kauai Boundary Commissions</option>
          {boundaries.commissions.map((b) => (
            <option value={b.pdfUrl}>{b.name}</option>
          ))}
        </select>
        <div className="hidden md:block sidebar p-8 max-w-xs bg-gray-50 md:min-h-full">
          <h2 className="text-sm font-bold break-words">
            Kauai Boundary Commissions
          </h2>
          <ul className="">
            {boundaries.commissions.map((b) => (
              <li>
                <button onClick={() => handleClick(b.pdfUrl)}>{b.name}</button>
              </li>
            ))}
          </ul>
          <h2 className="text-sm font-bold break-words mt-10">
            Boundary Certificates
          </h2>
          <ul>
            {boundaries.certs.map((b) => (
              <li>
                <button onClick={() => handleClick(b.pdfUrl)}>{b.name}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="boundary-container">
          {!pdfUrl && (
            <>
              <div className="top-boundary-text w-96 p-3">
                <div className="text-5xl p-3">Kauaʻi Boundary Certificates</div>
                <div className="p-1">
                  The following resource data has contributed to the research
                  used to help determine moku and ahupuaʻa boundary designation
                  and location.
                </div>

                <div className="p-1">
                  The Kauai Boundary Commission data and viewable pdf documents
                  include the records of commision of boundaries for the island
                  of Kauai between the years of 1864 - 1901.
                </div>

                <div class="grid grid-cols-2">
                  <img src={bcomm} />
                  <img src={bc} />
                </div>
              </div>
            </>
          )}
          <div className="pdf-container">
            {pdfUrl && <PdfViewer pdf={pdfUrl} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
