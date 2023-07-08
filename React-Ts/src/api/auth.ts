import { ISignin } from "../interfaces/signin";
import instance from "./instance";
export const signin =(user:ISignin)=>{
  return instance.post("/signin", user)
}