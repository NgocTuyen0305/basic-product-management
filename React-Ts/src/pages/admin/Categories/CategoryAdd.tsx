import { Button, Form, Input } from "antd";
import React from "react";

type Props = {};

const CategoryAdd = (props: any) => {
  const onFinish = (values: any) => {
    props.onAddCate(values)
    // console.log(values);
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
        <Form.Item label="Category Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add new Category
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CategoryAdd;
