import { useEffect, useRef, useState } from "react";

export default function PotreePointcloud() {
  const potreeIframe = useRef(null);

  return (
    <div style={potreePointcloudStyle}>
      <iframe
        title="3D Pointcloud"
        id="potree"
        src="potree/viewer.html"
        ref={potreeIframe}
        style={iframeStyle}
      />
    </div>
  );
}

const potreePointcloudStyle = {
  display: "flex",
  height: "600px",
  width: "800px",
  margin: 0,
  padding: 0,
};

const iframeStyle = {
  width: "100%",
  height: "100%",
  border: 0,
};
