import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FormRow, Alert } from "@job-search-app/jobify/ui-shared";
import { useAppContext } from "../context/appContext";

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

  const {isLoading, showAlert, displayAlert } = useAppContext()

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
    if (!email || !password || (!isMember && !name)) {
      if (displayAlert !== undefined) {
        displayAlert()
        return
      }
    }
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <h3>{isMember ? "Login" : "Register"}</h3>
        {showAlert ? <Alert /> : null }
        {/*  Name input */}
        {!isMember ? (<FormRow type='text' name='name' value={name} handleChange={handleNameChange} />) : null}
        <FormRow type='email' name='email' value={email} handleChange={handleEmailChange}/>
        <FormRow type='password' name='password' value={password} handleChange={handlePasswordChange}/>
        <button type="submit" className="btn btn-block">submit</button>
        <p>
          {isMember ? 'Not a member yet?' : 'Already a member?'}
          <button
            type='button'
            onClick={toggleMember}
            className='member-btn'
          >
            {isMember ? 'Register' : 'Login'}
          </button>
        </p>
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
