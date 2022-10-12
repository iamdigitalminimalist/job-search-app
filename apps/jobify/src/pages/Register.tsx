import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FormRow, Alert } from "@job-search-app/jobify/ui-shared";


type RegisterFields = {
  name: string,
  email: string,
  password: string,
  isMember: boolean,
}

export const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isMember, setIsMember] = useState<boolean>(true);
  const [alert, showAlert] = useState<boolean>(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const toggleMember = () => {
    setIsMember(!isMember);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name)
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Login</h3>
        {alert ? <Alert /> : null }
        {/*  Name input */}
        <FormRow type='text' name='name' value={name} handleChange={handleNameChange}/>
        <FormRow type='email' name='email' value={email} handleChange={handleEmailChange}/>
        <FormRow type='password' name='password' value={password} handleChange={handlePasswordChange}/>
        <button type="submit" className="btn btn-block">submit</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;
