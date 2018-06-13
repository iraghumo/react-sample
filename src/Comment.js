import React, {PropTypes} from 'react';


class Comment extends React.Component {
  render() {
    return (
      <a className="_link _blue" href="#">Comment</a>
    );
  }
}

Comment.propTypes = {
  //myProp: PropTypes.string.isRequired
}
export default Comment;