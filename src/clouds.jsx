import "./clouds.css"
import StarsGarland from "./StarsGarland";

export default function CloudAnimation() {
  return (
    <div className="cloud-container">
      <StarsGarland />
      <div className="cloud cloud-bottom">
        <img src="/cloud1.png" alt="" className="cloud-move-right" />
        <img src="/cloud2.png" alt="" className="cloud-move-left" />
        <img src="/cloud3.png" alt="" className="cloud-move-right" />
        <img src="/cloud4.png" alt="" className="cloud-move-left" />
        <img src="/cloud5.png" alt="" className="cloud-move-right" />
      </div>
      <div className="cloud cloud-top">
        <img src="/cloud1.png" alt="" className="cloud-move-right" />
        <img src="/cloud2.png" alt="" className="cloud-move-left" />
        <img src="/cloud3.png" alt="" className="cloud-move-right" />
        <img src="/cloud4.png" alt="" className="cloud-move-left" />
        <img src="/cloud5.png" alt="" className="cloud-move-right" />
      </div>
      <img className="cloud-desc" src="/Cloud-box.svg" alt="" />
    </div>
  )
}