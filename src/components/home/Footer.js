import { Link } from "react-router-dom";
export const Footer = () => (
  <>
    <div className="foot-container">
      <div className="foot-link ">
        <Link to="/disclaimer">DISCLAIMER</Link>
      </div>
      <div className="foot-link ">
        <Link to="/boundryCert">BOUNDRY CERTIFICATES</Link>
      </div>
      <div className="foot-link">
        <Link to="/mayorMsg">MESSAGE FROM THE MAYOR</Link>
      </div>
    </div>
  </>
);
