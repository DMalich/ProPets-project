import React from "react";
import styled from "styled-components";
import NavBar from "./navBar/NavBar";
import Content from "./contentField/Content";
import AdField from "./adField/AdField";
import Header from "./header/Header";

function MainTemplate() {
    return (
        <>
            <Header />
            <Container>
                <NavBar />
                <Content />
                <AdField />
            </Container>
        </>
    );
}

export default MainTemplate;

const Container = styled.div`
    background: rgba(239, 240, 246, 1);
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: row;
`;
