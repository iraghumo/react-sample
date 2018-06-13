import React, {PropTypes} from 'react';


class TextInput extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <input type={this.props.type} placeholder={this.props.placeholder} />
    );
  }
}

TextInput.propTypes = {
  //myProp: PropTypes.string.isRequired
}
export default TextInput;