import "./CloudDescriptionBox.css";
import Buttons from "../../assets/button/buttons";

export default function CloudDescriptionBox() {
  return (
    <div
    className='scene-desc-wrap'
    aria-hidden='true'>
    <img
        className='scene-desc-image'
        src='/Cloud-box.svg'
        alt=''
    />
    <Buttons />
</div>
    
  );
}
