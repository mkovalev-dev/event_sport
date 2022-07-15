import { Col, Row } from "antd";
import QueueAnim from "rc-queue-anim";
import { OverPack } from "rc-scroll-anim";

import aiIcon from "../../../resources/img/about_us/ai_icon.png";
import personalProgram from "../../../resources/img/about_us/personal_program.png";
import sportEvent from "../../../resources/img/about_us/sport_event.png";

export default function AboutSection() {
  return (
    <div id="about" className="about-block">
      <h2 className="about-block__h2">О нас</h2>
      <div className="about-block__title-bar"></div>
      <OverPack style={{ overflow: "hidden", width: "100%" }} playScale={0.3}>
        <QueueAnim
          key="0"
          leaveReverse
          interval={300}
          duration={600}
          style={{
            float: "left",
            position: "relative",
            width: "100%",
          }}
        >
          <Row
            key="items"
            justify="center"
            gutter={[24, 24]}
            style={{ marginTop: "5%" }}
          >
            <Col xs={16} sm={16} md={8} lg={8} xl={4}>
              <div className="about-block__item">
                <img src={aiIcon} alt="ai_icon" />
                <h2>Интелектуальные технологии в спорте</h2>
                <p>
                  Краткое описание Краткое описание Краткое описание Краткое
                  описание Краткое
                </p>
              </div>
            </Col>
            <Col xs={16} sm={16} md={8} lg={8} xl={4}>
              <div className="about-block__item">
                <img src={personalProgram} alt="ai_icon" />
                <h2>Заголовок</h2>
                <p>
                  Краткое описание Краткое описание Краткое описание Краткое
                  описание Краткое
                </p>
              </div>
            </Col>
            <Col xs={16} sm={16} md={16} lg={8} xl={4}>
              <div className="about-block__item">
                <img src={sportEvent} alt="ai_icon" />
                <h2>Заголовок</h2>
                <p>
                  Краткое описание Краткое описание Краткое описание Краткое
                  описание Краткое
                </p>
              </div>
            </Col>
          </Row>
        </QueueAnim>
      </OverPack>
    </div>
  );
}
