import { HeaderContainer, Logo, Nav, NavContainer } from "../styles/header.css"

export default function Header() {
    return (
        <>
            <HeaderContainer>
                <Logo to="/" end>#VANLIFE</Logo>
                <NavContainer>
                    <Nav to="/about">About</Nav>
                    <Nav>Vans</Nav>
                </NavContainer>
            </HeaderContainer>
        </>
    )
}