import React from "react";
import styled from "styled-components";

function AddPost() {
  return (
    <Container>
      <Header>
        <b>Your new post!</b> Simply text and publish.
      </Header>
      <NewPostCard>
        <div className="container">
          <div className="row">
            <LeftColumn className="col-2 justify-content-right">
              <text>
                <b>Text</b>
              </text>
              <br />
              <text>up to 1500 char</text>
            </LeftColumn>
            <div className="col-10 ">
              <Textarea
                required
                autofocus="autofocus"
                wrap="off"
                cols="50"
                rows="10"
                maxLength="1500"
              ></Textarea>
            </div>
          </div>
        </div>
        <Button>
          <PublishButton>Publish</PublishButton>
        </Button>
      </NewPostCard>
    </Container>
  );
}

const Container = styled.div`
  padding-left: 3rem;
  margin-top: 1rem;
`;

const Header = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const NewPostCard = styled.div``;
const LeftColumn = styled.div`
  padding: 0;
`;

const Textarea = styled.textarea`
  border: 2px solid #bfbefc;
  padding: 7px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const PublishButton = styled.button`
  background: #bfbefc;
  border-radius: 2rem;
  border: #bfbefc;
  color: black;
  cursor: pointer;
  opacity: 1;
  padding: 0.5rem 0.5rem;
  text-transform: uppercase;
  width: 7rem;
  height: 3rem;
  margin: 1rem 6rem 0 0;
`;

export default AddPost;
