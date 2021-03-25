import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { animateScroll as scroll } from "react-scroll"

const Footer = () => {
  const toggleTop = () => {
    scroll.scrollToTop()
  }
  return (
    <FooterContainer>
      <FooterLinkWrapper>
        <FooterDescription>
          <h1 onClick={toggleTop}>Explore</h1>
          <p>We will provide the best experience for our customers</p>
        </FooterDescription>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/">Conatct</FooterLink>
          <FooterLink to="/">Support</FooterLink>
          <FooterLink to="/">About</FooterLink>
          <FooterLink to="/">Destination</FooterLink>
          <FooterLink to="/">SponsorShip</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Videos</FooterLinkTitle>
          <FooterLink to="/">Submit Video</FooterLink>
          <FooterLink to="/">Ambassadors</FooterLink>
          <FooterLink to="/">Agency</FooterLink>
          <FooterLink to="/">Influecer</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/">Instagram</FooterLink>
          <FooterLink to="/">Facebook</FooterLink>
          <FooterLink to="/">Youtube</FooterLink>
          <FooterLink to="/">Twitter</FooterLink>
        </FooterLinkItems>
      </FooterLinkWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  color: #000;
  background: #fafafb;
`
const FooterLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const FooterDescription = styled.div`
  padding: 0 2rem;
  h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
    cursor: pointer;

    &:hover {
      color: #000;
      transform: translateY(-2px);
    }
  }
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`
const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`
const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
