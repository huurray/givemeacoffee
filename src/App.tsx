import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//pages
import SignIn from './components/SignIn';
import Main from './components/Main';
import MyPage from './components/MyPage';

//hoc
import withAuth from './hoc/Auth';
import withStyles from './hoc/Styles';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/mypage/:id" component={MyPage} />
          <Route path="/signin" component={SignIn} />
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(withAuth(App));
