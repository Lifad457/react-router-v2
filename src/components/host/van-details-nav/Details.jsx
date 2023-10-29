import { useOutletContext } from "react-router-dom";
import { DetailsContainer, DetailsContent } from "../../../styles/host/van-details-nav/details.css";

export default function Details() {
    const van = useOutletContext();

    return (
        <DetailsContainer>
            <DetailsContent><b>Name:</b> {van.name}</DetailsContent>
            <DetailsContent><b>Category:</b> {van.type}</DetailsContent>
            <DetailsContent><b>Description:</b> {van.description}</DetailsContent>
            <DetailsContent><b>Visibility:</b> Public</DetailsContent>
        </DetailsContainer>
    )
}