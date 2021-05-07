import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { myContext } from './Context';
import Dashboard from './Components/Dashboard/Dashboard';
import LoginPage from './Components/LoginPage/LoginPage';
import NavBar from './Components/NavBar/NavBar';
import './GlobalStyles.css';
import LandingPage from './Components/LandingPage/LandingPage';
import HistoryPage from './Components/History/HistoryPage';

function App() {
  const userObject = useContext(myContext);
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        {userObject ? null : <Route path="/login" component={LoginPage} />}
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/history">
          <HistoryPage />
        </Route>
        <Route path="/history">
          <HistoryPage />
        </Route>
        <Route path="/history">
          <HistoryPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
