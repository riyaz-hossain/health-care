import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import { signOutFromAccount } from '../PatientLoginPage/LoginInManager';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const navData = [
        { name: "Home", link: "/home" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Contact", link: "/contact" },
        { name: "Appointment", link: "/appointment" },
        // { name: "login", link: "/patient-login" },
    ];

    const handleSignOut = () => {
        signOutFromAccount().then((res) => {
            setLoggedInUser(res);
        });
    };


    const currentRoute = useHistory().location.pathname.toLowerCase();
    return (
        <div className="sticky-top">
            <Navbar bg="dark" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ fontSize: "25px", color: "black", background: "#fff" }} className="ms-auto" > <FontAwesomeIcon icon={faBars} /> </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav style={{ textAlign: "center" }} className="ms-auto">
                            {
                                navData.map((data, index) => <Nav.Link
                                    style={{ color: '#fff', fontWeight: '600', }}
                                    className="nav-link pl-4 pr-4"
                                    key={index}
                                >
                                    <Link to={data.link} style={{
                                        color: "#fff", textDecoration: "none"
                                    }}
                                        className={currentRoute == data.link ? "nav-link pl-4 pr-4 nav-active" : "nav-link pl-4 pr-4"}
                                    > {data.name} </Link>
                                </Nav.Link>)
                            }
                            {loggedInUser.isSignedIn ? (
                                <div>
                                    <span
                                        className="text-light font-weight-bold"
                                    >
                                        {loggedInUser.displayName}
                                    </span>
                                    <button
                                        className="btn btn-warning ml-2"
                                        onClick={handleSignOut}
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            ) : (
                                <Nav.Link
                                    style={{ color: '#fff', fontWeight: '600', }}
                                    className="nav-link pl-4 pr-4"
                                >
                                    <Link to="/patient-login" style={{
                                        color: "#fff", textDecoration: "none"
                                    }}
                                        className={currentRoute === "/patient-login" ? "nav-link pl-4 pr-4 nav-active" : "nav-link pl-4 pr-4"}
                                    > Login</Link>
                                </Nav.Link>
                            )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
export default Header;