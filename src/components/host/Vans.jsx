import { useState, useEffect } from "react"
import { VanContainer, VansElementsContainer, VansElementsImg, VansElementsPrice, VansElementsTitle } from "../../styles/host/vans-elements.css";
import { getHostVans } from "../../../api";

export default function Vans() {
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        async function fetchVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                setVans(data)
            }
            catch (err) {
               setError(err)
            }
            finally {
                setLoading(false)
            }
        }

        fetchVans()
    }, [])

    const vansElements = vans.map(van => 
        <VanContainer to={van.id} key={van.id}>
            <VansElementsImg src={van.imageUrl} alt={van.name} />
            <VansElementsTitle>{van.name}</VansElementsTitle>
            <VansElementsPrice>${van.price}/day</VansElementsPrice>
        </VanContainer>)

    if (loading) {return <h1>Loading...</h1>}
    if (error) return <h1 style={{padding: "3em", color: "red"}}>There was an error: {error.message}</h1>

    return (
        <VansElementsContainer>
            <h1>Your Listed vans</h1>
            {vansElements.length == 0 ? <h2>Loading...</h2> : vansElements}
        </VansElementsContainer>
    )
}