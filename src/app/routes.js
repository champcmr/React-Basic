import React  from 'react';
import {Route, IndexRoute} from 'react-router';

// import Members from './components/member/members.component';
import Members from './containers/membersContainer';
import App from './components/app';

// tester();
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Members}></IndexRoute>
  </Route>
)