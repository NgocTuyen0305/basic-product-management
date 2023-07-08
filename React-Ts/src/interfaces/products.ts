export interface IProduct{
  _id: number | string,
  name: string,
  price: number,
  image: string,
  description:string,
  categoryId: number | string,
}
export interface ICategory{
  _id: number | string,
  name: string,
}