"use client";

import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import NewsLetter from "./NewsLetter";

const ModalNewsLetter = ({ isModalOpenFlag, setIsModalOpenFlag }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsModalOpen(true);
  //   }, 3000); // 5000 milliseconds = 5 seconds

  //   return () => clearTimeout(timer); // Clear the timer if the component unmounts
  // }, []);

  return (
    <>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setIsModalOpenFlag && setIsModalOpenFlag(false);
          }}
        >
          <NewsLetter />
        </Modal>
      )}
    </>
  );
};

export default ModalNewsLetter;
