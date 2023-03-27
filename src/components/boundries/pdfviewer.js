import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const PdfViewer = ({ pdf }) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  console.log({ pageNumber });
  function onDocumentLoadSuccess({ numPages }) {
    console.log({ numPages });
    setNumPages(numPages);
  }
  const onPrev = () => {
    if (pageNumber <= 1) return null;
    setPageNumber((p) => p - 1);
  };
  const onNext = () => {
    if (pageNumber >= numPages) return null;
    setPageNumber((p) => p + 1);
  };
  const renderBtns = () => (
    <p
      style={{
        display: "grid",
        placeItems: "center",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      <button onClick={onPrev} className="p-4 text-3xl">
        &lt;
      </button>
      <div>
        Page {pageNumber} of {numPages}
      </div>
      <button onClick={onNext} className="p-4 text-3xl">
        &gt;
      </button>
    </p>
  );
  return (
    <>
      {renderBtns()}
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      {renderBtns()}
    </>
  );
};
