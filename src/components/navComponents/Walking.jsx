import React, { useState } from "react";
import styled from "styled-components";
import Walker from "../../assets/walkingpic.png";
import emptyStar from "../../../src/assets/star_empty.png";
import fullStar from "../../assets/star_full.png";
// import { useDispatch } from "react-redux";
// import { getAuth } from "firebase/auth";
import "../../css_modules/Animation.css";

function Walking() {
    const [isFavorite, setFavorite] = useState(false);
    // const dispatch = useDispatch();
    // const auth = getAuth();

    const changeFavoriteness = () => {
        setFavorite(!isFavorite);
        // dispatch(setFavorite({ isFavorite: isFavorite, userID: auth.currentUser.uid}));
    };

    return (
        <Container>
            <Header>
                <b>Walking.</b> No time tonight? We have a solution!
            </Header>
            <Card>
                <CardHeader>
                    <Name>John Doe</Name>
                    <FavStar className='favStar' onClick={changeFavoriteness} src={isFavorite ? fullStar : emptyStar} alt={'star'}/>
                </CardHeader>
                <Img src={Walker}></Img>
                <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eveniet eligendi inventore eaque voluptas odio, repellendus
                    obcaecati repudiandae dolorem perferendis.
                </Text>
            </Card>
            <Card>
                <CardHeader>
                    <Name>John Doe</Name>
                    <FavStar className='favStar' onClick={changeFavoriteness} src={isFavorite ? fullStar : emptyStar} alt={'star'}/>
                </CardHeader>
                <Img src={Walker}></Img>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae, recusandae? Pariatur porro praesentium odio
                    explicabo! Deserunt officiis molestiae debitis.
                </Text>
            </Card>
        </Container>
    );
}

export default Walking;

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
