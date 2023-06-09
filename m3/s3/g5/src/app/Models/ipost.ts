import { IUser } from './iuser';

export interface IPost {
  id?: number;
  title: string;
  content: string;
  owner: IUser;
}
