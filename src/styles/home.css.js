import { Link } from "react-router-dom";
import HomeHero from "../assets/images/home-hero.png"
import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10em 5em;
    background-color: var(--clr-secondary);
    background-image: url(${HomeHero});
    background-size: cover;
    background-repeat: no-repeat;
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
export const HomeLink = styled(Link)`
    text-decoration: none;
    padding-top: 3em;
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