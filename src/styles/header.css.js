import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    background: var(--clr-primary);
    padding: 2em 5em;
    a {
        text-decoration: none;
        color: var(--clr-black);
    }
`
export const HeaderLogo = styled(Link)`
    font-weight: var(--fw-black);
    font-size: var(--fs-extra-large);
`
export const HeaderNavContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4em;
    a.active {
        border-bottom: 2px solid #707070;
    }
`
export const HeaderNav = styled(NavLink)`
    font-weight: var(--fw-semi-bold);
    font-size: var(--fs-medium);
`
