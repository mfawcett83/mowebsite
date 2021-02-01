import React from "react"
import { css, jsx } from "@emotion/react"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div
      css={css`
          position: absolute;
          width: 615px;
          height: 100px;
          left: 825px;
          top: 0px;
          &:hover;
      `}
    >
      <Link to={`/`}>
      </Link>
            <Link
        to={`/contact/`}
        css={css`
          float: right;
        `}
      >
        Contact
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
  )
}