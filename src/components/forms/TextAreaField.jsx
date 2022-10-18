import React from "react";
import { useField } from "formik";
import styled from "styled-components";

export const TextAreaField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <StyledDiv>
            <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
            <StyledTextArea className="text-area" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
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
    margin-top: 1rem;
    margin-right: 1rem;
    margin-left: 5rem;
    width: 130px;
    justify-content: flex-end;
`;

const StyledTextArea = styled.textarea`
    width: 300px;
    padding: 0.3rem 0.8rem;
    border: 1px solid #ccc;
`;
