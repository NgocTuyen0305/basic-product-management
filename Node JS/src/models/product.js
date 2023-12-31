import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name:{
    type: String
  },
  price:{
    type: Number
  },
  image:{
    type: String
  },
  description:{
    type: String
  },
  categoryId:{
    type: mongoose.Types.ObjectId,
    ref: "Category"
  },
});
export default mongoose.model("Product", productSchema)