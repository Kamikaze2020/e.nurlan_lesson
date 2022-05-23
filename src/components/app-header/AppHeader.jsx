import React from 'react';
import {AppHeaderStyled} from './styled';

const AppHeader = ({postCount, likesCount}) => {
  return (
    <AppHeaderStyled>
      <h2>Эргашев Нурлан</h2>
      <p> {postCount} записи, из них {likesCount} понравилось </p>
    </AppHeaderStyled>
  );
};

export default AppHeader;