import { ICategory } from "../interfaces/products";
import instance from "./instance";
const user = JSON.parse(localStorage.getItem("user")!)
export const getAllCategories =()=>{
  return instance.get("/categories")
}
export const getCategories = (id: number|string) =>{
  return instance.get(`/categories/${id}`)
}
export const addCategories = (categories:ICategory) =>{
  return instance.post(`/categories`,categories,{
    headers:{
      Authorization: `Bearer ${user.accessToken}`
    }
  })
}
export const deleteCategories = (id: number|string) =>{
  return instance.delete(`/categories/${id}`,{
    headers:{
      Authorization: `Bearer ${user.accessToken}`
    }
  })
}
export const updateProducts = (product:ICategory) =>{
  return instance.put(`/categories/${product._id}`, product,{
    headers:{
      Authorization: `Bearer ${user.accessToken}`
    }
  })
}