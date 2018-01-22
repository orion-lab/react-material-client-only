import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddEntry from './screens/add-entry';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={AddEntry} />
    </Switch>
  );
}

export default Routes;
