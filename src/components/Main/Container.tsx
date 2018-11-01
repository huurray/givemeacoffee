import React from 'react';
import Presenter from './Presenter';

interface Props {
  history: any;
  user: any;
  userActions: any;
  isSignedIn: boolean;
}

export default class extends React.Component<Props> {
  render() {
    return (
      <Presenter
        history={this.props.history}
        user={this.props.user}
        userActions={this.props.userActions}
        isSignedIn={this.props.isSignedIn}
      />
    );
  }
}
