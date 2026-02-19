import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Products from "./products";
import Home from "./home";
import Member from "./member";

export default function Router3() {
    const navLinkClass = ({ isActive }) => (isActive ? "active_menu" : "menu");
    return (
        <BrowserRouter>
            <nav className="nav" style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                <NavLink to='/' className={navLinkClass} style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>
                    Home
                </NavLink> -
                <NavLink to='/products' className={({ isActive }) =>
                    isActive ? "active_menu" : "menu"}>
                        Products</NavLink> -
                <NavLink to='/member' className={({ isActive }) =>
                    isActive ? "active_menu" : "menu"}>
                        Member</NavLink> -
                <NavLink to='/contact' className={({ isActive }) =>
                    isActive ? "active_menu" : "menu"}>
                        Contact Us</NavLink>
            </nav>
            <Routes style={{ margin: '20px' }}>
                <Route path="/" element={<Home/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/member" element={<Member/>} />
                <Route path="/contact" element={<div style={{textAlign:'center'}}>Contact Page</div>} />
                <Route path="/*" element={<div style={{textAlign:'center'}}>Error 404 Not Found</div>} />
            </Routes>

        </BrowserRouter>
    );
}