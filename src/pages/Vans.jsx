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
import { getVans } from '../../api';

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");

    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => 
        {
            async function fetchVans() {
                setLoading(true)
                try {
                    const data = await getVans()
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

    if (loading) {return <h1>Loading...</h1>}
    if (error) return <h1 style={{padding: "3em", color: "red"}}>There was an error: {error.message}</h1>
    
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

