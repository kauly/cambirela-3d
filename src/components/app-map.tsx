"use client";

import { useCallback, useState } from "react";
import { Map3D, Map3DCameraProps } from "./map-3d";

const INITIAL_VIEW_PROPS = {
  center: {
    lat: -27.716403922442222,
    lng: -48.67150410794675,
    altitude: 414.25671753147935,
  },
  range: 4335.197518905625,
  heading: 159.05837008985162,
  tilt: 80.01529956954616,
  roll: 0,
};

export default function AppMap() {
  const [viewProps, setViewProps] = useState(INITIAL_VIEW_PROPS);

  const handleCameraChange = useCallback((props: Map3DCameraProps) => {
    //  console.log("🚀 ~ handleCameraChange ~ props:", props);
    setViewProps((oldProps) => ({ ...oldProps, ...props }));
  }, []);

  return (
    <Map3D
      {...viewProps}
      onCameraChange={handleCameraChange}
      defaultLabelsDisabled
    />
  );
}
