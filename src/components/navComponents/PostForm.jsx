import React, { useState } from "react";
import styled from "styled-components";
import facebook from "../../assets/facebookLogoBlack.png";
import mail from "../../assets/mail.png";
import "../../css_modules/Animation.css";
import emptyStar from "../../../src/assets/star_empty.png";
import fullStar from "../../assets/star_full.png";
// import { pushFavorite } from "../../services/posts_service";
// import {useDispatch} from "react-redux";
// import {getAuth} from "firebase/auth";

function PostForm(post) {
    const p = post.post;
    const [isFavorite, setFavorite] = useState(false);
    // const dispatch = useDispatch();
    // const auth = getAuth();

    const changeFavoriteness = () => {
        setFavorite(!isFavorite);
        // dispatch(setFavorite({ isFavorite: isFavorite, userID: auth.currentUser.uid}));
    };

    return (
        <Li>
            <Img>
                <ImgAnimal
                    src={require("../../assets/" + p.file + "/animal.png")}
                    alt="photo"
                />
            </Img>
            <About>
                <Header>
                    <div>
                        {p.type}, {p.breed}
                    </div>
                    <FavStar
                        className="favStar"
                        onClick={changeFavoriteness}
                        src={isFavorite ? fullStar : emptyStar}
                        alt={"star"}
                    />
                </Header>
                <Info>
                    <LeftColumn>
                        <PurpleText>Color: </PurpleText>
                        <Span>{p.color}</Span>
                        <br />
                        <PurpleText>Sex: </PurpleText>
                        <Span>{p.sex}</Span>
                    </LeftColumn>
                    <RightColumn>
                        <PurpleText>Features: </PurpleText>
                        <Span>{p.features}</Span>
                    </RightColumn>
                </Info>
                <Description>
                    <PurpleText>Description: </PurpleText>
                    <Span>{p.description}</Span>
                </Description>
                <Hr />
                <span>{p.location}</span>
                <Contact>
                    <span>{p.email}</span>
                    <Links>
                        <LinkImage src={facebook} alt="facebook" />
                        <LinkImage src={mail} alt="mail" />
                    </Links>
                </Contact>
            </About>
        </Li>
    );
}

const Li = styled.li`
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    margin: 10px;
    border: 1px solid #e6e6e6;
    margin-bottom: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;
`;

const Img = styled.div`
    width: calc(100% / 3);
    align-self: center;
`;

const ImgAnimal = styled.img`
    width: 100%;
    height: auto;
`;

const About = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% / 3 * 2);
    padding: 0.5rem;
`;

const Header = styled.h4`
    text-transform: capitalize;
    color: #9b99f7;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const FavStar = styled.img`
    cursor: pointer;
    width: 2rem;
    height: 1.8rem;
`;

const Info = styled.div`
    display: flex;
    flex-direction: row;
`;

const LeftColumn = styled.div`
    width: 50%;
`;

const RightColumn = styled.div`
    width: 50%;
`;

const PurpleText = styled.span`
    color: #9b99f7;
    font-size: 0.9rem;
`;

const Span = styled.span`
    text-transform: lowercase;
    font-size: 0.9rem;
`;

const Description = styled.div`
    margin: 0.5rem 0 0 0;
    width: 100%;
`;

const Contact = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

const Links = styled.div``;

const LinkImage = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0 0 1rem;
    cursor: pointer;

    &:hover {
        // width: 1.7rem;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }
`;

const Hr = styled.hr`
    margin: 0.5rem 0;
`;

export default PostForm;
