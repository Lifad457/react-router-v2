import { VanCardContainer,
     VanCardImg,
     VanCardName,
     VanCardPrice,
     VanCardtype } from "../styles/van/van-card.css";
import PropTypes from 'prop-types';

export default function VanCard({ van }) { 
    return (
        <VanCardContainer to={van.id}>
            <VanCardImg src={van.imageUrl} alt={van.name} />
            <VanCardName>{van.name}</VanCardName>
            <VanCardPrice>${van.price}<br/><em>/day</em></VanCardPrice>
            {van.type &&
                <VanCardtype type={van.type}>
                    {van.type.charAt(0).toUpperCase()}{van.type.substr(1).toLowerCase()}
                </VanCardtype>
            }
        </VanCardContainer>
    )
}
VanCard.propTypes = {
    van: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    })
}