import "./clouds.css"

export default function CloudAnimation() {
  return (
    <div className="cloud-container">
      <div className="cloud cloud-bottom">
        <img src="/cloud1.png" alt="" className="cloud-move-right" style={{ "--i": 1 }} />
        <img src="/cloud2.png" alt="" className="cloud-move-left" style={{ "--i": 2 }} />
        <img src="/cloud3.png" alt="" className="cloud-move-right" style={{ "--i": 3 }} />
        <img src="/cloud4.png" alt="" className="cloud-move-left" style={{ "--i": 4 }} />
        <img src="/cloud5.png" alt="" className="cloud-move-right" style={{ "--i": 5 }} />
      </div>
      <div className="cloud cloud-top">
        <img src="/cloud1.png" alt="" className="cloud-move-right" style={{ "--i": 1 }} />
        <img src="/cloud2.png" alt="" className="cloud-move-left" style={{ "--i": 2 }} />
        <img src="/cloud3.png" alt="" className="cloud-move-right" style={{ "--i": 3 }} />
        <img src="/cloud4.png" alt="" className="cloud-move-left" style={{ "--i": 4 }} />
        <img src="/cloud5.png" alt="" className="cloud-move-right" style={{ "--i": 5 }} />
      </div>
    </div>
  )
}