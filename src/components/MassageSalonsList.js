require('normalize.css');
require('styles/App.scss');
import React from 'react';
import MassageSalonForm from './MassageSalonForm';

class MassageSalonsList extends React.Component {
  constructor() {
    super();

    this.state = {

      massagesalons: []

    }
  }

  showMassageSalons(){
// this is now... compo
let compo = this;

let massageSalonId = compo.props.id
//JSON API
jQuery.getJSON(
  'https://massagesalonsreview.heroku.com/',
  function(data){
    compo.setState({
      massagesalons: data.massagesalons
    });
  });
}




render() {
    return (
      <div>
        <MassageSalonForm />
        //loop with map function over the array of massagesalons.
        {this.state.massagesalons.map(function(massagesalon,secondargumentforthis){
          return(
        <MassageSalon
          key={massagesalon.id}
          id={massagesalon.id}
          massageSalonDescription={massagesalon.massage_salon_description}
          massageSalonName={massagesalon.massage_salon_name}
          massageSalonCity={massagesalon.massage_salon_city}
          onChange={this.showMassageSalons.bind(this)}
        />);
      },this)}
      </div>
    );
  }


//componentDidMount is always after the render......
 componentDidMount(){
    this.showMassageSalons();
  }





}

export default MassageSalonsList;
