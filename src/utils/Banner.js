import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

export default function Banner({ title, subtitle, children }) {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
      {children}
    </BannerWrapper>
  )
}

// styled component
const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  .title {
    color: ${styles.colors.mainWhite};
    font-size: 3rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: "0.7rem" })};
    padding-bottom: 0.5rem;
  }
  .subtitle {
    color: ${styles.colors.mainWhite};
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.1rem" })};
    text-transform: capitalize;
    font-size: 1.5rem;
    background-color: rgba(0, 0, 0, 0.1);
  }
`
// Add default props
Banner.defaultProps = {
  title: "default title",
  subtitle: "default subtitle",
}
