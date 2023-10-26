import { Link } from "react-router-dom";
import styled from "styled-components";

export const VanCardDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5em;
    margin-bottom: 5em;

    @media (min-width: 1200px) {
        flex-direction: row;
        gap: 5em;
        align-items: flex-end;
    }
`
export const VanCardDetailHero = styled.div`
    display: flex;
    flex-direction: column;
`
export const VanCardDetailsNav = styled(Link)`
    color: var(--clr-black);
    margin: 3em 0;
    font-weight: var(--fw-semi-bold);
    letter-spacing: 0.05em;
    text-decoration: none;
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        width: 132px;
        border-bottom: 2px solid var(--clr-black); 
        left: 20px;
    }
`
export const VanCardDetailsImg = styled.img`
    border-radius: 0.5em;
    max-width: 700px;
`
export const VanCardDetailMain = styled.div`
    @media (min-width: 1200px) {
        width: 50%;
    }
`
export const VanCardDetailsType = styled.div`
    display: inline-block;
    background-color: var(--clr-${props => props.type});
    padding: .7em 2em;
    color: var(--clr-white);
    font-weight: var(--fw-semi-bold);
    letter-spacing: 0.05em;
    text-align: center;
    border-radius: 0.3em;
    margin: 3em 0 0;
    width: fit-content;
`
export const VanCardDetailsName = styled.p`
    margin: .5em 0 0;
    grid-area: van-name;
    font-weight: var(--fw-bold);
    font-size: var(--fs-extra-large);
`
export const VanCardDetailsPrice = styled.p`
    font-size: var(--fs-normal);

    em {
        font-style: normal;
        font-size: var(--fs-large);
        font-weight: var(--fw-semi-bold);
    }
`
export const VanCardDetailsDesc = styled.p`
    font-size: var(--fs-medium);
`
export const VanCardDetailsRent = styled(Link)`
    display: inline-block;
    background-color: var(--clr-tertiary);
    padding: .7em 2em;
    border-radius: 0.3em;
    text-decoration: none;
    color: var(--clr-white);
    font-weight: var(--fw-bold);
    font-size: var(--fs-medium);
    margin: 2em 0;
    text-align: center;
`
