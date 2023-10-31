import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { 
    VanDetailsBackNav,
    VanDetailsBadge,
    VanDetailsContainer, 
    VanDetailsImg, 
    VanDetailsInfo, 
    VanDetailsLink, 
    VanDetailsName, 
    VanDetailsNav, 
    VanDetailsPrice, 
    VanDetailsType, 
    VanDetailsWrapper} from '../../styles/host/van-details.css';

export default function VanDetails() {
    const { vanId } = useParams();
    const [van, setVan] = useState();

    useEffect(() => {     
        fetch(`/api/host/vans/${vanId}`)
        .then((response) => response.json())
        .then((data) => setVan(data.vans[0]))
        .catch((error) => console.error("Error fetching data: ", error));
    }, [vanId]);

    return (
        <VanDetailsContainer>
            <VanDetailsBackNav to=".." relative='path'>↩ Back to all vans</VanDetailsBackNav>
            {van ? (
                <VanDetailsWrapper>
                    <VanDetailsInfo>
                        <VanDetailsImg src={van.imageUrl} alt={van.name} />
                        <VanDetailsBadge>
                        <VanDetailsType type={van.type}>
                            {van.type.charAt(0).toUpperCase()}{van.type.substr(1).toLowerCase()}
                        </VanDetailsType>
                        </VanDetailsBadge>
                        <VanDetailsName>{van.name}</VanDetailsName>
                        <VanDetailsPrice><em>${van.price}</em>/day</VanDetailsPrice>
                    </VanDetailsInfo>

                    <VanDetailsNav>
                        <VanDetailsLink to="." end >Details</VanDetailsLink>
                        <VanDetailsLink to="pricing">Pricing</VanDetailsLink>
                        <VanDetailsLink to="photos">Photos</VanDetailsLink>
                    </VanDetailsNav>

                    <Outlet context={van} />
                </VanDetailsWrapper>
            ) : (
                <h2>Loading...</h2>
            )}
        </VanDetailsContainer>
    );
}