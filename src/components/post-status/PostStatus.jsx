import React from 'react';
import {StyledBtn} from "./styled";


const PostStatus = ({onUpdateFilter, filter}) => {

  const btn = [
    {name: "all", label: "Все"},
    {name: "like", label: "Понравилось"},
  ]

  return (
    <>
      {/*<StyledBtn background={'#3592A9'} color={'white'}>Все</StyledBtn>*/}
      {/*<StyledBtn color={'#3592A9'}>Понравилось</StyledBtn>*/}
      {
        btn.map(({label, name}) => {
          const active = filter === name;

          return (
            <StyledBtn
              key={name}
              className={active ? 'active' : null}
              onClick={() => onUpdateFilter(name)}
            >
              {label}
            </StyledBtn>)
        })
      }
    </>
  );
};

export default PostStatus;