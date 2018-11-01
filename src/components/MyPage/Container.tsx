import * as React from 'react';
import Presenter from './Presenter';

interface Props {
  match: any;
}

export default class extends React.Component<Props> {
  render() {
    return <Presenter match={this.props.match} />;
  }
}
