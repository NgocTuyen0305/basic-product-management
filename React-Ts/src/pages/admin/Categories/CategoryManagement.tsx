import React from "react";
import { Button, Popconfirm, Space, Table, Tag, message } from "antd";
import type { ColumnsType } from "antd/es/table";

type Props = {};
interface DataType {
  key: string;
  title: string;
}
const CategoryManagement = (props: any) => {
  const data = props.categories.map((category: any) => {
    return {
      key: category._id,
      ...category,
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
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Popconfirm
            placement="top"
            title="Bạn có muốn xóa không?"
            description=""
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
          <a href={`categories/${record.key}/edit`}>
            <Button type="primary">Edit</Button>
          </a>
        </Space>
      ),
    },
  ];
  return <div><Table columns={columns} dataSource={data} /></div>;
};

export default CategoryManagement;
