import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import { contactModalSlice } from "./ContactModalSlice";
import { useRef } from "react";

export const ContactModal = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.modal.editBoardOpen);
  const defaultTitle = useSelector((state) => state.board.title);
  const handleClickOutside = (evt) => {
    if (!menuRef.current.contains(evt.target)) {
      // dispatch(closeContactModal());
    }
  };
  const menuRef = useRef();
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div
      onClick={handleClickOutside}
      className={clsx(
        { fixed: modalIsOpen, hidden: !modalIsOpen },
        "bg-gray-600  bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center align-center"
      )}
    >
      <div className="dark:text-white font-bold flex justify-between text-black ">
        <p>
          We welcome your comments or inquiries ADDRESSES: Nā Hōkū Welo, LLC
          P.O. Box 1805 Līhu‘e, HI 96766 email: admin@nahokuwelo.com Nalani K.
          Brun Economic Development Specialist IV-Tourism Office of Economic
          Development County of Kaua‘i 4444 Rice St. Suite 200 Līhu‘e, HI 96766
          Phone (808) 241-4952 Fax (808) 241-6399
        </p>
      </div>
    </div>
  );
};
