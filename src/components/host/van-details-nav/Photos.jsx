import { useOutletContext } from "react-router-dom";
import { PhotosImage } from "../../../styles/host/van-details-nav/photos.css";

export default function Photos() {
    const van = useOutletContext();

    return (
        <PhotosImage src={van.imageUrl} />
    )
}