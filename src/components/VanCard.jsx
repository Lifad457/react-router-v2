import { VanCardContainer, VanCardImg, VanCardName, VanCardPrice, VanCardtype } from "../styles/van/van-card.css";

export default function VanCard({ van }) { 
    return (
        <VanCardContainer>
            <VanCardImg src={van.imageUrl} alt={van.name} />
            <VanCardName>{van.name}</VanCardName>
            <VanCardPrice>${van.price}/day</VanCardPrice>
            <VanCardtype>{van.type}</VanCardtype>
        </VanCardContainer>
    )
}