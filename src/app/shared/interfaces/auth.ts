export interface Signup extends signin {
  name:string;
  rePassword:string;
  phone:string
}
export interface signin extends email{
    
  password:string;
}
export interface email {
  email:string;
}
export interface tokenData {
  id: string;
  name: string;
  role: string;
  iat: string;
  exp: string;
}
export interface PlantData {
  name: string;
  temperature: number; // Temperature in Celsius
  humidity: number;    // Humidity percentage
  water: number;       // Water percentage
}

export interface rePassword extends email {
  newPassword: string;
}