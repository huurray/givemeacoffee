import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.GREY_LIGHT_0};
`;
const SignInBox = styled.div`
  width: 40rem;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.WHITE};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;
const Title = styled.h1`
  ${props => props.theme.typo.h1};
`;

interface Props {
  userActions: any;
  history: any;
}

export default class extends React.PureComponent<Props> {
  render() {
    
    const uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: data => {
          this.props.userActions.getUser({
            displayName: data.user.displayName,
            email: data.user.email,
            photoURL: data.user.photoURL
          });
          this.props.history.replace('/');
          return false;
        }
      }
    };
    return (
      <Container>
        <SignInBox>
          <Title>SignIn</Title>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </SignInBox>
      </Container>
    );
  }
}
