import { LeftOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import QueueAnim from "rc-queue-anim";
import { useState } from "react";

import logoDef from "../../../resources/img/img.png";
import FormLogin from "../components/FormLogin";
import FormRegistration from "../components/FormRegistration";
import Menu from "../components/Menu";

export default function WelcomeSection() {
  const [visibleRegForm, setVisibleRegForm] = useState(false);
  return (
    <div id="login">
      <QueueAnim delay={2500}>
        <Menu key="menu" />
      </QueueAnim>
      <div className="welcome-block"></div>
      <QueueAnim delay={2500} ease={["easeOutQuart", "easeInOutQuart"]}>
        <div key="content" className="welcome-block__content">
          <Row style={{ height: "100%" }}>
            <Col
              span={12}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={logoDef} alt="12" style={{ width: "75%" }} />
            </Col>
            <Col
              span={12}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderLeft: " 1px solid",
                borderColor: "rgba(3,0,31,0.1)",
              }}
            >
              <h2
                style={{ color: "rgba(3, 0, 31, 0.95)", textAlign: "center" }}
              >
                {visibleRegForm ? (
                  <>
                    <Button
                      type="text"
                      onClick={() => {
                        setVisibleRegForm(false);
                      }}
                    >
                      <LeftOutlined />
                    </Button>
                    Регистрация
                  </>
                ) : (
                  "Авторизация"
                )}
              </h2>

              <div
                className="about-block__title-bar"
                style={{ marginBottom: "20px", width: "250px" }}
              ></div>
              {visibleRegForm ? (
                <>
                  <FormRegistration setVisibleRegForm={setVisibleRegForm} />
                </>
              ) : (
                <FormLogin setVisibleRegForm={setVisibleRegForm} />
              )}
            </Col>
          </Row>
        </div>
      </QueueAnim>
      <div className="welcome-block__circular-arrow"></div>
    </div>
  );
}
