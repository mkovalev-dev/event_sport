import YaMap from "../../../components/YaMap";
import BottomMenu from "../bottomMenu";

export default function OrgMap() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <YaMap />
      </div>
      <BottomMenu />
    </>
  );
}
