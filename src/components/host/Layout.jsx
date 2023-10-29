import { Outlet } from "react-router-dom";
import { LayoutNavContainer, LayoutNavLink } from "../../styles/host/layout.css";

export default function Layout() {
    return (
        <>
            <LayoutNavContainer>
                <LayoutNavLink to="/host" end>Dashboard</LayoutNavLink>
                <LayoutNavLink to="/host/income">Income</LayoutNavLink>
                <LayoutNavLink to="/host/vans">Vans</LayoutNavLink>
                <LayoutNavLink to="/host/reviews">Reviews</LayoutNavLink>
            </LayoutNavContainer>
            <Outlet />
        </>
    )
}