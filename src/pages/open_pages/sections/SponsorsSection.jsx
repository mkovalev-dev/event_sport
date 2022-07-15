import { Col, Row } from "antd";
import QueueAnim from "rc-queue-anim";
import { OverPack } from "rc-scroll-anim";

import fond from "../../../resources/img/sponsors/fond.png";

export default function SponsorsSection() {
  return (
    <div id="sponsors" className="sponsors-block">
      <h2 className="about-block__h2">Спонсоры</h2>
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
            <Col xs={16} sm={16} md={8} lg={4} xl={4}>
              <div className="sponsors-block__item">
                <img src={fond} alt="fond" />
              </div>
            </Col>
            <Col xs={16} sm={16} md={8} lg={4} xl={4}>
              <div className="sponsors-block__item"></div>
            </Col>
            <Col xs={16} sm={16} md={8} lg={4} xl={4}>
              <div className="sponsors-block__item"></div>
            </Col>
            <Col xs={16} sm={16} md={8} lg={4} xl={4}>
              <div className="sponsors-block__item"></div>
            </Col>
          </Row>
        </QueueAnim>
      </OverPack>
    </div>
  );
}
