import StarsGarland from "../starGarland/StarsGarland";
import "./CloudBackground.css";

export default function CloudBackground() {
  return (
    <>
      <div className="scene-bg-layer scene-bg-small" aria-hidden="true" />
      <div className="scene-bg-layer scene-bg-large" aria-hidden="true" />
      <StarsGarland />
    </>
  );
}
