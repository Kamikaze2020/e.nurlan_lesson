import React from 'react';
import PostListItem from "../post-list-item";

const PostList = ({posts, onOpenModal, onDelete, onToggleLike, onToggleStars}) => {
  const item = posts.map((el) => {
    return (<PostListItem
      key={el.id} {...el}
      like={el.like}
      onDelete={() => onDelete(el.id)}
      onToggleLike={(e) => onToggleLike(e, el.id)}
      onToggleStars={() => onToggleStars(el.id)}
      onOpenModal={() => onOpenModal(el.id)}
    />)
  })

  return (
    <ul>
      {item}
    </ul>
  );
};

export default PostList;