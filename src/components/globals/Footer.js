import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import { FaTwitterSquare, FaLinkedin, FaPython } from "react-icons/fa"

export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaTwitterSquare className="icon twitter-icon" />,
        path: "https://twitter.com",
      },
      {
        id: 2,
        icon: <FaLinkedin className="icon linkedin-icon" />,
        path: "https://www.linkedin.com/in/marc-van-der-valk/",
      },
      {
        id: 3,
        icon: <FaPython className="icon python-icon" />,
        path: "https://python.org",
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="title">eatery</div>
        <div className="icons">
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="copyright">
          copyright &copy; {new Date().getFullYear()} Eatery
        </p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
  .title {
    text-align: center;
    width: 10rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    padding: 0.3rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5rem;
    ${styles.border({ color: `${styles.colors.mainYellow}` })};
  }
`
