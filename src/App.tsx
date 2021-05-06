import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { myContext } from './Context';
import Dashboard from './Components/Dashboard/Dashboard';
import LoginPage from './Components/LoginPage/LoginPage';
import NavBar from './Components/NavBar/NavBar';
import './GlobalStyles.css';

function App() {
  const userObject = useContext(myContext);
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        {userObject ? null : <Route path="/login" component={LoginPage} />}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
