//gmaps API key 
//AIzaSyBC4cO9qzDa3f58jXsdvj-gos8hYkcB2XE

import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import SearchContainer from './search_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import DevTools from './containers/dev_tools';
const App = () => (
  <div>
    <h1>Bench bnb</h1>
    <GreetingContainer />
    <DevTools />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route exact path="/" component={SearchContainer} />
  </div>
);

export default App;
