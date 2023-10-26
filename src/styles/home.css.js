import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeHero from "../assets/images/home-hero.png"

export const HomeContainer = styled.div`
    background: url(${HomeHero});
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-width: 1200px) {
        max-width: 900px;
        
    }
`
export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10em 5em;
    color: var(--clr-white);
`
export const HomeTitle = styled.h1`
    font-size: var(--fs-extra-large);
    font-weight: var(--fw-black);
`
export const HomeDesc = styled.p`
    font-size: var(--fs-medium);
    font-weight: var(--fw-semi-bold);
`
export const HomeButton = styled(Link)`
    display: flex;
    justify-content: center;
    font-size: var(--fs-medium);
    font-weight: var(--fw-bold);
    text-decoration: none;
    color: var(--clr-white);
    background-color: var(--clr-tertiary);
    border-radius: 0.2em;
    padding: 1em 2em;
    margin-top: 3em;
`