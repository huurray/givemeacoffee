import React from 'react';
import styled from 'styled-components';

//common
import Header from '../../common/Header';
//ui
import { Btn } from '../../hoc/Styles/ui';

const Container = styled.div`
  width: 100%;
  position: relative;
  padding: 8rem 15% 0 15%;
`;
const MainBox = styled.div`
  width: 100%;
  height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 40rem;
`;
const SubTitle = styled.p`
  ${props => props.theme.typo.p2};
  margin: 1.5rem;
`;
const URL = styled.h1`
  ${props => props.theme.typo.h1};
  color: ${props => props.theme.colors.PRIMARY};
  margin-bottom: 3rem;
`;

interface Props {
  history: any;
  user: any;
  userActions: any;
  isSignedIn: boolean;
}

export default class extends React.PureComponent<Props> {
  render() {
    const { history, isSignedIn, user, userActions } = this.props;
    return (
      <Container>
        <Header
          history={history}
          user={user}
          isSignedIn={isSignedIn}
          userActions={userActions}
        />
        <MainBox>
          <ImgBox>
            <Img src={require('../../common/img/main_pic.png')} />
          </ImgBox>

          <SubTitle>We want to build true donation culture.</SubTitle>
          <URL>Make up your unique URL to link people.</URL>
          <Btn>Make My URL</Btn>
        </MainBox>
      </Container>
    );
  }
}
