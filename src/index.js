// Import the Routing classes
import { Router, Route, IndexRoute,browserHistory } from 'react-router';
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/MainAppComponent';
import PageNotFound from './components/PageNotFound';
import Welcome from './components/Welcome';
import MassageSalonsList from './components/MassageSalonsList';
import AddNewMassageSalon from './components/AddNewMassageSalon';


// Render the main component into the dom
// Set up your routes
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>                           // everything will be under the `App` component
      <IndexRoute component={Welcome} />                       // the `Welcome` component will be rendered on `/`
      <Route path="/massage-salons" component={MassageSalonsList}/>
      <Route path="/add-new-massage-salon" component={AddNewMassageSalon}/>                  // the `About` component will be rendered on `/about`

      {/*
      <Route path="/projects" component={Projects}/>           // the `Projects` component will be rendered on `/projects`
      <Route path="/project/:projectId" component={Project}/>  // the `Project` component will be rendered on `/project/<id>`*/}
      <Route path="*" component={PageNotFound}/>               // all other routes will render `PageNotFound`
    </Route>
  </Router>
), document.getElementById('app'));
