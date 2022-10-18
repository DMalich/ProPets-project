import React from "react";
import styled from "styled-components";
import Start from "../../startPage/Start";
import { Route, Link, useHistory } from "react-router-dom";
import "../../../css_modules/NavBar.css";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../../storage/user/ActionCreators";
import hotel from "../../../assets/hotelLinkLogo.png";
import logout from "../../../assets/logout.png";

function NavBar() {
    const dispatch = useDispatch();
    const { push } = useHistory();
    const auth = getAuth();
    const userEmail = localStorage.getItem("email");

    const logOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(
                    setUser({
                        email: "",
                        id: "",
                        token: "",
                    })
                );
                localStorage.removeItem("uid");
                localStorage.removeItem("email");
                push("/");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <NavigationBar className="navbar">
            <NavUl className="navbar-nav nav-pills">
                <NavLi className="nav-item">
                    <Link to="/home" className="dropdown-item" id="hover-item">
                        <NavImage src={hotel} alt="" id="navImage" />
                        Home
                    </Link>
                </NavLi>
                <NavLi className="nav-item">
                    <Link to="lost" className="dropdown-item" id="hover-item">
                        Lost
                    </Link>
                </NavLi>
                <NavLi className="nav-item">
                    <Link to="found" className="dropdown-item" id="hover-item">
                        Found
                    </Link>
                </NavLi>
                <NavLi className="nav-item dropdown">
                    <Link
                        className="dropdown-item"
                        to="#"
                        id="hover-item"
                        role="button"
                        data-bs-toggle="dropdown"
                        area-expanded="false"
                    >
                        Services
                    </Link>
                    <ul
                        className="dropdown-menu"
                        area-labelledby="dropdownMenuLink"
                    >
                        <NavLi className="nav-item">
                            <Link
                                to="hotels"
                                className="dropdown-item"
                                id="hover-item"
                            >
                                Hotels
                            </Link>
                        </NavLi>
                        <NavLi className="nav-item">
                            <Link
                                to="walking"
                                className="dropdown-item"
                                id="hover-item"
                            >
                                Walking
                            </Link>
                        </NavLi>
                        <NavLi className="nav-item">
                            <Link
                                to="beauty-studios"
                                className="dropdown-item"
                                id="hover-item"
                            >
                                Beauty Studios
                            </Link>
                        </NavLi>
                        <NavLi className="nav-item">
                            <Link
                                to="vet-help"
                                className="dropdown-item"
                                id="hover-item"
                            >
                                VetHelp
                            </Link>
                        </NavLi>
                    </ul>
                </NavLi>
                <NavLi className="nav-item">
                    <Link
                        to="favorites"
                        className="dropdown-item"
                        id="hover-item"
                    >
                        Favorites
                    </Link>
                </NavLi>
            </NavUl>
            <hr />
            <User>
                <Username>{userEmail}</Username>
            </User>
            <Logout>
                <LogoutButton onClick={() => logOut()}>
                    <LogoutImage src={logout} alt="" />
                    Logout
                </LogoutButton>
            </Logout>
            <Route path="/" exact component={Start} />
            <hr />
        </NavigationBar>
    );
}

const NavigationBar = styled.nav`
    width: 20%;
    padding: 2rem;
    display: inline-block;
    color: black;
    background-color: #bfbefc;
`;

const NavUl = styled.ul``;
const NavLi = styled.li`
    list-style-type: none;
    line-height: 2.5;
`;
const NavImage = styled.img`
    display: none;
`;
const NavA = styled.a`
    &:hover{
        background: rgba(122, 179, 243, 0.2);
    };Name
    text-decoration: none;
`;
const User = styled.div`
    margin-top: 4.5rem;
`;
const Username = styled.p`
    margin-left: 1.5rem;
    font-size: 0.8rem;
    font-weight: 600;
`;
const Logout = styled.div`
    margin-left: 1.5rem;
`;
const LogoutImage = styled.img`
    width: 30%;
    display: none;
`;
const LogoutButton = styled.button`
    border: none;
    width: 4rem;
    display: flex;
    flex-direction: row;
    background-color: #bfbefc;

    &:hover img {
        display: block;
    }
`;

export default NavBar;
