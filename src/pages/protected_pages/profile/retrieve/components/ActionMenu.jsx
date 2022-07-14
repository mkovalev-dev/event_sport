import {
  HeartOutlined,
  InfoCircleOutlined,
  PushpinOutlined,
  ReconciliationOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import { useState } from "react";

import ModalGetRecomendation from "./ModalGetRecomendation";

export default function ActionMenu() {
  const [visibleRecomendation, setVisibleModalRecomendation] = useState(false);
  return (
    <>
      <Row key="das" justify="center" gutter={[5, 15]}>
        <Col span={5} style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="action-menu-block__items"
            style={{ backgroundColor: "#E8684A" }}
          >
            <HeartOutlined style={{ fontSize: "2em", color: "#ffffff" }} />
          </div>
        </Col>
        <Col span={5} style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="action-menu-block__items"
            style={{ backgroundColor: "#FFB200" }}
          >
            <TeamOutlined style={{ fontSize: "2em", color: "#ffffff" }} />
          </div>
        </Col>
        <Col span={5} style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="action-menu-block__items"
            style={{ backgroundColor: "#3D76DD" }}
          >
            <PushpinOutlined style={{ fontSize: "2em", color: "#ffffff" }} />
          </div>
        </Col>
        <Col span={5} style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="action-menu-block__items"
            style={{ backgroundColor: "#2F32C3" }}
          >
            <InfoCircleOutlined style={{ fontSize: "2em", color: "#ffffff" }} />
          </div>
        </Col>
        <Col span={20} style={{ display: "flex", justifyContent: "center" }}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            className="action-menu-block__items"
            style={{
              backgroundColor: "rgba(208,228,255,0.4)",
              width: "100%",
            }}
            onClick={() => {
              setVisibleModalRecomendation(true);
            }}
          >
            <span style={{ fontSize: "1.1em", color: "#001D70" }}>
              <ReconciliationOutlined style={{ marginRight: "10px" }} />
              Получить рекомендации
            </span>
          </div>
        </Col>
      </Row>
      {/*<ModalGetRecomendation*/}
      {/*  visible={visibleRecomendation}*/}
      {/*  setVisible={setVisibleModalRecomendation}*/}
      {/*/>*/}
    </>
  );
}
