export interface RoleInterface {
  id: number;
  name: string;
}

export class Role implements RoleInterface {
  id: number = 0;
  name: string = '';
  constructor() { }
}

export interface UserInterface {
  id: number;
  email: string;
  passwordHash: string;
  role: Role;
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
}

export class User implements UserInterface {
  id: number = 0;
  email: string = '';
  passwordHash: string = '';
  role: Role = new Role();
  firstName: string = '';
  lastName: string = '';
  company: string = '';
  phone: string = '';
  constructor() { }
}