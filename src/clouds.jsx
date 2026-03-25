import "./clouds.css"
import CloudLayer from "./components/movingClouds/CloudLayer";
import CloudDescriptionBox from "./components/DescBox/CloudDescriptionBox";
import CloudBackground from "./components/clouds/CloudBackground";

export default function CloudAnimation() {
  return (
    <div className="scene-cloud-stage">
      <CloudBackground />
      <CloudLayer position="move-cloud-lower" />
      <CloudLayer position="move-cloud-upper" />
      <CloudDescriptionBox />
    </div>
  )
}
