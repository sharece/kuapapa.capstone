import { Navbar } from "./Navbar";
import { Disclaimer } from "./Disclaimer";
import { BoundryCert } from "./BoundryCert";
import { Resources } from "./Resources";
import { ContactModal } from "./ContactModal";
import { useSelector } from "react-redux";
export const HomePage = () => {
  const { contactModalOpen } = useSelector((store) => store.contactModal);
  return (
    <>
      {contactModalOpen && <ContactModal />} <Navbar />
      <ContactModal />
      {/* //map */}
      {/* //title banner ? */}
      {/* //bio */}
      {/* //Kaua'i Ocean Safety + Weather Report //footer = disclaimer - boundry - */}
      <Disclaimer />
      <BoundryCert />
      <Resources />
    </>
  );
};
