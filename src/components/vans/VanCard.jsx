import { VanCardContainer,
     VanCardImg,
     VanCardName,
     VanCardPrice,
     VanCardtype } from "../../styles/vans/van-card.css";
import PropTypes from 'prop-types';

export default function VanCard({ van }) { 
    return (
        <VanCardContainer to={van.id} >
            {van.id ?
                <>
                    <VanCardImg src={van.imageUrl} alt={van.name} />
                    <VanCardName>{van.name}</VanCardName>
                    <VanCardPrice>${van.price}<br/><em>/day</em></VanCardPrice>
                    <VanCardtype type={van.type}>
                        {van.type.charAt(0).toUpperCase()}{van.type.substr(1).toLowerCase()}
                    </VanCardtype>
                </>     
                : "Loading..."
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