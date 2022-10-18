import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo_white.png";
import searchLogo from "../../assets/searchLogo.png";
import paw from "../../assets/pawlinklogo.png";
import vet from "../../assets/vetLinkLogo.png";
import hotel from "../../assets/hotelLinkLogo.png";
import man from "../../assets/manLinkLogo.png";
import dog from "../../assets/dogLinkLogo.png";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebookLogo.png";
import instagram from "../../assets/instagramLogo.png";

function Footer() {
    return (
        <Container>
            <Link to="/">
                <Logo />
            </Link>
            <Contacts>
                <ImageContainer>
                    <FacebookImage src={facebook} alt="Facebook Logo" />
                    <InstImage src={instagram} alt="Instagram Logo" />
                </ImageContainer>
                <Adress>Beit Canada, Shavei Tzion 1, Ashdod 7728502</Adress>
            </Contacts>
            <Links>
                <LeftColumn>
                    <LinkUl>
                        <LinkLi>
                            <LinkImage src={searchLogo} alt="Search" />
                            Lost
                        </LinkLi>
                        <LinkLi>
                            <LinkImage src={paw} alt="paw" />
                            Found
                        </LinkLi>
                        <LinkLi>
                            <LinkImage src={vet} alt="Vet" />
                            VetHelp
                        </LinkLi>
                    </LinkUl>
                </LeftColumn>
                <RightColumn>
                    <LinkUl>
                        <LinkLi>
                            <LinkImage src={hotel} alt="Hotel" />
                            Hotels
                        </LinkLi>
                        <LinkLi>
                            <LinkImage src={man} alt="Man" />
                            Walking
                        </LinkLi>
                        <LinkLi>
                            <LinkImage src={dog} alt="Dog" />
                            Beauty studios
                        </LinkLi>
                    </LinkUl>
                </RightColumn>
            </Links>
        </Container>
    );
}

const Container = styled.div`
    background: #bfbefc;
    color: white;
    display: flex;
    height: 11.85rem;
    justify-content: space-around;
    align-items: center;
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
    margin-left: 6rem;
`;
const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% / 3);
    margin-left: 6rem;
`;
const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
`;
const FacebookImage = styled.img`
    width: 5%;
    cursor: pointer;
`;
const InstImage = styled.img`
    width: 5%;
    margin-left: 7px;
    cursor: pointer;
`;
const Adress = styled.p`
    margin-top: 0.6rem;
`;
const Links = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: calc(100% / 3);

    @media only screen and (max-width: 900px) {
        display: none;
    } ;
`;
const LeftColumn = styled.div`
    display: flex;
    justify-content: center;
`;
const LinkUl = styled.ul``;
const LinkLi = styled.li`
    list-style-type: none;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
`;
const LinkImage = styled.img`
    margin-right: 0.35rem;
`;
const RightColumn = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 1rem;
`;

export default Footer;
