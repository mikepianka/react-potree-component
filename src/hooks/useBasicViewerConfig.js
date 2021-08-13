import { useEffect } from "react";

export default function useBasicViewerConfig(
  loaded,
  potreeLibRef,
  potreeViewerRef
) {
  useEffect(() => {
    if (loaded && potreeViewerRef.current && potreeLibRef.current) {
      const Potree = potreeLibRef.current;
      const viewer = potreeViewerRef.current;

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

      console.log("using basic Potree viewer config");
    }
  }, [loaded, potreeViewerRef, potreeLibRef]);
}
