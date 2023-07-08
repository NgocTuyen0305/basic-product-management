import {
  Button,
  Popconfirm,
  Space,
  Table,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { IProduct } from "../../interfaces/products";

interface DataType {
  key: string;
  title: string;
}

const ProductsManagement = (props: any) => {
   
   const getcategoryName =(categoryId:any)=>{
    const catagory = props.categories.find((item:any)=> item._id === categoryId);
    return catagory ? catagory.name : "unknown"
   }
  const removeProduct = (id: string | number) => {
    props.onRemove(id);
  };
  const data = props.products.map((product: any) => {
    return {
      key: product._id,
      ...product,
      categoryName: getcategoryName(product.categoryId)
    };
  });
  
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Categories",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image: string) => (
        <img src={image} alt="Product" style={{ maxHeight: "100px" }} />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Popconfirm
            placement="top"
            title="Bạn có muốn xóa không?"
            description=""
            onConfirm={() => {
              removeProduct(record.key);
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
          <a href={`products/${record.key}/edit`}>
            <Button type="primary">Edit</Button>
          </a>
        </Space>
      ),
    },
  ];
  // console.log(columns);

  return (
    <div>
      <Table columns={columns} dataSource={data} />
     
    </div>
  );
};

export default ProductsManagement;
