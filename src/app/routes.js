import React  from 'react';
import {Route, IndexRoute} from 'react-router'; 

import App from './routes/app';
import Members from './routes/members/containers/Members';
import AddMember from './routes/members/containers/MemberForm';
import Tasks from './routes/tasks/containers/Tasks';
import AddTask from './routes/tasks/containers/TaskForm';

// tester();
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Members}></IndexRoute>
    <Route path="/new-member" component={AddMember} />
    <Route path="/new-task/:memberId" component={AddTask}/>
    <Route path="/task-list/:memberId" component={Tasks}/>
  </Route>
)