import {
  AppstoreOutlined,
  EnvironmentOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";

export default function BottomMenu() {
  return (
    <div className="bottom-menu-block">
      <Row justify={"center"} gutter={25}>
        <Col span={6}>
          <div className="bottom-menu-block__item">
            <HomeOutlined style={{ fontSize: "2em", color: "#001D70" }} />
          </div>
        </Col>
        <Col span={6}>
          <div className="bottom-menu-block__item active">
            <UserOutlined style={{ fontSize: "2em", color: "#001D70" }} />
          </div>
        </Col>
        <Col span={6}>
          <div className="bottom-menu-block__item">
            <EnvironmentOutlined
              style={{ fontSize: "2em", color: "#001D70" }}
            />
          </div>
        </Col>
        <Col span={6}>
          <div className="bottom-menu-block__item">
            <AppstoreOutlined style={{ fontSize: "2em", color: "#001D70" }} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
