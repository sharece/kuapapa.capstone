// import React, { Component } from "react";
// import { Document, Page } from "react-pdf";
// // import sample from ".../pdf/BC_01_10_1_Lawai.pdf";
// class BoundryCert extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       numPages: null,
//       pageNumber: 1,
//     };
//   }

//   onDocumentLoad = ({ numPages }) => {
//     this.setState({ numPages });
//   };

//   render() {
//     const { pageNumber, numPages } = this.state;

//     return (
//       <div>
//         <Document
//           file=".../pdf/BC_01_10_1_Lawai.pdf"
//           onLoadSuccess={this.onDocumentLoad}
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>
//           {" "}
//           Page {pageNumber} of {numPages}
//         </p>
//       </div>
//     );
//   }
// }

// export default BoundryCert;
