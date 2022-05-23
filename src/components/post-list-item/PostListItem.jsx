import React from 'react';
import {Item, StyledBtn, StyledImg} from "./styled";
import {Delete, Hearth, Stars, StarsActive, Arrow} from "../../assets";


const PostListItem = ({
                        avatar,
                        first_name,
                        last_name,
                        onOpenModal,
                        like,
                        status,
                        onDelete,
                        onToggleLike,
                        onToggleStars
                      }) => {


  return (
    <Item color={!status ? '#111' : 'gold'} onClick={onToggleLike}>
      <StyledImg src={avatar} alt=""/>
      <p>{first_name} {last_name}</p>
      <div>
        <StyledBtn onClick={onToggleStars}>
          {!status ? <img src={Stars} alt="favorite"/> : <img src={StarsActive} alt="favorite"/>}
        </StyledBtn>
        <StyledBtn onClick={onOpenModal}><img src={Arrow} alt="arrow"/></StyledBtn>
        <StyledBtn onClick={onDelete}><img src={Delete} alt="delete"/></StyledBtn>
        {like ? <StyledBtn><img src={Hearth} alt="delete"/></StyledBtn> : null}
      </div>
    </Item>
  );
};

export default PostListItem;