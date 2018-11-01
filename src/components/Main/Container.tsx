import React from 'react';
import Presenter from './Presenter';
import firebase from 'firebase';

interface Props {
  history: any;
  user: any;
  userActions: any;
  isSignedIn: boolean;
}

export default class extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.makeURL = this.makeURL.bind(this);
  }

  async makeURL() {
    const { history, isSignedIn, user } = this.props;
    if (!isSignedIn) {
      history.push('/signin');
    } else {
      const db = firebase.firestore();
      const docRef = db.collection('coffees').doc(user.id);

      try {
        await docRef.set(
          {
            id: user.id
          },
          { merge: true }
        );
        history.push(`/mypage/${user.id}`);
      } catch (err) {
        console.error(err);
      }
    }
  }

  render() {
    return (
      <Presenter
        history={this.props.history}
        user={this.props.user}
        userActions={this.props.userActions}
        isSignedIn={this.props.isSignedIn}
        makeURL={this.makeURL}
      />
    );
  }
}
