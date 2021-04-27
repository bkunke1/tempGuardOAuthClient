import React, { useContext } from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { myContext } from '../../Context';
import { IUser } from '../../types/maintypes';
import { setEnvironment } from '../../Context';

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
    <div className={styles.navBarWrapper}>
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
          <li className={styles.navBarLoginBtn} onClick={logout}>Logout</li>
        ) : (
          <li className={styles.navBarLoginBtn} >
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>      
    </div>
  );
}
