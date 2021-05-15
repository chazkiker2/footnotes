import ThemeSwitcher from "../common/ThemeSwitcher"
import { Header, Heading, Box } from "grommet"

export default function HeaderComponent() {
  return (
    <Header background="dark-1">
      <Heading level="2" margin="none" responsive>footnotes<sup>1</sup></Heading>
      <Box>
        <ThemeSwitcher />
      </Box>
    </Header>
  )
}
