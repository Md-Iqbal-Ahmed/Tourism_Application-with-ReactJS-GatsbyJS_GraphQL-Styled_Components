import React, { useEffect } from "react"
import styled from "styled-components"
import image from "../components/assets/images/boat.jpg"
import { Button } from "../components/Button"
import Aos from "aos"
import "aos/dist/aos.css"

const Email = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <EmailContainer id="email">
      <EmailContent>
        <h1 data-aos="fade-down">Get Access to Exclusive Offers</h1>
        <p data-aos="fade-down">
          Sign up for your newsletter below to get $100 off your first trip
        </p>
        <form data-aos="fade-up" action="#">
          <FormWrap>
            <label>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                required
              />
              <Button
                as="button"
                type="submit"
                primary="true"
                round="true"
                css={`
                  height: 48px;
                  @media screen and (max-width: 768px) {
                    width: 100%;
                  }
                `}
              >
                Sign Up
              </Button>
            </label>
          </FormWrap>
        </form>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${image}) no-repeat center;
  background-size: cover;
  height: 500px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-name: sample;
  animation-duration: 2s;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
  }
  p {
    text-align: center;
    margin-bottom: 2rem;
    font-size: clamp(0.8rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
  }
  form {
    z-index: 10;
  }

  @keyframes sample {
    from {
      transform: translateY(-25%);
    }
  }
`

const FormWrap = styled.div`
  input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    input {
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
    }
  }
`
