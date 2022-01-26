import {Component} from 'react'

class InputField extends Component {
  render(){
    return (
      <input type="text"
           name="name"
           value={ this.props.value }
           onChange={ this.props.handleChange } />
    );
  }
}
export default InputField;