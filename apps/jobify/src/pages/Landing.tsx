import React from 'react'
import main from '../assets/images/main.svg'
import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <Wrapper>
      <div className="container page">
        {/* Info */}
        <div className="info">
          <h1>job <span>tracking</span> app</h1>
          <p>I'm baby church-key asymmetrical tacos fam, chillwave stumptown squid offal ethical yr tumblr 8-bit
            leggings. Viral mumblecore pug hell of butcher. You probably haven't heard of them venmo jianbing tumeric
            PBR&B edison bulb. Butcher ennui put a bird on it man braid.</p>
          <Link to="/register" className='btn btn-hero'>Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"/>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`
