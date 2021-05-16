import { Main, Box } from "grommet"
import Layout from "../layouts/Layout"
import FootnotesMD from "./FootnotesMD"

export default function Home() {
  return (
    <Layout >
      <Main fill >
        <Box margin="large">
          <FootnotesMD />
        </Box>
      </Main>
    </Layout>
  )
}
