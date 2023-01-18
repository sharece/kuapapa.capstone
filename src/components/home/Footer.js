import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <div className="foot-container p-3">
        <div className="foot-link ">
          <Link to="/disclaimer">DISCLAIMER</Link>
        </div>
        <div className="foot-link ">
          <Link to="/boundryCert">BOUNDRY CERTIFICATES</Link>
        </div>
        <div className="foot-link">
          <Link to="/mayorMsg">MESSAGE FROM THE MAYOR</Link>
        </div>
        {/* <div className="footer-container">
          <div className="footer-made">Made by Dev-Island</div>
        </div> */}
      </div>
    </>
  );
};
