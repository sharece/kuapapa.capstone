import { Link } from "react-router-dom";
// import { ContactModal } from "./ContactModal";
export const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="home-link">
          <Link to="/">KAUA'I NUI KUAPAPA</Link>
        </div>
        <div className="nav-link">
          CONTACT
          {/* <ContactModal /> */}
        </div>
        <div className="nav-link">
          <Link to="/resources">RESOURCES</Link>
        </div>
      </div>
    </>
  );
};
