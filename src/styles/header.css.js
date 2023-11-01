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
        &:after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: var(--clr-black);
        }
    }
`
export const HeaderNav = styled(NavLink)`
    font-weight: var(--fw-semi-bold);
    font-size: var(--fs-medium);
`
export const HeaderIcon = styled.img`
    display: flex;
    align-items: center;
`
