import React from "react";
import styled from "styled-components";
import adDentalCare from "../../../assets/dental_care.png";
import adPetHotel from "../../../assets/pet_hotel.png";

function AddField() {
    return (
        <AdContainer>
            <AdSticky>
                <AdImage src={adDentalCare} alt="Dental Care" href="#" />
                <AdImage src={adPetHotel} alt="Pet Hotel" href="#" />
            </AdSticky>
        </AdContainer>
    );
}

const AdContainer = styled.div`
    width: 20%;
    background-color: #bfbefc;
    padding-left: 3rem;

    @media only screen and (max-width: 900px) {
        display: none;
    }
`;

const AdImage = styled.img`
    width: 70%;
    cursor: pointer;
    margin-top: 3rem;

    &:hover {
        width: 73%;
    }
`;

// const AdSticky = styled.div`
//     display: flex;
//     flex-direction: column;
//     position: sticky;
//     top: 0;
//     margin-left: 5rem;
//   &:hover {
//     width: 73%;
//   }
// `;

const AdSticky = styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
`;

export default AddField;
