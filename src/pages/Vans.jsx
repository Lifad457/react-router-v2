import { useState, useEffect } from 'react';
import VanCard from '../components/VanCard';
import { VansContainer,
     VansFilterClear,
     VansFilterLuxury,
     VansFilterRugged,
     VansFilterSimple,
     VansFiltersContainer,
     VansListContainer,
     VansTitle } from '../styles/vans.css';

export default function Vans() {
    const [vans, setVans] = useState([{}])

    useEffect(() => 
        {
            fetch("/api/vans")
            .then((response) => response.json())
            .then((data) => setVans(data.vans))
            .catch((error) => console.error("Error fetching data: ", error));
        }, []
    )

    return (
        <VansContainer>
            <VansTitle>Explore our van options</VansTitle>
            <VansFiltersContainer>
                <VansFilterSimple>Simple</VansFilterSimple>
                <VansFilterLuxury>Luxury</VansFilterLuxury>
                <VansFilterRugged>Rugged</VansFilterRugged>
                <VansFilterClear>Clear filters</VansFilterClear>
            </VansFiltersContainer>
            <VansListContainer>
                {vans.map(van => <VanCard key={van.id} van={van} />)}
            </VansListContainer>
        </VansContainer>
    )
}