import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
//ui
import { Btn } from '../hoc/Styles/ui';
//svg
import { ReactComponent as ArrowDownSvg } from '../common/svg/arrow-down.svg';

const Container = styled.div`
  width: 100%;
  height: 8rem;
  padding: 0 15%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
  display: flex;
  background-color: ${props => props.theme.colors.WHITE};
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
const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;
const Name = styled.div`
  ${props => props.theme.typo.p1};
`;
const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin: 1rem;
`;
const ArrowDown = styled(ArrowDownSvg)`
  width: 1rem;
`;
const Menu = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.GREY_LIGHT_1};
  border: 1px solid ${props => props.theme.colors.GREY_LIGHT_3};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 18rem;
  z-index: 9;
  opacity: ${(props: P) => (props.on ? '1' : '0')};
`;
const MenuItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.GREY_LIGHT_2};
  }
  &:hover {
    background-color: ${props => props.theme.colors.PRIMARY};;
  }
`;
const MenuText = styled.div`
  ${props => props.theme.typo.p1};
`;

interface P {
  on: boolean;
}
interface Props {
  history: any;
  user: any;
  userActions: any;
  isSignedIn: boolean;
}
interface State {
  isMenuOn: boolean;
}

class Header extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOn: false
    };
  }

  render() {
    const { history, isSignedIn, userActions, user } = this.props;
    return (
      <Container>
        <LogoBox>
          <Logo src={require('../common/img/logo.png')} />
        </LogoBox>
        <Buttons>
          <Letter>How to use</Letter>
          {isSignedIn ? (
            <>
              <Letter
                onClick={() => {
                  history.push(`/myPage/${user.id}`);
                }}
              >
                MyPage
              </Letter>
              <ProfileBox
                onClick={() => {
                  this.setState(prevState => ({
                    isMenuOn: !prevState.isMenuOn
                  }));
                }}
              >
                <Name>{user.displayName}</Name>
                <Img src={user.photoURL} />
                <ArrowDown />
                <Menu on={this.state.isMenuOn}>
                  <MenuItem
                    onClick={() => {
                      firebase.auth().signOut();
                      userActions.logOutUser();
                    }}
                  >
                    <MenuText>Logout</MenuText>
                  </MenuItem>
                  <MenuItem>
                    <MenuText>Setting</MenuText>
                  </MenuItem>
                </Menu>
              </ProfileBox>
            </>
          ) : (
            <>
              <Letter onClick={() => history.push('/signin')}>SignIn</Letter>
              <Btn onClick={() => history.push('/signin')}>Make My URL</Btn>
            </>
          )}
        </Buttons>
      </Container>
    );
  }
}

export default Header;
