import styled from "styled-components";
import { Link } from "react-router-dom";

export const VansElementsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5em;
    margin: 0 0 5em;
`
export const VanContainer = styled(Link)`
    display: grid;
    grid-template-areas: "img title"
                         "img price";
    grid-template-columns: auto 1fr;
    gap: 0 2em;
    margin: 0.5em 0 2em;
    padding: 1.5em 2em;
    background-color: var(--clr-white);
    border-radius: 1em;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    color: var(--clr-black);
    text-decoration: none;
`
export const VansElementsImg = styled.img`
    grid-area: img;
    max-width: 120px;
    border-radius: .5em;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
`
export const VansElementsTitle = styled.h3`
    grid-area: title;
    margin: 0;
    font-size: var(--fs-large);
    font-weight: var(--fw-semi-bold);
    align-self: flex-end;
`
export const VansElementsPrice = styled.p`
    grid-area: price;
    margin: 0;
    align-self: flex-start;
`