import { Col, Row } from "antd";
import { NavHashLink } from "react-router-hash-link";
import Scrollspy from "react-scrollspy";

export default function Menu() {
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Scrollspy
      items={["section-1", "section-2", "section-3"]}
      currentClassName="is-current"
      offset={-56}
      className="welcome-block__menu"
    >
      <Row justify="center">
        <Col span={4} className="welcome-block__menu__item">
          <NavHashLink activeClassName="selected" smooth to="/#login">
            Главная
          </NavHashLink>
        </Col>
        <Col span={4} className="welcome-block__menu__item">
          <NavHashLink
            activeClassName="selected"
            smooth
            to="/#about"
            scroll={(el) => scrollWithOffset(el, 95)}
          >
            О нас
          </NavHashLink>
        </Col>
        <Col span={4} className="welcome-block__menu__item">
          <NavHashLink
            activeClassName="selected"
            smooth
            to="/#sponsors"
            scroll={(el) => scrollWithOffset(el, 95)}
          >
            Спонсоры
          </NavHashLink>
        </Col>
        <Col span={4} className="welcome-block__menu__item">
          <NavHashLink
            activeClassName="selected"
            smooth
            to="/#contact"
            scroll={(el) => scrollWithOffset(el, 95)}
          >
            Контакты
          </NavHashLink>
        </Col>
      </Row>
    </Scrollspy>
  );
}
