import { Progress } from "antd";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <>
        <Progress percent={30} />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />
      </>
    </div>
  );
};

export default Dashboard;
