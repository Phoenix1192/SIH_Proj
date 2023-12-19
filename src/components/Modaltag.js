import ReactModal from 'react-modal'
import { useState } from 'react'
import './Modaltag.css'
import Login from './login';

const Modaltag = ({func}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const openModal = () => {
      setModalIsOpen(true);
      func();
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    return (
      <>
        <button className='login' onClick={openModal}>LogIn</button>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
          className="ReactModal"
        >
          <Login/>
        </ReactModal>
      </>
    );
  };
  
  export default Modaltag;
  