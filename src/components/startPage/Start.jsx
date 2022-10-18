import React from "react";
import { useParams, Link, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import puppy from "../../assets/puppy.png";
import threeFriends from "../../assets/three_friends.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../storage/modalWindow/ActionCreators";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import logo from "../../assets/logo_purple.png";
import "../../css_modules/Modal.css";
import Footer from "./Footer";
import Header from "./Header";

function Start() {
    const params = useParams();
    const id = params.id;

    const dispatch = useDispatch();
    const isShown = useSelector((state) => state.modalWindow.isShown);

    return (
        <Container>
            <Header />
            <div className={`modal_wrapper ${isShown ? "open" : "close"}`}>
                {/* <div> */}
                <div className="modal_body">
                    <div className="modal_header">
                        <Logo />
                        <Link to="/">
                            <div
                                className="btn_modal_close"
                                onClick={() => dispatch(toggleModal())}
                            >
                                ×
                            </div>
                        </Link>
                    </div>
                    <WelcomeText>
                        Welcome! Please sign in/sign up to continue
                    </WelcomeText>
                    <div className="buttons">
                        <Link to={`/sign-in/${id}`}>
                            <Button>Sign In</Button>
                        </Link>
                        <Link to={`/sign-up/${id}`}>
                            <Button>Sign Up</Button>
                        </Link>
                    </div>
                    <div>
                        <Switch>
                            <Route path="/sign-in/:id">
                                <SignInForm />
                            </Route>
                            <Route path="/sign-up/:id">
                                <SignUpForm />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
            <FirstWhite>
                <Pawfessional>
                    <BlackFont>Welcome to your</BlackFont>
                    <PurpleFont>pawfessional</PurpleFont>
                    <LastRow>community</LastRow>
                    <Link to="/sign-up/lost">
                        <LostButton onClick={() => dispatch(toggleModal())}>
                            I lost my Pet!
                        </LostButton>
                    </Link>
                    <Link to="/sign-up/found">
                        <FoundButton
                            onClick={() => {
                                dispatch(toggleModal());
                            }}
                        >
                            I found a Pet!
                        </FoundButton>
                    </Link>
                    <TextWithLink>
                        <span>I'm okay, just want to </span>
                        <span onClick={() => dispatch(toggleModal())}>
                            <Link to="/sign-up/home">JOIN</Link>
                        </span>
                        <span> the pawsome community!</span>
                    </TextWithLink>
                </Pawfessional>
                <Puppy />
            </FirstWhite>
            <Purple>
                <Text>
                    Our fluffy space for lovers, admirers, dads and moms of our
                    four-legged, winged, tailed guys.
                </Text>
            </Purple>
            <SecondWhite>
                <ThreeFriends />
                <NeedsList>
                    <Caption>
                        Here is collected everything that your pet needs:
                    </Caption>
                    <NeedsUl>
                        <NeedsLi>
                            <BlackListItem>
                                professional veterinarian tips
                            </BlackListItem>
                        </NeedsLi>
                        <NeedsLi>
                            <BlackListItem>
                                useful information about education and care
                            </BlackListItem>
                        </NeedsLi>
                        <NeedsLi>
                            <BlackListItem>fostering home search</BlackListItem>
                        </NeedsLi>
                        <NeedsLi>
                            <BlackListItem>
                                information about pet-sitting and walking
                                service
                            </BlackListItem>
                        </NeedsLi>
                        <NeedsLi>
                            <BlackListItem>
                                and of course, great communication with new
                                friends in your social network!
                            </BlackListItem>
                        </NeedsLi>
                    </NeedsUl>
                </NeedsList>
            </SecondWhite>
            <Footer />
        </Container>
    );
}

const Container = styled.div``;
const FirstWhite = styled.div`
    display: flex;
    flex-direction: row;
    height: 38.75rem;

    @media only screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        margin-bottom: 4rem;
    }
`;
const Pawfessional = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6.25rem;
    width: calc(100% / 2);

    @media only screen and (max-width: 900px) {
        margin-top: 4rem;
    }
`;
const BlackFont = styled.h3`
    color: black;
    font-size: 3.125rem;
    margin-left: 9.375rem;
`;
const PurpleFont = styled(BlackFont)`
    color: #2a3d66;
`;
const LastRow = styled.h3`
    color: black;
    font-size: 3.125rem;
    margin-bottom: 3.125rem;
    margin-left: 9.375rem;
`;
const LostButton = styled.button`
    background: rgba(122, 179, 243, 0.2);
    border-radius: 0px 3.125rem 3.125rem 0px;
    border: transparent;
    cursor: pointer;
    font-size: 2rem;
    height: 5.6rem;
    width: 31.25rem;
    &:hover {
        width: 33rem;
    }
`;
const FoundButton = styled.button`
    background: #bfbefc;
    border-radius: 0px 3.125rem 3.125rem 0px;
    border: transparent;
    cursor: pointer;
    font-size: 2rem;
    height: 5.6rem;
    width: 31.25rem;
    &:hover {
        width: 33rem;
    }
`;
const TextWithLink = styled.div`
    margin: 3.1rem 0 3.1rem 9.375rem;

    @media only screen and (max-width: 900px) {
        display: none;
    }
`;
const Puppy = styled.div`
    background-image: url(${puppy});
    background-repeat: no-repeat;
    background-size: content;
    width: calc(100% / 2);

    @media only screen and (max-width: 900px) {
        display: none;
    }
`;
const Purple = styled.div`
    align-items: center;
    background: #bfbefc;
    display: flex;
    font-size: 2rem;
    height: 16.25rem;
    justify-content: center;
`;
const Text = styled.div`
    padding: 0 2rem;
    text-align: center;
`;
const SecondWhite = styled.div`
    display: flex;
    flex-direction: row;
    height: 28.3rem;

    @media only screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
    }
`;
const ThreeFriends = styled.div`
    background-image: url(${threeFriends});
    background-position: 6rem;
    background-repeat: no-repeat;
    background-size: content;
    width: 46%;

    @media only screen and (max-width: 900px) {
        display: none;
    }
`;
const NeedsList = styled.div`
    width: 54%;
`;
const Caption = styled.h4`
    font-size: 1.5rem;
    margin-bottom: 2.685rem;
    margin-top: 4.32rem;

    @media only screen and (max-width: 900px) {
        margin-bottom: 1.5rem;
    } ;
`;
const NeedsUl = styled.ul`
    margin-left: 1rem;
`;
const NeedsLi = styled.li`
    color: #bfbefc;
`;
const BlackListItem = styled.span`
    color: black;
`;

const Logo = styled.div`
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
    height: 2rem;
    width: 9rem;
`;

const WelcomeText = styled.div`
    font-weight: 500;
    margin-bottom: 0.5rem;
`;

const Button = styled.button`
    background: rgba(122, 179, 243, 0.2);
    border: 1px solid white;
    color: black;
    height: 2rem;
    width: 100%;
    opacity: 1;

    &:hover {
        opacity: 0.5;
    }
`;

export default Start;
