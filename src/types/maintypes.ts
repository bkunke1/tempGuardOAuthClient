export interface IUser {
    googleId?: string;
    twitterId?: string;
    githubId?: string;
    username: string;
    __v: number;
    _id: string;
  }

  export interface ISensor {
    _id: string;
    sensorNumber: string;
    sensorName: string;
    sensorCurrentTemp: string;
    sensorHighAlarm: string;
    sensorLowAlarm: string;
  }