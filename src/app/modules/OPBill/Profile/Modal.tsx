// Modal.tsx

import React, { FC } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
         
        </button>
        <div className="modal-body">
          {/* Your modal content goes here */}
          <h2>Modal Title</h2>
          <p>Modal content goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
