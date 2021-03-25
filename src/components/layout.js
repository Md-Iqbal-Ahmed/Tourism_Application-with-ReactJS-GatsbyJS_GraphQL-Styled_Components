import React, { useState } from "react"
import Header from "./header"
import { GlobalStyles } from "./styles/GlobalStyles"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  const [isOpen, setIopen] = useState(false)

  const toggle = () => {
    setIopen(!isOpen)
  }
  return (
    <>
      <GlobalStyles />
      <Header toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <main>{children}</main>
    </>
  )
}

export default Layout
