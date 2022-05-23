import React from 'react';
import {StyledModal, StyledModalContent, StyledBtnClose} from "./style";
import {Spinner} from "../spinner";
// import {ErrorMsg} from "../error-message";


const Modal = ({modalVisible, onCloseModal, modalContent}) => {

  const {email, first_name, last_name, avatar} = modalContent;

  return (<StyledModal className={modalVisible ? 'active' : ''} onClick={onCloseModal}>
    <StyledModalContent className={''} onClick={e => e.stopPropagation()}>
      {modalContent.length === 0 ? <Spinner/> :
        <>
          <StyledBtnClose onClick={onCloseModal}>x</StyledBtnClose>
          <img src={avatar} alt="avatar"/>
          <h3>{first_name} {last_name}</h3>
          <a href={"mailto:" + email}>{email}</a>
        </>}
    </StyledModalContent>
  </StyledModal>);
};

export default Modal;