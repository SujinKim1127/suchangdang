import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";

export default function Map() {
  // instead of window.naver.maps
  const navermaps = useNavermaps();

  return (
    <NaverMap
      defaultCenter={new navermaps.LatLng(37.5178199, 127.0518526)}
      defaultZoom={16}
    >
      <Marker defaultPosition={new navermaps.LatLng(37.5178199, 127.0518526)} />
    </NaverMap>
  );
}

<MapDiv
  style={{
    width: "100%",
    height: "600px",
  }}
>
  <Map />
</MapDiv>;
