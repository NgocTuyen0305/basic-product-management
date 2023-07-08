import dotenv from "dotenv";
import joi from "joi";
import Product from "../models/product";
import { productSchema } from "../schemas/products";
import Category from "../models/category"
import category from "../models/category";

dotenv.config();

export const getAll = async (req, res) => {
    try {
        // const { data: products } = await axios.get(`${process.env.API_URL}/products`);
        const products = await Product.find();
        console.log(products);
        if (products.length === 0) {
            return res.status(404).json({
                message: "Không có sản phẩm nào",
            });
        }
        return res.json({
            message: "Lấy danh sách sản phẩm thành công",
            products,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};

export const get = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate("categoryId");
        if (!product) {
            return res.json({
                message: "Không tìm thấy sản phẩm",
            });
        }
        return res.json({
            message: "Lấy sản phẩm thành công",
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const create = async (req, res) => {
    try {
        // validate
        const { error } = productSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        // const { data: product } = await axios.post(`${process.env.API_URL}/products`, req.body);
        const product = await Product.create(req.body);
        console.log("product : ",product);
        await category.findByIdAndUpdate(product.categoryId, {
            $addToSet: { products: product._id },
        });//Thêm sản phẩm vào category theo id của CategoyId
        if (!product) {
            return res.json({
                message: "Thêm sản phẩm không thành công",
            });
        }
        return res.json({
            message: "Thêm sản phẩm thành công",
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const update = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (!product) {
            return res.json({
                message: "Cập nhật sản phẩm không thành công",
            });
        }
        return res.json({
            message: "Cập nhật sản phẩm thành công",
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const remove = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.json({
            message: "Xóa sản phẩm thành công",
            product,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};