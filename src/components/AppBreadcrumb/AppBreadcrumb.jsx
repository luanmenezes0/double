import React from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const AppBreadcrumb = ({ location }) => {
  let local;
  if (location.pathname) {
    local = "Tickets";
  }
  return (
    <div style={{ backgroundColor: "white", padding: "10px 24px" }}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">
            <HomeOutlined />
          </Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item>
          <span style={{ fontSize: "20px", fontWeight: "700" }}>{local}</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default AppBreadcrumb;
