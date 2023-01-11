import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ContactModal } from "./ContactModal";
export const Navbar = () => {
  const { contactModalOpen } = useSelector((store) => store.contactModal);
  return (
    <>
      {contactModalOpen && <ContactModal />}
      <div className="nav-container">
        <div className="nav-link">
          <Link to="/">KAUA'I NUI KUAPAPA</Link>
        </div>
        <div className="contact-modal">
          <ContactModal />
        </div>
        <div className="nav-link">
          <Link to="/resources">RESOURCES</Link>
        </div>
      </div>
    </>
  );
};
