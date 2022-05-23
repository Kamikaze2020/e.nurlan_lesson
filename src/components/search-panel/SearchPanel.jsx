import React, {useState} from 'react';
import {StyledInput} from './styled';

const SearchPanel = ({onUpdateSearchPanel}) => {
  const [text, setText] = useState('');

  const onSearchPost = (e) => {
    const {value} = e.target
    setText(value);

    onUpdateSearchPanel(value)
  }

  return <StyledInput type="text" placeholder={'Поиск по записям'} onChange={onSearchPost}/>
};

export default SearchPanel;