import React from "react"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
