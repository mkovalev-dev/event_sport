import { Layout } from "antd";
import moment from "moment";

import HeadNewsBlock from "./components/HeadNewsBlock";

const { Content } = Layout;

export default function HomeProtected() {
  return (
    <Layout className="protected-block">
      <Content className="protected-block__content">
        <HeadNewsBlock />
        <div
          style={{
            display: "inline-block",
            width: "100%",
            paddingLeft: "11.5%",
          }}
        >
          <h3>Весь {moment().format("MMMM")}</h3>
        </div>
      </Content>
    </Layout>
  );
}
