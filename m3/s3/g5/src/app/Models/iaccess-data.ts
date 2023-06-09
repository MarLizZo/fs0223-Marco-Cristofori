import { IRegisterData } from './iregister-data';

export interface IAccessData {
  accessToken: string;
  user: {
    email: string;
    realname: string;
    username: string;
    id: number;
  };
}
