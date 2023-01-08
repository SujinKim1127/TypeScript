import React from "react";
import { MapMarker, Map } from "react-kakao-maps-sdk";
import styled from "styled-components";

const Whole = styled.div`
  .map {
    margin-top: 12px;
  }

  .account {
    font-weight: 600;
  }
`;

const InfoMarkerdiv = styled.div`
  padding: 10px;
`;

function MarkerwithInfo() {
  return (
    <Whole>
      <span className="account">Marker with Info</span>
      <Map className="map"
        center={{ lat: 37.579689, lng: 126.977055 }}
        style={{ width: "800px", height: "500px" }}
      >
        <MapMarker position={{ lat: 37.579689, lng: 126.977055 }}>
          <InfoMarkerdiv>경복궁</InfoMarkerdiv>
        </MapMarker>
      </Map>
    </Whole>
  );
}

export default MarkerwithInfo;
