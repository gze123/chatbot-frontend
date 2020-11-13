export interface User {
  email: string;
  fullname: string;
  username: string;
  userId: string;
  role: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
