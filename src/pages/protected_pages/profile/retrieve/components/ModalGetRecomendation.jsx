import { Divider, Form, Input, Modal } from "antd";

export default function ModalGetRecomendation({ visible, setVisible }) {
  return (
    <Modal
      title="Введите параметры для расчета"
      visible={visible}
      onCancel={() => {
        setVisible(false);
      }}
      width="90%"
      footer={[]}
      className="modal-generate-recomendation"
    >
      <Form layout="vertical">
        <Form.Item className="input-data-for-rec" label="Фамилия">
          <Input placeholder="..." />
        </Form.Item>
        <Form.Item className="input-data-for-rec" label="Имя">
          <Input placeholder="..." />
        </Form.Item>
        <Form.Item className="input-data-for-rec" label="Отчество">
          <Input placeholder="..." />
        </Form.Item>
        <Divider />
      </Form>
    </Modal>
  );
}
