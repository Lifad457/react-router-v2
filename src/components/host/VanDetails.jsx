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
import { getHostVan } from '../../../api';

export default function VanDetails() {
    const { vanId } = useParams();
    const [van, setVan] = useState();

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        async function fetchVan() {
            setLoading(true)
            try {
                const data = await getHostVan(vanId)
                setVan(data)
            }
            catch (err) {
               setError(err)
            }
            finally {
                setLoading(false)
            }
        }

        fetchVan()
    }, [vanId])

    if (loading) {return <h1>Loading...</h1>}
    if (error) return <h1 style={{padding: "3em", color: "red"}}>There was an error: {error.message}</h1>

    return (
        <VanDetailsContainer>
            <VanDetailsBackNav to="/host/vans">↩ Back to all vans</VanDetailsBackNav>
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