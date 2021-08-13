import { useEffect, useRef, useState } from "react";
const Potree = window.Potree;
const THREE = window.THREE;

export default function PotreePointcloud() {
  const [potreeViewer, setPotreeViewer] = useState(null);
  const potreeContainer = useRef(null);
  const potreeRenderArea = useRef(null);

  useEffect(() => {
    if (potreeContainer.current && potreeRenderArea.current) {
      const viewer = new Potree.Viewer(potreeRenderArea.current);
      setPotreeViewer(viewer);

      viewer.setEDLEnabled(false);
      viewer.setFOV(60);
      viewer.setPointBudget(1_000_000);
      viewer.loadSettingsFromURL();
      viewer.setBackground("gradient");

      viewer.loadGUI(() => {
        viewer.setLanguage("en");
        // $("#menu_tools").next().show();
        // $("#menu_scene").next().show();
        // viewer.toggleSidebar();
      });

      Potree.loadPointCloud(
        "potree/pointclouds/vol_total/cloud.js",
        "Sorvilier",
        (e) => {
          const scene = viewer.scene;
          const pointcloud = e.pointcloud;

          const material = pointcloud.material;
          material.size = 1;
          material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
          material.shape = Potree.PointShape.SQUARE;

          scene.addPointCloud(pointcloud);

          viewer.fitToScreen();
        }
      );
    }
  }, []);

  return (
    <div
      ref={potreeContainer}
      className="potree_container"
      style={{ potreePointcloudStyle }}
    >
      <div ref={potreeRenderArea} id="potree_render_area"></div>
      <div id="potree_sidebar_container"> </div>
    </div>
  );
}

const potreePointcloudStyle = {
  height: "100%",
  width: "100%",
  margin: 0,
  padding: 0,
};
