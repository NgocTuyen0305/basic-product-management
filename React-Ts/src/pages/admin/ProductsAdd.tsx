import { Button, Checkbox, Form, Input, TreeSelect, Upload } from "antd";
import React, { useEffect, useRef, useState } from "react";
import CloudinaryUpload from "../../components/Uploadimage";

const { TextArea } = Input;
type Props = {};

const ProductsAdd = (props: any) => {
  // console.log(props);

  const [sectionValue, setSecsitonValue] = useState("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const handleImageUploadSuccess = (url: string) => {
    setImageUrl(url);
  };
  const onFinish = (values: any) => {
    const newData = {
      ...values,
      image: imageUrl,
    };
    // console.log(newData);
    props.onAdd(newData);
  };
  const newdata = props.categories.map((category: any) => {
    return {
      title: category.name,
      value: category._id,
    };
  });
  // console.log(newdata);

  const onchangeValue = (value: any) => {
    setSecsitonValue(value);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name Product"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập trường name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price Product"
          name="price"
          rules={[{ required: true, message: "Vui lòng nhập trường price!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Categories" name="categoryId">
          <TreeSelect
            showSearch
            style={{ width: "100%" }}
            value={sectionValue}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Chọn danh mục sản phẩm"
            allowClear
            treeData={newdata}
            treeDefaultExpandAll
            onChange={onchangeValue}
            // treeData={}
          />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item name="image" label="image">
          <CloudinaryUpload onImageUploadSuccess={handleImageUploadSuccess} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add new Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductsAdd;
