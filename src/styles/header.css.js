import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    background: var(--clr-primary);
    padding: 2em 3em;

    a {
        text-decoration: none;
        color: var(--clr-black);
    }
`
export const Logo = styled(Link)`
    font-weight: var(--fw-black);
    font-size: var(--fs-extra-large);
`
export const NavContainer = styled.div`
    margin: auto 0;
`
export const Nav = styled(Link)`
    padding: 0 1em;
    font-weight: var(--fw-semi-bold);
    font-size: var(--fs-medium);
`
