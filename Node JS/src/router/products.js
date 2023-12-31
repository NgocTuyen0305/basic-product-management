import express from "express"
import { create,get,getAll,update,remove } from "../controllers/products";
import { checkPermission } from "../middlewares/checkpermission";
const router =  express.Router();
router.get("/products",getAll);
router.get("/products/:id",get);  
router.post("/products/",checkPermission,create);
router.put("/products/:id",checkPermission,update);
router.delete("/products/:id",checkPermission,remove);
export default router;