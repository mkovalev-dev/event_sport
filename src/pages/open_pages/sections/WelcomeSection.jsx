import { Col, Divider, Row } from "antd";

import caledar from "../../../resources/img/welcome_section/calendar.png";

export default function WelcomeSection() {
  return (
    <div className="welcome-block">
      <div className="welcome-block__content">
        <Row className="welcome-block__row">
          <Col span={11}>
            <img
              src={caledar}
              alt="calendar"
              style={{
                width: "44%",
                position: "absolute",
                top: "28%",
                left: "28%",
              }}
            />
          </Col>
          <Col>
            <Divider className="welcome-block__divider" type="vertical" />
          </Col>
          <Col span={11}>LOGIN</Col>
        </Row>
      </div>
    </div>
  );
}
