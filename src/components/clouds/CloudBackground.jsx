import StarsGarland from "../../StarsGarland";
import "./CloudBackground.css";
export default function CloudBackground() {
  return (
    <>
      <div className="cloud-background-layer cloud-background-layer-small" aria-hidden="true" />
      <div className="cloud-background-layer cloud-background-layer-big" aria-hidden="true" />
      <StarsGarland />
    </>
  );
}
