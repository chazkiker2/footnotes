import { Main, Box } from "grommet"
import Layout from "../layouts/Layout"
import FootnotesMD from "./FootnotesMD"
import { useTheme } from "../../context/ThemeContext"

export default function Home() {
  const {theme} = useTheme()
  return (
    <Layout >
      <Main fill >
        <Box margin="large">
          <FootnotesMD theme={theme} />
        </Box>
      </Main>
    </Layout>
  )
}
