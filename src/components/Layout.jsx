import { Outlet } from 'react-router-dom';
import Global from '../styles/global.css'
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
    return (
        <>
            <Global />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}