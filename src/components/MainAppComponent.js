require('normalize.css');
require('styles/App.scss');
import React from 'react';
import { Link } from 'react-router';


class MainAppComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="main">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/welcome">Welcome</Link></li>
                <li><Link to="/massage-salons">Massage Salons</Link></li>
                <li><Link to="/add-new-massage-salon">Add New Massage Salon</Link></li>
              </ul>
            </nav>
      <h1>Hello World</h1>

      {this.props.children}
    </div>

    );
  }
}

// AppComponent.defaultProps = {
// };

export default MainAppComponent;
