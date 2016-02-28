import React from 'react';
import jQuery from 'jquery';
import EditableInputField from './EditableInputField'

class MassageSalonsListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  updateMassageSalonName(newMassageSalonName){
  this.syncState({massage_salon_name: newMassageSalonName});
  }

  updateMassageSalonCity(newMassageSalonCity){
  this.syncState({massage_salon_city: newMassageSalonCity});
  }

  updateMassageSalonDescription(newMassageSalonDescription){
  this.syncState({massage_salon_description: newMassageSalonDescription});
  }

  syncState(updatedState){
  this.setState({
    loading: true
  });
  let compo = this;

//  let massageSalonId = compo.props.id;

  let newState = jQuery.extend({
    id: this.state.id,
    massage_salon_name: this.state.massage_salon_name,
    massage_salon_city: this.state.massage_salon_city,
    massage_salon_description: this.state.massage_salon_description
  }, updatedState);

  this.setState(newState);

  jQuery.ajax({
  type: 'put',
  url: 'https://massagesalonsreview.heroku.com',
  data: JSON.stringify({
    massagesalon: newState
  }),
  contentType: 'application/json',
  dataType: 'json'

  }).done(function(data){
  compo.setState({

    id: data.massagesalon.id,
    massage_salon_name: data.massagesalon.massage_salon_name,
    massage_salon_description: data.massagesalon.massage_salon_description,
    massage_salon_city: data.massagesalon.massage_salon_city
  });

  })
  .fail(function(data, jqXHR, textStatus) {
    // display the error message from the server... maybe

    compo.setState({errors: data.textStatus});
    alert(textStatus);
  })
  .always(function(){
    compo.setState({
      loading: false
    });
    compo.props.onChange();
  });
  }




  removeMassageSalon(event) {
    event.preventDefault();

    //changing "this" to "compo" to fix in memory
    let compo = this;

    //

    jQuery.ajax({methode: 'DELETE', url: 'https//massagesalonsreview.heroku.com',
    contentType: 'application/json', dataType: 'json'})
    .done(function() {
      //when done let the parent know of the current component know about the change trought the "onChange"
      compo.props.onChange();

    })
    .fail(function(data, jqXHR, textStatus) {
      // display the error message from the server... maybe

      compo.setState({errors: data.textStatus});
      alert(textStatus);
    });
  }


render(){
  return(
    <div>
    <EditableInputField value={this.state.massage_salon_name} onChange={this.updateMassageSalonName.bind(this)} isEditable={!this.state.completed} /><br />
    <EditableInputField value={this.state.massage_salon_description} onChange={this.updateMassageSalonDescription.bind(this)} isEditable={!this.state.completed} /><br />
    <EditableInputField value={this.state.massage_salon_city} onChange={this.updateMassageSalonCity.bind(this)} isEditable={!this.state.completed} /><br />
    <button onClick={this.removeMassageSalon.bind(this)}>❌</button>
    </div>


    );
  }

componentDidMount(){
this.setState({
id: this.props.id,
massage_salon_name: this.props.massage_salon_name,
massage_salon_city: this.props.massage_salon_city,
massage_salon_description: this.props.massage_salon_description
});

}
}


export default MassageSalonsListItem;
