import React, {PropTypes} from 'react';


class Share extends React.Component {
  render() {
    return (
      <a className="_link _blue" href="#">Share</a>
    );
  }
}

Share.propTypes = {
  //myProp: PropTypes.string.isRequired
}
export default Share;