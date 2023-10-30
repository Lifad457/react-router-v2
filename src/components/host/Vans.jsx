import { useState, useEffect } from "react"
import { VanContainer, VansElementsContainer, VansElementsImg, VansElementsPrice, VansElementsTitle } from "../../styles/host/vans-elements.css";

export default function Vans() {
    const [vans, setVans] = useState([])
    useEffect(() => {
        fetch("/api/host/vans")
        .then((response) => response.json())
        .then((data) => setVans(data.vans))
        .catch((error) => console.error("Error fetching data: ", error));
    }, [])

    const vansElements = vans.map(van => 
        <VanContainer to={van.id} key={van.id}>
            <VansElementsImg src={van.imageUrl} alt={van.name} />
            <VansElementsTitle>{van.name}</VansElementsTitle>
            <VansElementsPrice>${van.price}/day</VansElementsPrice>
        </VanContainer>)

    return (
        <VansElementsContainer>
            <h1>Your Listed vans</h1>
            {vansElements.length == 0 ? <h2>Loading...</h2> : vansElements}
        </VansElementsContainer>
    )
}