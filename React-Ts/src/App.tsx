import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  addProducts,
  deleteProducts,
  getAllProducts,
  updateProducts,
} from "./api/products";
import { ICategory, IProduct } from "./interfaces/products";
import Dashbroash from "./pages/admin/Dashboard";
import ProductsAddPage from "./pages/admin/ProductsAdd";
import ProductsEditPage from "./pages/admin/ProductsEdit";
import ProductsManagement from "./pages/admin/ProductsManagement";
import ProductPage from "./pages/ProductPage";
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/admin/Signin";
import AdminLayoutPage from "./components/layouts/AdminLayout";
import BaseLayoutPage from "./components/layouts/BaseLayout";
import CategoryManagement from "./pages/admin/Categories/CategoryManagement";
import CategoryAdd from "./pages/admin/Categories/CategoryAdd";
import CategoryEdit from "./pages/admin/Categories/CategoryEdit";
import { addCategories, getAllCategories } from "./api/categories";
import ProductsDetail from "./pages/ProductsDetail";
import Uploadimage from "./components/Uploadimage";
function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getAllProducts();
      // console.log(data);
      setProducts(data.products);
    })();
  }, []);
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getAllCategories();
      // console.log(data);
      setCategories(data.categories);
    })();
  }, []);

  const onHandleAdd = (product: any) => {
    // console.log(product);
    addProducts(product).then(() => setProducts([...products, product]));
    navigate("/admin/products");
  };
  // console.log(products)
  const onHandleRemove = (id: number | string) => {
    deleteProducts(id).then(() =>
      setProducts(products.filter((item) => item._id !== id))
    );
  };
  const onHandleEdit = async (productUpdate: IProduct) => {
    // console.log(productUpdate);
    await updateProducts(productUpdate).then(() =>
      getAllProducts().then(({ data }) => setProducts(data))
    );
    navigate("/admin/products");
  };

  //Categories
  const onHandleAddCate = (category: any) => {
    addCategories(category).then(() =>
      setCategories([...categories, category])
    );
    // addProducts(product).then(() => setProducts([...products, product]));
    navigate("/admin/categories");
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BaseLayoutPage />}>
          <Route index element={"Home Page"} />
          <Route path="products">
            <Route index element={<ProductPage products={products} />} />
            <Route
              path=":id/productdetail"
              element={<ProductsDetail products={products} categories={categories}/>}
            />
          </Route>
          <Route path="signup" element={<SignupPage />} />
          <Route path="signin" element={<SigninPage />} />
        </Route>
        <Route path="admin" element={<AdminLayoutPage />}>
          <Route index element={<Dashbroash />} />
          <Route path="products">
            <Route
              index
              element={
                <ProductsManagement
                  products={products}
                  onRemove={onHandleRemove}
                  categories={categories}
                />
              }
            />
            <Route
              path="add"
              element={
                <ProductsAddPage onAdd={onHandleAdd} categories={categories} />
              }
            />
            <Route
              path=":id/edit"
              element={
                <ProductsEditPage products={products} onEdit={onHandleEdit} />
              }
            />
          </Route>
          <Route path="categories">
            <Route
              index
              element={<CategoryManagement categories={categories} />}
            />
            <Route
              path="add"
              element={<CategoryAdd onAddCate={onHandleAddCate} />}
            />
            <Route path=":id/edit" element={<CategoryEdit />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
