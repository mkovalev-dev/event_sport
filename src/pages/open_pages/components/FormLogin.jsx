import { Button, Form, Input } from "antd";

export default function FormLogin({ setVisibleRegForm }) {
  return (
    <Form>
      <Form.Item>
        <Input placeholder="Логин..." className="form-login-block__login" />
      </Form.Item>
      <Form.Item>
        <Input.Password
          placeholder="Пароль..."
          className="form-login-block__login"
        />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          block
          className="form-login-block__login__button"
        >
          Войти
        </Button>
      </Form.Item>
      <Button
        block
        className="form-login-block__login__button__registration"
        onClick={() => {
          setVisibleRegForm(true);
        }}
      >
        Регистрация
      </Button>
    </Form>
  );
}
