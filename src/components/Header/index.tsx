import React, { memo } from 'react';

import { Container, Wrapper, LeftNav, RightNav } from './styles';
import { BancoInter } from '../../assets';
import Button from '../Button';
import AccountDropDown from '../AccountDropDown';
import Gradient from './Gradient';

interface User {
  name: string;
}

const Header: React.FC = () => {
  const user: User = { name: 'Renann Souza' };

  return (
    <Container>
      <Wrapper>
        <LeftNav>
          <BancoInter />
          Internet Banking
        </LeftNav>
        <RightNav>
          <Button variant="secondary">Simulador Renda Fixa</Button>
          <AccountDropDown name={user.name} />
        </RightNav>
      </Wrapper>
      <Gradient />
    </Container>
  );
};

export default memo(Header);
