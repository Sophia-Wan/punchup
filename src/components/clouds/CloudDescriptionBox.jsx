import { defaultCloudBoxText } from "./cloudConfig";
import "./CloudDescriptionBox.css";
import Buttons from "../../assets/buttons";

export default function CloudDescriptionBox({ text = defaultCloudBoxText }) {
  return (
    <div
    className='cloud-desc-wrap'
    aria-hidden='true'>
    <img
        className='cloud-desc'
        src='/Cloud-box.svg'
        alt=''
    />
    <Buttons />
</div>
    
  );
}

