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
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              className="welcome-block__content__col-logo"
            >
              <img src={logoDef} alt="12" style={{ width: "75%" }} />
            </Col>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              className="welcome-block__content__col-form"
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
          <div className="welcome-block__circular-arrow"></div>
        </div>
      </QueueAnim>
    </div>
  );
}
