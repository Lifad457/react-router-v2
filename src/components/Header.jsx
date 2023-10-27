import { HeaderContainer, HeaderLogo, HeaderNav, HeaderNavContainer } from "../styles/header.css"

export default function Header() {
    return (
        <>
            <HeaderContainer>
                <HeaderLogo to="/" $end>#VANLIFE</HeaderLogo>
                <HeaderNavContainer>
                    <HeaderNav to="/host">Host</HeaderNav>
                    <HeaderNav to="/about">About</HeaderNav>
                    <HeaderNav to="/vans">Vans</HeaderNav>
                </HeaderNavContainer>
            </HeaderContainer>
        </>
    )
}