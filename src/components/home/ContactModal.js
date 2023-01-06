import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { closeContactModal } from "./ContactModalSlice";
// import { contactModalSlice } from "./ContactModalSlice";
import { useRef } from "react";

export const ContactModal = () => {
  const dispatch = useDispatch();
  const contactModalIsOpen = useSelector(
    (state) => state.contactModal.contactModalOpen
  );
  const handleClickOutside = (evt) => {
    if (!ref.current.contains(evt.target)) {
      dispatch(closeContactModal());
    }
  };
  const ref = useRef();

  return (
    <div
      onClick={handleClickOutside}
      className={clsx(
        { fixed: contactModalIsOpen, hidden: !contactModalIsOpen },
        "bg-gray-600  bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center align-center"
      )}
    >
      Contact
      <p className="text-zinc-400 p-5  rounded-lg ">
        We welcome your comments or inquiries ADDRESSES: Nā Hōkū Welo, LLC P.O.
        Box 1805 Līhu‘e, HI 96766 email: admin@nahokuwelo.com Nalani K. Brun
        Economic Development Specialist IV-Tourism Office of Economic
        Development County of Kaua‘i 4444 Rice St. Suite 200 Līhu‘e, HI 96766
        Phone (808) 241-4952 Fax (808) 241-6399
      </p>
    </div>
  );
};
