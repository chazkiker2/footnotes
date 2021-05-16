import React from "react"
import Layout from "../layouts/Layout"
import { Main } from "grommet"

import FootnotesMD from "./FootnotesMD"

export default function Home() {
  return (
    <Layout>
      <Main elevation="large" pad="large">
        <FootnotesMD />
      </Main>
    </Layout>
  )
}
