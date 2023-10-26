import { Link } from "react-router-dom";
import styled from "styled-components";

export const VanCardContainer = styled(Link)`
    display: grid;
    grid-template-areas: "van-image van-image van-image" 
                         "van-name van-name van-price" 
                         "van-type . van-price";
    grid-template-columns: .5fr 2fr .5fr;
    text-decoration: none;
    color: var(--clr-black);
`
export const VanCardImg = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 0.3em;
    grid-area: van-image;
`
export const VanCardName = styled.p`
    margin: .5em 0;
    grid-area: van-name;
    font-weight: var(--fw-bold);
    font-size: var(--fs-large);
`
export const VanCardPrice = styled.p`
    grid-area: van-price;
    text-align: right;
    font-weight: var(--fw-semi-bold);
    font-size: var(--fs-medium);
    line-height: 1;

    em {
        font-style: normal;
        font-size: var(--fs-small);
    }
`
export const VanCardtype = styled.div`
    grid-area: van-type;
    display: inline-block;
    background-color: var(--clr-${props => props.type});
    padding: .7em 2em;
    color: var(--clr-white);
    font-weight: var(--fw-semi-bold);
    border-radius: 0.3em;
    text-align: center;
    letter-spacing: 0.05em;
`