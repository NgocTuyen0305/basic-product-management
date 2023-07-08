import React from "react";
import { Button, Card, List } from "antd";
type Props = {};

const ProductPage = (props: any) => {
  // console.log(props);
  const data = props.products.map((product: any) => {
    return {
      title: product.name,
      ...product,
    };
  });
  // console.log(data);

  return (
    <div>
      <h1>All Products</h1>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={(item: any) => (
          <List.Item>
            <Card title={item.title}>
              <img
                src={item.image}
                alt=""
                style={{ width: "300px", objectFit: "cover" }}
              />
              <span style={{ color: "red", fontSize: "18px" }}>
                {item.price}$
              </span>
              <a href={`products/${item._id}/productdetail`}>
                <Button type="primary">View</Button>
              </a>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ProductPage;
