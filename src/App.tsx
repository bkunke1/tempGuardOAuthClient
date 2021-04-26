import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { myContext } from './Context';
import Homepage from './Components/Homepage/Homepage';
import LoginPage from './Components/LoginPage/LoginPage';
import NavBar from './Components/NavBar/NavBar';
import './GlobalStyles.css';

function App() {
  const userObject = useContext(myContext);
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        {userObject ? null : <Route path="/login" component={LoginPage} />}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
