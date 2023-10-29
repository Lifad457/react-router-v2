import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const VanDetailsContainer = styled.div`
    padding: 0 5em;
`
export const VanDetailsBackNav = styled(Link)`
    color: var(--clr-black);
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
export const VanDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--clr-white);
    border-radius: 2em;
    margin: 3em 0;
    padding: 3em;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
`
export const VanDetailsInfo = styled.div`
    display: grid;
    grid-template-areas: "img type"
                         "img van-name"
                         "img price";
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr auto 1fr;
    gap: 0 3em;
    margin-bottom: 3em;
`
export const VanDetailsImg = styled.img`
    grid-area: img;
    max-width: 300px;
    border-radius: .2em;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
`
export const VanDetailsBadge = styled.div`
    grid-area: type;
    align-self: flex-end;
    margin: 1.5em 0;
`
export const VanDetailsType = styled.div`
    display: inline-block;
    margin-left: 0;
    margin-right: auto;
    background-color: var(--clr-${props => props.type});
    padding: .7em 2em;
    color: var(--clr-white);
    font-weight: var(--fw-semi-bold);
    border-radius: 0.3em;
    text-align: center;
    letter-spacing: 0.05em;
`
export const VanDetailsName = styled.h1`
    grid-area: van-name;
    font-weight: var(--fw-bold);
    font-size: var(--fs-extra-large);
    margin: 0;
`
export const VanDetailsPrice = styled.div`
    grid-area: price;
    align-self: flex-start;
    font-size: var(--fs-large);

    em {
        font-style: normal;
        font-weight: var(--fw-bold);
    }
`
export const VanDetailsNav = styled.div`
    display: flex;
    gap: 2em;

    a.active {
        &:after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: var(--clr-black);
        }
    }
`
export const VanDetailsLink = styled(NavLink)`
    font-weight: var(--fw-semi-bold);
    font-size: var(--fs-medium);
    text-decoration: none;
    color: var(--clr-black);
`