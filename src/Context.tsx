import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";
import { AxiosResponse } from "axios";

export const myContext = createContext({});

//context test for localhost
const devEnv = 'http://localhost:4000';
const prodEnv = 'https://tempguardoauth.herokuapp.com';
export const setEnvironment = prodEnv;

export default function Context(props: any) {

    const [userObject, setUserObject] = useState<any>();

    useEffect(() => {
        axios.get(`${setEnvironment}/getuser`, { withCredentials: true }).then((res: AxiosResponse) => {
            if (res.data) {
                setUserObject(res.data);
            }
        })
    }, [])
    return (
        <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
    )
}
