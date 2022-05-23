import React, {useState} from 'react';
import {StyledBtn, StyledInput} from "./styled";

const PostAdd = ({addItem}) => {
  const [value, setValue] = useState('')

  const onChange = (e) => {

      setValue(e.target.value)

  }

  const onSubmit = (e) => {
    e.preventDefault()
    setValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <StyledInput
        type="text"
        placeholder={'Введите вашу мысль'}
        onChange={onChange}
        value={value}
      />
      <StyledBtn onClick={() => addItem(value)}>Добавить</StyledBtn>
    </form>
  );
};

export default PostAdd;