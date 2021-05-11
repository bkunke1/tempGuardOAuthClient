import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { myContext } from './Context';
import Dashboard from './Pages/DashboardPage/Dashboard';
import LoginPage from './Pages/LoginPage/LoginPage';
import NavBar from './Components/NavBar/NavBar';
import './GlobalStyles.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import HistoryPage from './Pages/HistoryPage/HistoryPage';
import SettingsPage from './Pages/SettingsPage/SettingsPage';
import SupportPage from './Pages/SupportPage/SupportPage';

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
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/support">
          <SupportPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
