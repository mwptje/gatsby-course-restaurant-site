import React from "react"
import styled from "styled-components"
// default image
import img from "../images/bcg/homeBcg.jpeg"

// page header for the home page
function HomeHeader({ img, header }) {
  return <IndexHeader img={img}>hello from header</IndexHeader>
}
// page header for the other pages
function PageHeader({ img, header }) {
  return <DefaultHeader img={img}>hello from header</DefaultHeader>
}

// creating a styled header element
const IndexHeader = styled.header`
  min-height: calc(100vh - 54.78px);
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`

// redefine IndexHeader with changed props
const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
`
// set a default properties
HomeHeader.defaultProps = {
  img: img,
}

PageHeader.defaultProps = {
  img: img,
}

export { HomeHeader, PageHeader }
