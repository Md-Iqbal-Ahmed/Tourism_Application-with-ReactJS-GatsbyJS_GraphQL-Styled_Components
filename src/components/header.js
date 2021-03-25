import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Link as LinkS } from "react-scroll"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import { animateScroll as scroll } from "react-scroll"

const Header = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  const toggleTop = () => {
    scroll.scrollToTop()
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLink style={{ fontWeight: "bold" }} to="/" onClick={toggleTop}>
          EXPLORE
        </NavLink>
        <Bars>
          <FaBars onClick={toggle} />
        </Bars>
        <NavMenu>
          {menuData.map((item, index) => (
            <NavLink
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClass="active"
              to={item.link}
              key={index}
            >
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
        <NavBtn>
          <Button
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
            to="email"
            round="true"
            primary="true"
          >
            Book a Trip
          </Button>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  font-size: 1rem;
  padding-top: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    position: fixed;
    width: 100%;
    height: 70px;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  text-transform: capitalize;
`

const NavLink = styled(LinkS)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  &.active {
    color: #f26a2e;
  }
`

const Bars = styled(Link)`
  color: white;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  color: white;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
