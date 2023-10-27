import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LayoutNavContainer = styled.nav`
    display: flex;
    padding: 3em 5em;
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
export const LayoutNavLink = styled(NavLink)`
    font-weight: var(--fw-semi-bold);
    font-size: var(--fs-medium);
    text-decoration: none;
    color: var(--clr-black);
`