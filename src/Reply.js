import React, {PropTypes} from 'react';


class Reply extends React.Component {
  render() {
    return (
      <a className="_link _blue" href="#">Reply</a>
    );
  }
}

Reply.propTypes = {
  //myProp: PropTypes.string.isRequired
}
export default Reply;