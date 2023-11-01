import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
        /* border: solid red 1px; */
    }

    &:root {
        --ff-primary: 'Inter', sans-serif;

        --fs-extra-large: 2.25rem;
        --fs-large: 1.6rem;
        --fs-medium: 1.25rem;
        --fs-normal: 1rem;
        --fs-small: 0.8rem;
        --fs-extra-small: 0.6rem;

        --fw-thin: 100;
        --fw-light: 300;
        --fw-regular: 400;
        --fw-semi-bold: 600;
        --fw-bold: 700;
        --fw-black: 900;

        --clr-primary: #FFF7ED;
        --clr-secondary: #FFCC8D;
        --clr-tertiary: #FF8C38;
        --clr-simple: #E17654;
        --clr-luxury: #161616;
        --clr-rugged: #115E59;
        --clr-white: #FFFFFF;
        --clr-black: #000000;
        --clr-grey: #252525;
        --clr-alert: #f00;
    }

    html, body {
        margin: 0;
        padding: 0;
        font-family: var(--ff-primary);
        line-height: 1.6;
        background-color: var(--clr-primary);
    }
`
export default GlobalStyle