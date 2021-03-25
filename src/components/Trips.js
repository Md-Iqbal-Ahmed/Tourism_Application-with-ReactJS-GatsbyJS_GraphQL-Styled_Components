import React, { useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "../components/Button"
import { ImLocation } from "react-icons/im"
import Aos from "aos"
import "aos/dist/aos.css"

const Trips = () => {
  const data = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid(jpegQuality: 10) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const getTrips = data => {
    const trips = []
    data.allTripsJson.edges.forEach((item, index) => {
      trips.push(
        <ProductCard data-aos="fade-up" key={index}>
          <ProductImg
            //src={item.node.img.childImageSharp.fluid.src}
            fluid={item.node.img.childImageSharp.fluid}
            alt={item.node.alt}
          />
          <ProductInfo>
            <TextWrap data-aos="fade-down">
              <ImLocation /> <ProductTitle> {item.node.name}</ProductTitle>
            </TextWrap>

            <Button
              data-aos="fade-right"
              to="email"
              primary="true"
              round="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              activeClass="active"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
                padding: 16px 40px;
              `}
            >
              {item.node.button}
            </Button>
          </ProductInfo>
        </ProductCard>
      )
    })
    return trips
  }
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <ProductsContainer id="trips">
      <ProductsHeading data-aos="fade-up-left">
        Our Favourite Destinations
      </ProductsHeading>
      <ProductWrapper>{getTrips(data)}</ProductWrapper>
    </ProductsContainer>
  )
}

export default Trips

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: #000;
`
const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`
const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`

const ProductImg = styled(Img)`
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(60%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`
const TextWrap = styled.div`
  display: flex;
  top: 382px;
  position: absolute;
  color: #fff;
`
const ProductTitle = styled.div`
  font-weight: 400;
`
