require('normalize.css');
require('styles/App.scss');
import React from 'react';
import jQuery from 'jquery';
import MassageSalonListItem from './MassageSalonListItem';

class MassageSalonsList extends React.Component {
  constructor() {
    super();

    this.state = {

      massagesalons: []

    }
  }

  showMassageSalons() {
    // this is now... compo
    let compo = this;

    //let massageSalonId = compo.props.id
    //JSON API
    jQuery.getJSON('https://massagereviews.herokuapp.com/massagesalons.json',
        function(data) {
      compo.setState({massagesalons: data.massagesalons});
    });
  }
  //loop with map function over the array of massagesalons.

  render() {
    return (
      <div>
<h1>List of Massage Salons</h1>
        {this.state.massagesalons.map(function(massagesalon) {
          return (
            <MassageSalonListItem
              key={massagesalon.id}
              id={massagesalon.id}
              massageSalonName={massagesalon.massage_salon_name}
              massageSalonDescription={massagesalon.massage_salon_description}
              massageSalonCity={massagesalon.massage_salon_city}
              onChange={this.showMassageSalons.bind(this)}
            />
          );
        }, this)}
      </div>
    );
  }

  //componentDidMount is always after the render......
  componentDidMount() {
    this.showMassageSalons();
  }

}

export default MassageSalonsList;
