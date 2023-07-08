import instance from "./instance";
export const addImages = (image:any) =>{
  return instance.post("/images/upload", image,{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}