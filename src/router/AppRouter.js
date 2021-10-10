import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HomeScreen } from '../components/home/HomeScreen';
import { Nabvar } from '../components/layout/Nabvar';
import { QuestionsScreen } from '../components/questions/QuestionsScreen';
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
            <Route path="/questions">
              <QuestionsScreen />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  )
}
