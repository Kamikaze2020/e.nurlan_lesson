import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding-right: 20px;
  border: 2px solid #DAE5E7;
  border-radius: 5px;
  margin: 10px 0;
  color: ${props => props.color};
  font-size: 20px;
  cursor: pointer;

  -moz-user-select: none;
  user-select: none;
`

export const StyledBtn = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  background-color: transparent;
`

export const StyledImg = styled.img`
  width: 120px;
  height: 120px;
`