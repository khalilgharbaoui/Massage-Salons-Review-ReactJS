require('normalize.css');
require('styles/App.scss');
import React from 'react';
import jQuery from 'jquery';

class MassageSalonForm extends React.Component {
  constructor() {
    super();

    this.state = {

      success: [],
      error: []

    };

  }

  AddMassageSalon(event){
    //prevent the default action of the form
    event.peventDefault();

    let compo = this;

    let formData = {
      massage_salon_name: compo.refs.massageSalonName.value,
      massage_salon_city: compo.refs.massageSalonCity.value,
      massage_salon_description: compo.refs.massageSalonDescription.value

    }
//jQuert AJAX API With POST METHODE...
    jQuery.ajax({
      type: 'POST',
      url: 'http:....',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
      massagesalon: formData
      })
    }).done(function(data){
      //when done let the parent know of the current component know about the change trought the "onChange"
      compo.props.onChange();


    }).fail(function(data){
// display the error message from the server... maybe
console.log(data);
      compo.setState({

errors: data.statusText

      });
    });
  }

  render() {
    return (
      <form onSubmit={this.saveTask.bind(this)}>
        <input
          type="text"
          ref="massageSalonName"
          placeholder="Add a Massage Salon" />
        <br />
        <input
          type="text"
          ref="massageSalonCity"
          placeholder="Massage Salon Location" />
        <br />
        <input
          type="text-area"
          ref="massageSalonDescription"
          placeholder="Massage Salon Description" />
        <br />
        <button type="submit">
          Add Salon
        </button>
      </form>
    );
  }
}

export default MassageSalonForm;
