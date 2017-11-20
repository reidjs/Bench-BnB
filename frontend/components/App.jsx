import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import { Route } from 'react-router-dom';
const App = () => (
  <div>
    <h1>Bench bnb</h1>
    <GreetingContainer />
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
