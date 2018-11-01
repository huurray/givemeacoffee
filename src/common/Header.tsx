import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase';

//ui
import { Btn } from '../hoc/Styles/ui';

const Container = styled.div`
  width: 100%;
  height: 8rem;
  padding: 0 15%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
  display: flex;
`;
const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
`;
const Logo = styled.img`
  height: 3rem;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Letter = styled.div`
  ${props => props.theme.typo.p1};
  margin-right: 3rem;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.PRIMARY};
  }
`;

interface Props {
  history: any;
  user: any;
  userActions: any;
  isSignedIn: boolean;
}

class Header extends React.Component<Props> {
  render() {
    const { history, isSignedIn, userActions } = this.props;
    return (
      <Container>
        <LogoBox>
          <Logo src={require('../common/img/logo.png')} />
        </LogoBox>
        <Buttons>
          <Letter>How to use</Letter>
          {isSignedIn ? (
            <Letter
              onClick={() => {
                firebase.auth().signOut();
                userActions.logOutUser();
              }}
            >
              Logout
            </Letter>
          ) : (
            <Letter onClick={() => history.push('/signin')}>Login</Letter>
          )}
          <Btn>Make My URL</Btn>
        </Buttons>
      </Container>
    );
  }
}

export default Header;
