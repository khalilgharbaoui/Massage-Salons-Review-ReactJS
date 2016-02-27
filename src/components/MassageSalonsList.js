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

  render() {
    return (
      <div>
        <MassageSalonForm />
      </div>
    );
  }
}

export default MassageSalonsList;
