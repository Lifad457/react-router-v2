import { HeaderContainer, HeaderIcon, HeaderLogo, HeaderNav, HeaderNavContainer } from "../styles/header.css"
import avatarIcon from "../assets/icons/avatar-icon.png"

export default function Header() {
    return (
        <>
            <HeaderContainer>
                <HeaderLogo to="/" $end>#VANLIFE</HeaderLogo>
                <HeaderNavContainer>
                    <HeaderNav to="/host">Host</HeaderNav>
                    <HeaderNav to="/about">About</HeaderNav>
                    <HeaderNav to="/vans">Vans</HeaderNav>
                    <HeaderNav to="/login">
                        <HeaderIcon src={avatarIcon} />
                    </HeaderNav>
                </HeaderNavContainer>
            </HeaderContainer>
        </>
    )
}