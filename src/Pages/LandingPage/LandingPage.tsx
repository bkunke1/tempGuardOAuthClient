import React, { useContext } from 'react';
import styles from './LandingPage.module.css';
import { myContext } from '../../Context';
import { IUser } from '../../types/maintypes';

export default function LandingPage() {
  const context = useContext(myContext) as IUser;
  return (
    <div>
      {context ? (
        <h1>Welcome back {context.username}</h1>
      ) : (
        <h1>Welcome to the site. Please login.</h1>
      )}
    </div>
  );
}
