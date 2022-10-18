import React from "react";
import { useField } from "formik";
import styled from "styled-components";

export const SelectField = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <StyledDiv>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const StyledSelect = styled.select`
  border: 1px solid #ccc;
  color: var(--red-700);
  width: 100px;
`;

const StyledLabel = styled.label`
  display: flex;
  margin-top: 1rem;
  margin-right: 1rem;
  margin-left: 5rem;
  width: 130px;
  justify-content: flex-end;
`;
