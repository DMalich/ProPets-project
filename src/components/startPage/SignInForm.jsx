import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../storage/user/ActionCreators";
import { toggleModal } from "../../storage/modalWindow/ActionCreators";

function SignInForm() {
  const params = useParams();
  const id = params.id;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { push } = useHistory();
  const auth = getAuth();

  const Authorization = (e, email, password) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
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

  return (
    <Form action="">
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitText>
        By clicking "Submit", you agree to us processing your information in
        accordance with <a href="#">these</a> terms
      </SubmitText>

      <Buttons>
        <SubmitButton onClick={(e) => Authorization(e, email, password)}>
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
  padding-top: 20px;
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
  margin-top: 3rem;
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

export default SignInForm;
