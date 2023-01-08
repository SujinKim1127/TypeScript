import React from "react";
import { MapMarker, Map } from "react-kakao-maps-sdk";
import styled from "styled-components";

const Whole = styled.div`
  .map {
    margin-top: 5px;
  }

  .account {
    padding-top: 30px;
    font-weight: 600;
  }
`;

const InfoMarkerdiv = styled.div`
  padding: 10px;
`;

function MarkerswithInfos() {
  return (
    <Whole>
      <div className="account">Markers with Info</div>
      <Map
        className="map"
        center={{ lat: 37.57657, lng: 126.982066 }}
        style={{ width: "800px", height: "500px" }}
        level={5}
      >
        <MapMarker position={{ lat: 37.579689, lng: 126.977055 }}>
          <InfoMarkerdiv>경복궁</InfoMarkerdiv>
        </MapMarker>
        <MapMarker
          position={{ lat: 37.570535, lng: 126.968619 }}
        >
          <InfoMarkerdiv>경희궁</InfoMarkerdiv>
        </MapMarker>
        <MapMarker position={{ lat: 37.578942, lng: 126.991140 }}>
          <InfoMarkerdiv>창덕궁</InfoMarkerdiv>
        </MapMarker>
        <MapMarker position={{ lat: 37.578343, lng: 126.994860 }}>
          <InfoMarkerdiv>창경궁</InfoMarkerdiv>
        </MapMarker>
        <MapMarker position={{ lat: 37.573599, lng: 126.994744 }}>
          <InfoMarkerdiv>종묘</InfoMarkerdiv>
        </MapMarker>
      </Map>
    </Whole>
  );
}

export default MarkerswithInfos;
