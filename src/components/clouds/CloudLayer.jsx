import { cloudImages } from "./cloudConfig";

const moveClassByIndex = [
  "cloud-move-right",
  "cloud-move-left",
  "cloud-move-right",
  "cloud-move-left",
  "cloud-move-right",
];

export default function CloudLayer({ position }) {
  return (
    <div className={`cloud ${position}`}>
      {cloudImages.map((src, index) => (
        <img
          key={`${position}-${src}`}
          src={src}
          alt=""
          className={moveClassByIndex[index] || "cloud-move-right"}
        />
      ))}
    </div>
  );
}

