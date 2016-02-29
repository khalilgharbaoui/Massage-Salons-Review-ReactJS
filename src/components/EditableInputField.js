import React from 'react';


class EditableInputField extends React.Component {
  constructor() {
    super();
    this.props = {
      isEditable: true
    };

    this.state = {
      editing: false,
      value: ''
    };
  }
textChanged(){

  this.props.onChange(this.refs.input.value);
  this.setState({
    editing: false
  });
}
  handleKeyPress(event){
  	if (event.key === 'Enter' || event.keyCode == 27) {
        event.target.blur();
  	}
  }

  setEditable(){
    if (!this.props.isEditable) {
      return;
    }
      this.setState({
    		editing: true
    	});
    }


  render() {


    if (this.state.editing) {
      return (
        <input defaultValue={this.props.value} ref="input" type="text" onBlur={this.textChanged.bind(this)} onKeyUp={this.handleKeyPress.bind(this)}/>
      );
    } else {
      return(
        <span onClick={this.setEditable.bind(this)}>{this.props.value}</span>
      );
    }
  }
}
export default EditableInputField;
