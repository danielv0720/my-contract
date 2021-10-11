import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { HomeScreen } from '../components/home/HomeScreen';
import { Nabvar } from '../components/layout/Nabvar';
import { QuestionsScreen } from '../components/questions/QuestionsScreen';
import { UserScreen } from '../components/users/UserScreen';
import { UsersScreen } from '../components/users/UsersScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
      <Nabvar />
        <div className="container">
          <Switch>
            <Route exact path="/home" component={HomeScreen}/>

            <Route exact path="/users" component={UsersScreen}/>
    
            <Route exact path="/user/:userId" component={UserScreen}/>
  
            <Route exact path="/questions" component={QuestionsScreen}/>
     
            <Redirect to="/home" />
          </Switch>
        </div>

      </div>
    </Router>
  )
}
