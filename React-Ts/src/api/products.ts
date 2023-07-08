import { IProduct } from "../interfaces/products";
import instance from "./instance";
const user = JSON.parse(localStorage.getItem("user")!)
export const getAllProducts =()=>{
  return instance.get("/products")
}
export const getProduct = (id: number|string) =>{
  return instance.get(`/products/${id}`)
}
export const addProducts = (products:IProduct) =>{
  return instance.post(`/products`,products,{
    headers:{
      Authorization: `Bearer ${user.accessToken}`
    }
  })
}
export const deleteProducts = (id: number|string) =>{
  return instance.delete(`/products/${id}`,{
    headers:{
      Authorization: `Bearer ${user.accessToken}`
    }
  })
}
export const updateProducts = (product:IProduct) =>{
  return instance.put(`/products/${product._id}`, product,{
    headers:{
      Authorization: `Bearer ${user.accessToken}`
    }
  })
}