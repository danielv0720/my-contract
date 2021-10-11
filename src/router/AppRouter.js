import React from 'react'
import {
  BrowserRouter as Router,
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
            <Route path="/home">
              <HomeScreen />
            </Route>
            <Route path="/users">
              <UsersScreen />
            </Route>
            <Route path="/user/:userId">
              <UserScreen />
            </Route>
            <Route path="/questions">
              <QuestionsScreen />
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  )
}
