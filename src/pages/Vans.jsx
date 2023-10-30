import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import VanCard from '../components/vans/VanCard';
import { VansContainer,
     VansFilterClear,
     VansFilterLuxury,
     VansFilterRugged,
     VansFilterSimple,
     VansFiltersContainer,
     VansListContainer,
     VansTitle } from '../styles/vans.css';

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");

    const [vans, setVans] = useState([])
    useEffect(() => 
        {
            fetch("/api/vans")
            .then((response) => response.json())
            .then((data) => setVans(data.vans))
            .catch((error) => console.error("Error fetching data: ", error));
        }, []
    )
    
    const filteredVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans;
    const vanCards = filteredVans.map(van => <VanCard key={van.id} van={van} />)

    function clearFilters() {
        searchParams.delete("type")
        setSearchParams(searchParams)
    }

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <VansContainer>
            <VansTitle>Explore our van options</VansTitle>
            <VansFiltersContainer>
                <VansFilterSimple 
                    onClick={() => handleFilterChange("type", "simple")}
                    type={typeFilter === "simple" ? typeFilter : null}
                >
                    Simple
                </VansFilterSimple>
                <VansFilterLuxury 
                    onClick={() => handleFilterChange("type", "luxury")}
                    type={typeFilter === "luxury" ? typeFilter : null}
                >
                    Luxury
                </VansFilterLuxury>
                <VansFilterRugged 
                    onClick={() => handleFilterChange("type", "rugged")}
                    type={typeFilter === "rugged" ? typeFilter : null}
                >
                    Rugged
                </VansFilterRugged>
                {typeFilter && <VansFilterClear onClick={() => clearFilters() }> Clear filters</VansFilterClear>}
            </VansFiltersContainer>
            <VansListContainer>
                {vanCards ? vanCards : "Loading..."}
            </VansListContainer>
        </VansContainer>
    )
}

