import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';
import EditableInputField from './EditableInputField'

class MassageSalonsListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
  this.setState({
  id: this.props.id,
  massage_salon_name: this.props.massageSalonName,
  massage_salon_city: this.props.massageSalonCity,
  massage_salon_description: this.props.massageSalonDescription,
  completed: this.props.completed,
  createdAt: this.props.createdAt,
  updatedAt: this.props.updatedAt,
  loading: !!!this.props.id
  });

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


  let newState = jQuery.extend({
    id: this.state.id,
    massage_salon_name: this.state.massage_salon_name,
    massage_salon_city: this.state.massage_salon_city,
    massage_salon_description: this.state.massage_salon_description,
    completed: this.state.completed

  }, updatedState);

  this.setState(newState);

let massageSalonId = this.props.id
  jQuery.ajax({
  type: 'PUT',
  url: `https://massagereviews.herokuapp.com/massagesalons/${massageSalonId}`,
  data: JSON.stringify({
    massagesalon: newState
  }),
  contentType: 'application/json',
  dataType: 'JSON'

  }).done(function(data){

  compo.setState({

    id: data.massagesalon.id,
    massage_salon_name: data.massagesalon.massage_salon_name,
    massage_salon_city: data.massagesalon.massage_salon_city,
    massage_salon_description: data.massagesalon.massage_salon_description

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


  getClassName() {
      let _classNames = ['project'];
      if (this.state.loading) { _classNames.push('loading'); }
      if (this.state.completed) { _classNames.push('completed'); }
      return _classNames.join(' ');
    }

  removeMassageSalon(event) {
    event.preventDefault();

    //changing "this" to "compo" to fix in memory
    let compo = this;
    let massageSalonId = this.props.params.massageSalonId

    jQuery.ajax({
      methode: 'DELETE',
      url: `https://massagereviews.herokuapp.com/massagesalons/${massagesalonId}`,
    contentType: 'application/json',
     dataType: 'json'
   }) .done(function() {

compo.props.onChange();

   });
  }




  //   .done(function() {
  //     //when done let the parent know of the current component know about the change trought the "onChange"
  //
  //     compo.props.removeMassageSalon
  //
  //   })
  //   .fail(function(data, jqXHR, textStatus) {
  //     // display the error message from the server... maybe
  //
  //     compo.setState({errors: data.textStatus});
  //     alert(textStatus);
  //   });
  // }


render(){
  let massageSalonId = this.props.id
  return(
    <div className={this.getClassName()}>
    Name: <EditableInputField value={this.state.massage_salon_name} onChange={this.updateMassageSalonName.bind(this)} isEditable={!this.state.completed} /><br />
    Description: <EditableInputField value={this.state.massage_salon_description} onChange={this.updateMassageSalonDescription.bind(this)} isEditable={!this.state.completed} /><br />
    City: <EditableInputField value={this.state.massage_salon_city} onChange={this.updateMassageSalonCity.bind(this)} isEditable={!this.state.completed} /><br />
  <Link to={`/massagesalon/${massageSalonId}`}> 👁 </Link> | <button href="#" onClick={this.removeMassageSalon.bind(this)}>❌</button>
    </div>


    );
  }


}


export default MassageSalonsListItem;
