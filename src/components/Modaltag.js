import ReactModal from 'react-modal'
import { useState } from 'react'
import './Modaltag.css'
import Login from './login';

const Modaltag = ({func,changeLog,user}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const openModal = () => {
      setModalIsOpen(true);
      func();
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };

    const comb = () => {
      changeLog();
  
    }

    const value=user?"LogOut":"LogIn";
    const whichfunc=user?comb:openModal;
  
    return (
      <>
        <button className='login' onClick={whichfunc}>{value}</button>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
          className="ReactModal"
        >
          <Login changeLog={changeLog} user={user} />
        </ReactModal>
      </>
    );
  };
  
  export default Modaltag;
  