import React from "react";
import "./modal.css";
import ModalBtn from "./ModalBtn/ModalBtn.jsx";
import { useState } from "react";

const Modal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showFirstName, setShowFirstName] = useState("");
  const [showLastName, setShowLastName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMdoal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const insertFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const insertLastName = (e) => {
    setLastName(e.target.value);
  };

  const saveBtn = (e) => {
    setShowFirstName(firstName);
    setShowLastName(lastName);
    closeModal();
    setFirstName("");
    setLastName("");
  };

  return (
    <>
      <div className="table">
        <button className="openModalBtn" onClick={toggleMdoal}>
          Open Modal
        </button>
        <h3>First Name:{showFirstName}</h3>
        <h4>Last Name:{showLastName}</h4>

        {isModalOpen && (
          <div className="modal">
            <div className="modal_header">
              <h2 className="modal_mainText">Create your account</h2>
              <div className="modal_header_btn" onClick={closeModal}>
                <i className="fa-solid fa-x"></i>
              </div>
            </div>
            <div className="modalCart">
              <div className="modalCart_box">
                <div className="modalCart_box_title">First Name</div>
                <input
                  className="modalCart_box_input"
                  type="text"
                  placeholder="First name"
                  required
                  onChange={insertFirstName}
                  value={firstName}
                />
              </div>
              <div className="modalCart_box">
                <div className="modalCart_box_title">Last Name</div>
                <input
                  className="modalCart_box_input"
                  type="text"
                  placeholder="Last name"
                  required
                  onChange={insertLastName}
                  value={lastName}
                />
              </div>
            </div>

            <div className="modal_Btn_box">
              <ModalBtn type="succes" btnText="Save" handleClick={saveBtn} />
              <ModalBtn
                type="simple"
                btnText="Cancel"
                handleClick={closeModal}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
