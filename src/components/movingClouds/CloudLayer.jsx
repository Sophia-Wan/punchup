import { cloudImages } from "./movingClouds";
import "../movingClouds/movingClouds.css";

const moveClassByIndex = [
  "move-cloud-right",
  "move-cloud-left",
  "move-cloud-right",
  "move-cloud-left",
  "move-cloud-right",
];

export default function CloudLayer({ position }) {
  return (
    <div className={`move-cloud-wrap ${position}`}>
      {cloudImages.map((src, index) => (
        <img
          key={`${position}-${src}`}
          src={src}
          alt=""
          className={moveClassByIndex[index] || "move-cloud-right"}
        />
      ))}
    </div>
  );
}
