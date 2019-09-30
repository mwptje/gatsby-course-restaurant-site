import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import { FaTwitterSquare, FaLinkedin, FaPython } from "react-icons/fa"

export default class NavbarIcons extends Component {
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
      <IconWrapper>
        {this.state.icons.map(item => {
          return (
            <a
              key={item.id}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transFunction()};
  }
  .linkedin-icon {
    color: #3b579d;
  }
  .twitter-icon {
    color: #3ab7f0;
  }
  .python-icon {
    color: #3b579d;
  }
  .icon:hover {
    color: ${styles.colors.mainYellow};
  }
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`
