import React from "react";
import { Nav, NavLink, NavMenu }
    from "../componets/Navbar/NavbarElements";
import logo from '../img/logo.png';
import { Routes, Route }
    from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contacts';
import Products from './Products';
import Recipes from './Recipes';
import Kids from './Kids';
const NewNavBar = () => {
    return (
        <>
            <Nav className="navbar navbar-expand-lg ">
                <NavLink to="/" activeStyle className='navbar-brand'>
                    <div classNameName="logo">
                        <img src={logo} alt="logo" />
                    </div>
                </NavLink>
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <NavMenu className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" activeStyle>
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">

                                <NavLink to="/products" className="nav-link" activeStyle>
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/recipes" className="nav-link" activeStyle>
                                    Recipes
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/kids" className="nav-link" activeStyle>
                                    Kid's Corner
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link" activeStyle>
                                    Contact Us
                                </NavLink>
                            </li>
                        </NavMenu>
                    </div>
                </div>
            </Nav>


            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/products' element={<Products />} />
                <Route exact path='/recipes' element={<Recipes />} />
                <Route exact path='/kids' element={<Kids />} />
                <Route exact path='/contact' element={<Contact />} />

            </Routes >
        </>
    );
}

export default NewNavBar;