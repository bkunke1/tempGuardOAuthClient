import React, { useContext } from 'react'
import { myContext } from '../../Context'
import { IUser } from '../../types/maintypes'
import styles from './Dashboard.module.css';

export default function Dashboard() {
    const context = useContext(myContext) as IUser;
    return (
        <div className={styles.sensorsWrapper}>
<div className={styles.loginMessage}>
            {
                context ? (
                    <h1>Welcome back {context.username}</h1>
                ) : <h1>Welcome to my website!!!</h1>
            }
        </div>
        <div className={styles.sensors}>
            <h1 className={styles.sensor}>1</h1>
            <h1 className={styles.sensor}>2</h1>
            <h1 className={styles.sensor}>3</h1>
        </div>
        </div>
        
        
    )
}
