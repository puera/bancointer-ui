import React from 'react';

import { useTheme } from 'styled-components';

import { Container } from './styles';

const removeHashFromColor = (color: string): string => color.slice(1);

interface User {
  name: string;
}

const AccountDropDown: React.FC<User> = (user) => {
  const { lightGrey, secondary } = useTheme().colors;
  return (
    <Container>
      <img
        src={`https://ui-avatars.com/api/?rounded=true&format=svg&background=${removeHashFromColor(
          lightGrey,
        )}&color=${removeHashFromColor(secondary)}&name=${user.name}`}
        alt="user"
      />
    </Container>
  );
};

export default AccountDropDown;
