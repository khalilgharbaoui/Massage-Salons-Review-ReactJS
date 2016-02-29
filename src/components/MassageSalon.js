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
let massageSalonId = this.props.id

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
       {this.state.massagesalon.massage_salon_name}
        {this.state.massagesalon.massage_salon_description}
        </div>
      );
    }
}

export default MassageSalon;
