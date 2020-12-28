export interface Role {
  _id: string;
  role: string;
  createBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface RoleDelete {
  id: [];
}

export interface RoleCreate {
  role: string;
}

export interface UserCreate {
  email: string;
  fullname: string;
  username: string;
  role: string;
  userId: string;
  staffRole: string;
  password: string;
  retypePassword: string;
}

export interface AdminUser {
  _id: string;
  fullname: string;
  username: string;
  role: string;
  userId: string;
  staffRole: string;
  email: string;
}

export interface UserDelete {
  id: [];
}

export interface UserUpdate {
  username: string;
  password: string;
}


