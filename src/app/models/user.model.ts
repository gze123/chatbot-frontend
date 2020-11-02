export interface User {
  email: string;
  fullname: string;
  username: string;
  matricNo: string;
  role: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
