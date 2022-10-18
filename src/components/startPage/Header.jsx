import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo_white.png";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../storage/modalWindow/ActionCreators";

function Header() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/sign-in/home">
        <SignInButton onClick={() => dispatch(toggleModal())}>
          Sign In
        </SignInButton>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  background: #bfbefc;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 9.375rem;
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

const SignInButton = styled.button`
  background: transparent;
  border-radius: 2rem;
  border: 1px solid #ffffff;
  color: white;
  cursor: pointer;
  opacity: 1;
  padding: 0.625rem 1rem;
  text-transform: uppercase;
  width: 8.75rem;
  height: 3.125rem;
`;

export default Header;
