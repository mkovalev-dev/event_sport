import {
  AppstoreOutlined,
  EnvironmentOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

import { CloseWithAuthPathConstants } from "../../../utils/constants/routesConst";

export default function BottomMenu() {
  const navigate = useNavigate();

  return (
    <div className="bottom-menu-block">
      <Row justify={"center"} gutter={25}>
        <Col span={6}>
          <div className="bottom-menu-block__item">
            <HomeOutlined style={{ fontSize: "2em", color: "#001D70" }} />
          </div>
        </Col>
        <Col span={6}>
          <div className="bottom-menu-block__item bottom-menu-block__item__active">
            <UserOutlined
              style={{ fontSize: "2em", color: "#001D70" }}
              onClick={() => {
                navigate(`/profile/${1}`);
              }}
            />
          </div>
        </Col>
        <Col span={6}>
          <div className="bottom-menu-block__item">
            <EnvironmentOutlined
              style={{ fontSize: "2em", color: "#001D70" }}
              onClick={() => {
                navigate(`/${CloseWithAuthPathConstants.YMAP_ORG}`);
              }}
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
