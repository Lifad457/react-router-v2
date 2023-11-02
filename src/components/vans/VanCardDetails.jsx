import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { VanCardDetailHero,
     VanCardDetailMain,
     VanCardDetailsContainer,
     VanCardDetailsDesc,
     VanCardDetailsImg,
     VanCardDetailsName,
      VanCardDetailsNav,
      VanCardDetailsPrice,
      VanCardDetailsRent,
      VanCardDetailsType } from "../../styles/vans/van-card-details.css";
import { getVan } from "../../../api";

export default function VanCardDetails() {
    const [van, setVan] = useState()
    const {vanId} = useParams()
    const {search} = useLocation()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => 
        {
            console.log(vanId)
            async function fetchVan() {
                setLoading(true)
                try {
                    const data = await getVan(vanId)
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
        }, [vanId]
    )

    if (loading) {return <h1>Loading...</h1>}
    if (error) return <h1 style={{padding: "3em", color: "red"}}>There was an error: {error.message}</h1>
    
    return (
        <VanCardDetailsContainer>
            {
                van ?
                <>
                    <VanCardDetailHero>
                        <VanCardDetailsNav to={".."+search} relative="path" >
                            ↩ <span>{`Back to ${search ? van.type : "all"} vans`}</span>
                        </VanCardDetailsNav>
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