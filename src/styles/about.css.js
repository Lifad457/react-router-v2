import { Link } from "react-router-dom";
import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
    
    @media (min-width: 1200px) {
        flex-direction: row;
    }
`
export const AboutHeroImg = styled.img`
    object-fit: cover;

    @media (min-width: 1200px) {
        width: 50%;
        padding: 0 5em;
        border-radius: 0.3em;
    }
`
export const AboutMain = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5em 5em;
`
export const AboutTitle = styled.h1`
    font-size: var(--fs-extra-large);
    font-weight: var(--fw-black);
    margin: 0 0 1em;
`
export const AboutDesc = styled.p`
    font-size: var(--fs-medium);
    font-weight: var(--fw-semi-bold);
    margin: 0 0 1em;
`
export const AboutButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--clr-secondary);
    border-radius: 0.3em;
    padding: 3em;
    margin: 3em 0 0;
`
export const AboutCatchPhrase = styled.p`
    font-size: var(--fs-large);
    font-weight: var(--fw-bold);
    margin: 0 0 1.5em 0;
`
export const AboutLink = styled(Link)`
    width: fit-content;
    color: var(--clr-white);
    background-color: var(--clr-black);
    padding: 0.8em 1.5em;
    border-radius: 0.4em;
    font-size: var(--fs-medium);
    font-weight: var(--fw-semi-bold);
    text-decoration: none;
`