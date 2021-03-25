import React from "react"
import { AiOutlineClose } from "react-icons/ai"
import { Link } from "react-scroll"
import { Button } from "../components/Button"
import styled from "styled-components"
import { menuData } from "../data/MenuData"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {menuData.map((item, key) => (
            <SidebarLink onClick={toggle} key={key} to={item.link}>
              {item.title}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SidebarBtnWrapper>
          <Button primary="true" round="true">
            Get A Trip
          </Button>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`
const CloseIcon = styled(AiOutlineClose)`
  color: #fff;
`
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

const SidebarWrapper = styled.div`
  color: #fff;
`
const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`
const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #f26a2e;
    transition: 0.2s ease-in-out;
  }
`
const SidebarBtnWrapper = styled.div`
  justify-content: center;
  display: flex;
`
