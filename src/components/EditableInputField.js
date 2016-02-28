import React from 'react';

class EditableInputField extends React.Component {
  constructor() {
    super();

    this.state = {
      editing: false,
      value: ""
    };
  }

  handleKeyPress(event){
  	if (event.key === "Enter") {

  		var newInput = this.refs.input.value;
  		this.props.onChange(newInput);

  		this.setState({
  			editing: false
  		});
  	}
  }

  edit(event){
    if (this.props.done === false) {
      this.setState({
    		editing: true
    	});
    }
  }

  render() {


    if (this.state.editing) {
      return (
        <input ref="input" placeholder={this.props.value} onKeyPress={this.handleKeyPress.bind(this)}/>
      );
    } else {
      return(
        <span onClick={this.edit.bind(this)}>{this.props.value}</span>
      );
    }
  }
}
export default EditableInputField;
