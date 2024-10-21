export interface Signup extends signin {
    name:string;
    rePassword:string;
    phone:string
}
export interface signin{
    email:string;
    password:string;
}

export interface tokenData {
  id: string;
  name: string;
  role: string;
  iat: string;
  exp: string;
}