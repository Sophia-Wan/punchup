import "./clouds.css"
import CloudLayer from "./components/clouds/CloudLayer";
import CloudDescriptionBox from "./components/clouds/CloudDescriptionBox";
import CloudBackground from "./components/clouds/CloudBackground";

export default function CloudAnimation() {
  return (
    <div className="cloud-container">
      <CloudBackground />
      <CloudLayer position="cloud-bottom" />
      <CloudLayer position="cloud-top" />
      <CloudDescriptionBox />
    </div>
  )
}