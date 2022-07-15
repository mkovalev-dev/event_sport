import { CalendarOutlined } from "@ant-design/icons";
import { Button } from "antd";
import moment from "moment";

export default function HeadNewsBlock() {
  return (
    <div className="news-block">
      <div className="news-block__item">
        {/*<img src={testImg} alt="" />*/}
        <div className="news-block__item__left-circle_1"></div>
        <div className="news-block__item__left-circle_2"></div>
        <div className="news-block__item__left-circle_3"></div>
        <div className="news-block__item__left-circle_4"></div>
        <div className="news-block__item__date">
          <p>
            <CalendarOutlined />
            {moment().format("LL")}
          </p>
        </div>
        <div className="news-block__item__info">
          <h1>Заголовок</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <Button className="participate">Участвовать</Button>
          <Button className="add-favorite">+</Button>
        </div>
      </div>
      <div
        className="news-block__item"
        style={{ width: "40%", backgroundColor: "rgba(48,62,158,0.85)" }}
      >
        {/*<img src={testImg} alt="" />*/}
        <div className="news-block__item__left-circle_1"></div>
        <div className="news-block__item__left-circle_2"></div>
        <div className="news-block__item__left-circle_3"></div>
        <div className="news-block__item__left-circle_4"></div>
        <div className="news-block__item__date">
          <p>
            <CalendarOutlined />
            {moment().format("LL")}
          </p>
        </div>
        <div className="news-block__item__info">
          <h1>Заголовок</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <Button className="participate">Участвовать</Button>
          <Button className="add-favorite">+</Button>
        </div>
      </div>
    </div>
  );
}
