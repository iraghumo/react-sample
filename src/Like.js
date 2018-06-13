import React, {PropTypes} from 'react';


class Like extends React.Component {
  render() {
    return (
      <a className="_link _blue" href="#">Like</a>
    );
  }
}

Like.propTypes = {
  //myProp: PropTypes.string.isRequired
}
export default Like;