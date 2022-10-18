import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {
  setUserEmail,
  setUserPassword,
  setUserName,
} from "../../storage/registration/ActionCreators";
import { setUser } from "../../storage/user/ActionCreators";
import { toggleModal } from "../../storage/modalWindow/ActionCreators";

function SignUpForm() {
  const params = useParams();
  const id = params.id;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const dispatch = useDispatch();
  const { push } = useHistory();

  const auth = getAuth();

  const Registration = (e, email, password) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        dispatch(toggleModal());
        localStorage.setItem("uid", user.uid);
        localStorage.setItem("email", user.email);
        push("/" + id);
      })
      .catch((error) => {
        alert("Invalid user!");
        console.log(error);
      });
  };

  const comparePasswords = (password, confirmedPassword) => {
    if (password === confirmedPassword) {
      dispatch(setUserPassword({ password: confirmedPassword }));
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <Form action="">
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
        omBlur={(e) => {
          dispatch(setUserName({ name: name }));
        }}
      />
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
        onBlur={(e) => {
          dispatch(setUserEmail({ email: email }));
        }}
      />
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        name="Confirm password"
        id="Confirm password"
        placeholder="Password"
        required
        onChange={(e) => setConfirmedPassword(e.target.value)}
        onBlur={(e) => comparePasswords(password, confirmedPassword)}
      />
      <SubmitText>
        By clicking "Submit", you agree to us processing your information in
        accordance with <a href="#">these</a> terms
      </SubmitText>

      <Buttons>
        <SubmitButton onClick={(e) => Registration(e, email, password)}>
          Submit
        </SubmitButton>
      </Buttons>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  margin: 5px 5px 5px 0;
  padding: 0 10px;
  width: calc(100% / 2);
  align-self: flex-start;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const SubmitText = styled.p`
  font-size: 0.7rem;
  font-weight: 200;
  width: 100%;
  align-self: flex-end;
  margin: 1rem 0 0 0;
`;

const SubmitButton = styled.button`
  background: #bfbefc;
  border: transparent;
  border-radius: 15px;
  color: white;
  font-weight: 500;
  height: 2rem;
  width: 5rem;
`;

export default SignUpForm;
