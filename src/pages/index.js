import * as React from "react"
import Email from "../components/Email"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips />
    <Testimonials />
    <Stats />
    <Email />
    <Footer />
  </Layout>
)

export default IndexPage
