import React from "react";
import { useField, ErrorMessage } from "formik";
import styled from "styled-components";
import "../../css_modules/Field.css";

export const Field = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <StyledDiv>
      <StyledLabel htmlFor={field.name}>{label}</StyledLabel>
      <div className="input">
        <StyledInput
          className={`form-control shadow-none ${
            meta.touched && meta.error && "is-invalid"
          }`}
          {...field}
          {...props}
          autoComplete="off"
        />
        <ErrorMessage component="div" name={field.name} className="error" />
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const StyledLabel = styled.label`
  display: flex;
  margin-right: 1rem;
  margin-left: 5rem;
  width: 130px;
  justify-content: flex-end;
`;

const StyledInput = styled.input`
  width: 300px;
  margin-top: 1rem;
`;
