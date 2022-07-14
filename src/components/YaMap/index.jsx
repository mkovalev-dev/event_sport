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
  useEffect(() => {
    fetch(
      "https://apidata.mos.ru/v1/datasets/629/features?api_key=612d569d3564e1d85c49ed02f6479688"
    )
      .then((response) => response.json())
      .then((data) => {
        setMapData(data.features);
      });
  }, []);

  return (
    <>
      <YMaps
        query={{
          ns: "use-load-option",
          load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
        }}
      >
        <Map
          width="100%"
          height="100%"
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 9,
          }}
        >
          <Clusterer
            options={{
              preset: "islands#nightClusterIcons",
              groupByCoordinates: false,
            }}
          >
            {mapData.map((data, index) => {
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
                  properties={{
                    balloonContentHeader: data.properties.Attributes.ShortName,
                  }}
                />
              );
            })}
          </Clusterer>
        </Map>
      </YMaps>
    </>
  );
}
