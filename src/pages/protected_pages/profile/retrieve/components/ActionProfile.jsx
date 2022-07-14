import { RadarChartOutlined } from "@ant-design/icons";
import { Col, Divider, Progress, Row } from "antd";

import ActionMenu from "./ActionMenu";

export default function ActionProfile() {
  return (
    <div className="action-menu-block">
      <Row style={{ margin: "12px" }} justify="center">
        <Col span={10} style={{ margin: "12px" }}>
          <div
            style={{
              backgroundColor: "rgba(250,154,32,0)",
              height: "114px",
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            <p
              style={{
                textAlign: "left",
                marginTop: 0,
                color: "#00318A",
                fontWeight: 500,
              }}
            >
              Заполненность профиля
            </p>
            <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <span
                style={{
                  display: "block",
                  float: "left",
                  fontWeight: "bold",
                  color: "#001D70",
                }}
              >
                30%
              </span>
              <Progress
                status="active"
                showInfo={false}
                strokeColor="#001D70"
                percent={30}
                size="small"
              />
            </div>
          </div>
        </Col>
        <Col span={10} style={{ margin: "12px" }}>
          <div
            style={{
              backgroundColor: "#FFB200",
              height: "114px",
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            <RadarChartOutlined
              style={{
                textAlign: "left",
                marginTop: 0,
                color: "#ffffff",
                float: "left",
                fontSize: "38px",
              }}
            />
            <br />
            <br />
            <p
              style={{
                textAlign: "left",
                marginTop: 0,
                color: "#ffffff",
                fontWeight: 500,
              }}
            >
              Последний анализ рекомендаций
            </p>
          </div>
        </Col>
      </Row>
      <Divider style={{ margin: "20px 0" }} />
      <ActionMenu />
    </div>
  );
}
