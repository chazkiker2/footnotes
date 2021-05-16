import React from "react"
import Layout from "../layouts/Layout"
import { Main, Markdown } from "grommet"

import footnotesMarkdown from "./footnotes_txt"

export default function Home() {
  return (
    <Layout>
      <Main elevation="large" pad="large">
        <Markdown>
          {footnotesMarkdown}
        </Markdown>
      </Main>
    </Layout>
  )
}
