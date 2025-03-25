"use client";

import React, {useState, useEffect} from "react";
import Modal from "./Modal";
import Newsletter from "./NewsletterContent";

const ModalWrapper = ({isModalOpenFlag, setIsModalOpenFlag}) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

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
          <Newsletter />
        </Modal>
      )}
    </>
  );
};

export default ModalWrapper;
