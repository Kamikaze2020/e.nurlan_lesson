import styled from "styled-components";

export const StyledModal = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: .5s;

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`

export const StyledModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: #fff;
  transform: scale(1);
  transition: .4s all;
  text-align: center;

  &.active {
    transform: scale(1);
  }
  
  & img{
    margin: 0 auto;
  }
`

export const StyledBtnClose = styled.button`
  height: max-content;
  background-color: transparent;
  margin-bottom: 10px;
  font-size: 20px;
  color: red;
`