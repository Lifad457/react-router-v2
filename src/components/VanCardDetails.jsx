import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { VanCardDetailHero, VanCardDetailMain, VanCardDetailsContainer, VanCardDetailsDesc, VanCardDetailsImg, VanCardDetailsName, VanCardDetailsNav, VanCardDetailsPrice, VanCardDetailsRent, VanCardDetailsType } from "../styles/van/van-card-details.css";

export default function VanCardDetails() {
    const [van, setVan] = useState()
    const {vanId} = useParams()
    
    useEffect(() => 
        {
            fetch(`/api/vans/${vanId}`)
            .then((response) => response.json())
            .then((data) => setVan(data.vans))
            .catch((error) => console.error("Error fetching data: ", error));
        }, [vanId]
    )

    return (
        <VanCardDetailsContainer>
            {
                van ?
                <>
                    <VanCardDetailHero>
                        <VanCardDetailsNav to="/vans">↩ Back to all vans</VanCardDetailsNav>
                        <VanCardDetailsImg src={van.imageUrl} alt={van.name} />
                    </VanCardDetailHero>
                    <VanCardDetailMain>
                        <VanCardDetailsType type={van.type}>
                            {van.type.charAt(0).toUpperCase()}{van.type.substr(1).toLowerCase()}
                        </VanCardDetailsType>
                        <VanCardDetailsName>{van.name}</VanCardDetailsName>
                        <VanCardDetailsPrice><em>${van.price}</em>/day</VanCardDetailsPrice>
                        <VanCardDetailsDesc>{van.description}</VanCardDetailsDesc>
                        <VanCardDetailsRent to=".">Rent this van</VanCardDetailsRent>
                    </VanCardDetailMain>
                </>
                : "Loading..."
            }
        </VanCardDetailsContainer>
    )
}