import ReactModal from 'react-modal'
import { useState } from 'react'
import './ProMod.css'

const ProMod = ({desc}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    return (
      <>
        <p onClick={openModal}>more</p>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
          className="ReactModal"
        >
            {desc}
        </ReactModal>
      </>
    );
  };
  
  export default ProMod;
  