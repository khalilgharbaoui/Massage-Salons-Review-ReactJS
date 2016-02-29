import React from 'react';
import jQuery from 'jquery';


class MassageSalon extends React.Component{

    constructor(){
      super();

      this.state = {
        massagesalon: []
      }
    }

    renderMassageSalon(){
      // we want to set the state to the massagesalon with corresponding id from the backend
let compo = this;
// fetch is from url? react-router.... params
let massageSalonId = this.props.params.massageSalonId

      jQuery.getJSON(`https://massagereviews.herokuapp.com/massagesalons/${massageSalonId}`,
        function(data){
        compo.setState({
          massagesalon: data.massagesalon
        });
      });
    }

    componentDidMount(){
      this.renderMassageSalon();
    }

    render(){
      return(
        <div>
        <h1>Massage Salon:</h1>
       <strong>Massage Salon Name:</strong>  {this.state.massagesalon.massage_salon_name}<br />
        <strong>Massage Salon Description:</strong>  {this.state.massagesalon.massage_salon_description}<br />
        <strong>Massage Salon id:</strong>  {this.state.massagesalon.id}<br />
        </div>
      );
    }
}

export default MassageSalon;
