import * as React from 'react';

interface Props {
  match: any;
}
export default class extends React.Component<Props> {
  render() {
    const { match } = this.props;
    return (
      <div>
        {match.params.id}
        님의 마이페이지
      </div>
    );
  }
}
