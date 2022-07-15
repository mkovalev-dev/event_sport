import { Button, Form, Input, Radio } from "antd";

export default function FormRegistration() {
  return (
    <Form>
      <Form.Item>
        <Input placeholder="E-mail..." className="form-login-block__login" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="Фамилия..." className="form-login-block__login" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="Имя..." className="form-login-block__login" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="Отчество..." className="form-login-block__login" />
      </Form.Item>
      <Form.Item>
        <Radio.Group defaultValue="a">
          <Radio.Button value="a">Спортсмен</Radio.Button>
          <Radio.Button value="b">Тренер</Radio.Button>
          <Radio.Button value="c">Площадка</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          block
          className="form-login-block__login__button"
        >
          Регистрация
        </Button>
      </Form.Item>
    </Form>
  );
}
