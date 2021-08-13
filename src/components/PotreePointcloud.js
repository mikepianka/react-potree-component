import { useEffect, useRef, useState } from "react";

export default function PotreePointcloud() {
  const iframe = useRef(null);
  const potreeLib = useRef(null);
  const potreeViewer = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // initialize a reference to the Potree lib and viewer
  useEffect(() => {
    if (iframe.current && loaded) {
      potreeLib.current = iframe.current.contentDocument.defaultView.Potree;
      potreeViewer.current = iframe.current.contentDocument.defaultView.viewer;
    }
  }, [loaded]);

  // viewer config
  useEffect(() => {
    if (loaded && potreeViewer.current && potreeLib.current) {
      const Potree = potreeLib.current;
      const viewer = potreeViewer.current;

      viewer.setEDLEnabled(true);
      viewer.setFOV(60);
      viewer.setPointBudget(1_000_000);
      viewer.loadSettingsFromURL();
      viewer.setBackground("gradient");
      viewer.setDescription("potree component");

      const controls = new Potree.EarthControls(viewer);
      viewer.setControls(controls);

      viewer.loadGUI(() => {
        viewer.setLanguage("en");
        // $("#menu_tools").next().show();
        // $("#menu_clipping").next().show();
        // viewer.toggleSidebar();
      });

      console.log("Potree viewer config complete");
    }
  }, [loaded]);

  // load pointcloud
  useEffect(() => {
    if (loaded && potreeViewer.current && potreeLib.current) {
      const Potree = potreeLib.current;
      const viewer = potreeViewer.current;

      Potree.loadPointCloud(
        "./pointclouds/vol_total/cloud.js",
        "sigeom.sa",
        (e) => {
          let scene = viewer.scene;
          let pointcloud = e.pointcloud;

          let material = pointcloud.material;
          material.size = 1;
          material.pointSizeType = Potree.PointSizeType.FIXED;
          material.shape = Potree.PointShape.CIRCLE;

          scene.addPointCloud(pointcloud);

          viewer.fitToScreen();
        }
      );
    }
  }, [loaded]);

  return (
    <div style={potreePointcloudStyle}>
      <iframe
        title="3D Pointcloud"
        id="potreeIframe"
        src="potree/viewer.html"
        ref={iframe}
        style={iframeStyle}
        onLoad={() => setLoaded(true)}
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
