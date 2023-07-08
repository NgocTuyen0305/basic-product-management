import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Col, Typography, Tag } from "antd";

const { Title } = Typography;
type Props = {};

const ProductsDetail = (props: any) => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState<any>({});
  const [categories, setCategories] = useState<any>({});

  useEffect(() => {
    (async () => {
      const newData = await props.products.find(
        (product: any) => product._id === id
      );
      setProductDetail(newData);
    })();
  }, [props]);
  useEffect(() => {
    (async () => {
      const productCate = await props.categories.find(
        (proCate: any) => proCate._id === productDetail.categoryId
      );
      setCategories(productCate);
    })();
  }, [props]);
  console.log(productDetail);

  return (
    <div style={{ padding: "24px" }}>
      {productDetail ?(
        <Card>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={24} md={12} lg={8}>
            <img
              src={productDetail.image}
              style={{ maxWidth: "100%" }}
              alt="product"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={16}>
            <Title level={2}>{productDetail.name}</Title>
            <Title level={4} style={{color: 'red'}}>{productDetail.price} $</Title>
            <p>
             {productDetail.description}
            </p>
            {categories ?(
              <Tag color="magenta" style={{fontSize: '16px'}}>{categories.name}</Tag>
            ):(
              <p>No Category</p>
            )}
          </Col>
        </Row>
      </Card>
      ): (
        <p>Product not found.</p>
      )}
      
    </div>
  );
};

export default ProductsDetail;
