import { Button, Form, Input } from "antd";

export default function FormRegistration() {
  return (
    <Form>
      <Form.Item>
        <Input placeholder="E-mail..." className="form-login-block__login" />
      </Form.Item>
      <Form.Item>
        <Input.Password
          placeholder="Пароль..."
          className="form-login-block__login"
        />
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
