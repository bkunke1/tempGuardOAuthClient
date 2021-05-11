import React, { useContext } from 'react';
import styles from './NavBar.module.css';
import { Link, NavLink } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { myContext } from '../../Context';
import { IUser } from '../../types/maintypes';
import { setEnvironment } from '../../Context';

// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

export default function NavBar() {
  const userObject = useContext(myContext) as IUser;

  const logout = () => {
    axios
      .get(`${setEnvironment}/auth/logout`, {
        withCredentials: true,
      })
      .then((res: AxiosResponse) => {
        if (res.data === 'done') {
          window.location.href = '/';
        }
      });
  };

  return (
    <div>
      {/* original navBar */}
      {/* <div className={styles.navBarWrapper}>
        <h1 className={styles.navBarLogo}>
          <Link to="/">TempGuard</Link>
        </h1>

        <ul className={styles.navBar}>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          {userObject ? (
            <li className={styles.navBarLoginBtn} onClick={logout}>
              Logout
            </li>
          ) : (
            <li className={styles.navBarLoginBtn}>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div> */}
      {/* original navBar */}
      {/*  */}
      {/* testing bootstrap nav */}
      <Navbar bg="light" expand="lg" className={styles.navBar}>
        <Navbar.Brand as={NavLink} to="/" exact>
          {/* <img
            alt="logoPic"
            src="../../assets/googleImage.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '} */}
          TempGuard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto mx-auto">
            <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={NavLink} to="/history">History</Nav.Link>
            <Nav.Link as={NavLink} to="/settings">Settings</Nav.Link>
            <Nav.Link as={NavLink} to="/support">Support</Nav.Link>
            {/* {userObject ? (
            <Nav.Link href="/" className={styles.navBarLoginBtn} onClick={logout}>Logout</Nav.Link>
          ) : (
            <Nav.Link href="/login" className={styles.navBarLoginBtn}>Login</Nav.Link>
          )} */}
          </Nav>
          {userObject ? (
            <Link to="/"><Button onClick={logout}>Logout</Button></Link>
          ) : (
            <Link to="/login"><Button href="/login">Login</Button></Link>            
          )}
          
        </Navbar.Collapse>
        
      </Navbar>
      {/* testing bootstrap nav */}
      {/*  */}
    </div>
  );
}
