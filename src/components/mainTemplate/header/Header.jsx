import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../assets/logo_purple.png";
import "./Header.css";

function Header() {
  const params = useParams();
  const nav = params.nav;

  return (
    <Container>
      <Link to="/home">
        <Logo />
      </Link>
      <div
        className={`btnLostFound ${
          nav === "lost" || nav === "found" ? "show" : "hide"
        }`}
      >
        <Link to="/lost-form">
          <LostButton>I lost my pet</LostButton>
        </Link>
        <Link to="/found-form">
          <FoundButton>I found a pet</FoundButton>
        </Link>
      </div>
      <div className={`btnAddPost ${nav === "home" ? "show" : "hide"}`}>
        <Link to="/add-form">
          <LostButton>Add Post</LostButton>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background: rgba(239, 240, 246, 1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 9.375rem;
  &::-webkit-box-shadow{
    0px 3px 5px 0px rgba(186,186,186,1)};
  &::-moz-box-shadow{
    0px 3px 5px 0px rgba(186,186,186,1)};
  box-shadow:  0px 3px 5px 0px rgba(186,186,186,1);
  z-index: 1;
`;

const Logo = styled.button`
  background: inherit;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  display: inline-block;
  height: 3rem;
  width: 10rem;
`;

const LostButton = styled.button`
  background: rgba(122, 179, 243, 0.2);
  border-radius: 2rem;
  border: rgba(122, 179, 243, 0.2);
  color: black;
  cursor: pointer;
  opacity: 1;
  padding: 0.625rem 1rem;
  text-transform: uppercase;
  width: 8.75rem;
  height: 3.125rem;
  margin: 0 1rem 0 0;
`;

const FoundButton = styled(LostButton)`
  background: #bfbefc;
  border: #bfbefc;
`;

export default Header;
