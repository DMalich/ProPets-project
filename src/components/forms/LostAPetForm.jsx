import React from "react";
import { Formik, Form } from "formik";
import { Field } from "./Field";
import * as Yup from "yup";
import { TextAreaField } from "./TextAreaField";
import { SelectField } from "./SelectField";
import styled from "styled-components";
import { pushPost } from "../../services/posts_service";
import { useHistory } from "react-router-dom";

export default function LostAPetForm() {
  const validate = Yup.object({
    breed: Yup.string().required("Required"),
    color: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    features: Yup.string().max(30, "Must be 30 characters or less"),
    description: Yup.string().max(150, "Must be 150 characters or less"),
    phone: Yup.string().required("Required"),
  });

  const uid = localStorage.getItem("uid");
  const { push } = useHistory();

  return (
    <Formik
      initialValues={{
        type: "dog",
        sex: "male",
        breed: "",
        color: "",
        features: "",
        description: "",
        location: "",
        file: "puppy",
        phone: "",
        email: "",
        facebook: "",
        found: false,
        isFavorite: false,
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        pushPost(values, uid);
        push("/lost");
      }}
    >
      {(formik) => (
        <div>
          <h5 className="my-4 font-weight-bold-display-4 pl-3">
            Lost your buddy? Keep calm and complete the form.
          </h5>
          <Form>
            <MainContainer>
              <SelectField label="Type:" name="type">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </SelectField>
              <SelectField label="Sex:" name="sex">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </SelectField>
              <Field
                label="Breed:"
                name="breed"
                type="text"
                placeholder="Golden Retriever"
              />
              <Field
                label="Color:"
                name="color"
                type="text"
                placeholder="Biege"
              />
              <TextAreaField
                label=" Characteristics:"
                name="features"
                type="text"
                placeholder="Blue collar with stars"
              />
              <TextAreaField
                label="Description:"
                name="description"
                type="text"
                placeholder="Blue collar with stars"
              />
              <Field
                label="Location:"
                name="location"
                type="text"
                placeholder="Florentin Street, Tel Aviv"
              />
              {/* <StyledInput
                type="file"
                onChange={(e) => {
                  formik.setFieldValue("file", e.target.files[0]);
                }}
              /> */}
              <StyledInput type="file" />
              <hr />
              <Field
                label="Contacts:"
                name="phone"
                type="number"
                placeholder="Phone"
              />
              <Field name="email" type="email" placeholder="Email" />
              <Field name="facebook" type="facebook" placeholder="Facebook" />
              <StyledButton className="btn btn-dark mt-3" type="submit">
                Submit
              </StyledButton>
            </MainContainer>
          </Form>
        </div>
      )}
    </Formik>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  background: #bfbefc;
  border: transparent;
  border-radius: 15px;
  color: white;
  font-weight: 500;
  height: 2rem;
  width: 5rem;
  margin: 1rem 5rem 1rem auto;
`;

const StyledInput = styled.input`
  font-weight: 500;
  height: 2rem;
  align-self: flex-end;
  margin-top: 1rem;
`;
