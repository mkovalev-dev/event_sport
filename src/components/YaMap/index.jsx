import { Spin } from "antd";
import { useEffect, useState } from "react";
import {
  Clusterer,
  GeolocationControl,
  Map,
  Placemark,
  YMaps,
} from "react-yandex-maps";

export default function YaMap() {
  const [mapData, setMapData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://apidata.mos.ru/v1/datasets/629/features?api_key=612d569d3564e1d85c49ed02f6479688"
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setMapData(data.features);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <YMaps>
          <Map
            width="100%"
            height="50%"
            defaultState={{
              center: [55.751574, 37.573856],
              zoom: 9,
            }}
          >
            <GeolocationControl
              options={{
                float: "left",
              }}
            />

            <Clusterer
              options={{
                preset: "islands#nightClusterIcons",
                groupByCoordinates: false,
              }}
            >
              {mapData.map((data, index) => {
                console.log([
                  data.geometry.coordinates[0][1],
                  data.geometry.coordinates[0][0],
                ]);
                return (
                  <Placemark
                    options={{
                      preset: "islands#blueSportIcon",
                    }}
                    key={index}
                    geometry={[
                      data.geometry.coordinates[0][1],
                      data.geometry.coordinates[0][0],
                    ]}
                  />
                );
              })}
            </Clusterer>
          </Map>
        </YMaps>
      )}
    </>
  );
}
