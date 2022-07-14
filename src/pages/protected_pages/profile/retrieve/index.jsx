import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import picture from "../../../../resources/img/picture.png";
import BottomMenu from "../../bottomMenu";
import ActionProfile from "./components/ActionProfile";

export default function ProfileRetrieve() {
  return (
    <div className="profile-retrieve-block">
      <img src={picture} alt="12" style={{ width: "200%" }} />
      <div className="profile-retrieve-block__profile-info">
        <div style={{ display: "block", float: "left" }}>
          <Avatar size={64} icon={<UserOutlined />} />
          <span
            style={{
              marginLeft: "15px",
              fontWeight: 400,
              fontSize: "16px",
              color: "#001D70",
            }}
          >
            Иванов Иван
          </span>
        </div>
        <LogoutOutlined
          style={{
            marginTop: "21px",
            display: "block",
            float: "right",
            marginLeft: "15px",
            fontWeight: 400,
            fontSize: "22px",
            color: "#001D70",
          }}
        />
      </div>
      <ActionProfile />
      <BottomMenu />
    </div>
  );
}
