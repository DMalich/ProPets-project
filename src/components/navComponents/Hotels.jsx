import React, { useState } from "react";
import styled from "styled-components";
import HotelPic from "../../assets/hotelpic.png";
import emptyStar from "../../../src/assets/star_empty.png";
import fullStar from "../../assets/star_full.png";
// import {useDispatch} from "react-redux";
// import {getAuth} from "firebase/auth";
import '../../css_modules/Animation.css';

function Hotels() {
    const [isFavorite, setFavorite] = useState(false);
    // const dispatch = useDispatch();
    // const auth = getAuth();

    const changeFavoriteness = () => {
        setFavorite(!isFavorite);
        // dispatch(setFavorite({ isFavorite: isFavorite, userID: auth.currentUser.uid}));
    }

    return (
        <Container>
            <Header>
                <b>Hotels.</b> Go to vacations - we'll take care of your pet.
            </Header>
            <Card>
                <CardHeader>
                    <Name>John Doe</Name>
                    <FavStar className='favStar' onClick={changeFavoriteness} src={isFavorite ? fullStar : emptyStar} alt={'star'}/>
                </CardHeader>
                <Img src={HotelPic}></Img>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis, voluptatem alias quidem nihil accusantium minus.
                </Text>
            </Card>
            <Card>
                <CardHeader>
                    <Name>John Doe</Name>
                    <FavStar className='favStar' onClick={changeFavoriteness} src={isFavorite ? fullStar : emptyStar} alt={'star'}/>
                </CardHeader>
                <Img src={HotelPic}></Img>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Impedit praesentium eveniet, ipsa est consectetur maxime?.
                </Text>

            </Card>
        </Container>
    );
}

export default Hotels;

const Container = styled.div`
    margin: 10px;
`;
const Header = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
`;
const Card = styled.div`
    border: 1px solid #e6e6e6;
    margin-bottom: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
`;
const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Name = styled.div`
    display: block;
    margin-left: 4.2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;
const FavStar = styled.img`
    cursor: pointer;
    width: 2rem;
    height: 1.8rem;
    margin-top: 0.8rem;
    margin-right: 0.5rem;
`;
const Img = styled.img`
    display: block;
    margin-left: 4.2rem;
    margin-right: auto;
    padding-bottom: 1rem;
`;
const Text = styled.div`
    display: block;
    margin-left: 4.2rem;
    margin-right: 3rem;
    padding-bottom: 1rem;
`;
