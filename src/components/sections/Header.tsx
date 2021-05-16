import ThemeSwitcher from "../common/ThemeSwitcher"
import { Button, Header, Heading, Box, BoxTypes } from "grommet"
import { List } from "grommet-icons"
import { Theme } from "../../types"

export interface HeaderProps extends BoxTypes {
  theme: Theme
  toggleSidebar: () => void
}

export default function HeaderComponent(props: HeaderProps) {
  const { toggleSidebar, theme, ...rest } = props

  return (
    <Header
      id="top"
      direction="row"
      align="center"
      justify="between"
      pad={{ horizontal: 'medium', vertical: "small" }}
      elevation={theme.isDark ? "none" : "small"}
      style={{ zIndex: 1000 }}
      background={theme.isDark ? "dark-2" : "light-2"}
      {...rest}
    >
      <Button href="#footnotes">
        <Heading level={2} margin="none" responsive>
          <strong>footnotes<sup>1</sup></strong>
        </Heading>
      </Button>
      <Box>
        <Box flex direction="row">
          <ThemeSwitcher />
          <Button onClick={toggleSidebar} icon={<List />} />
        </Box>
      </Box>
    </Header>
  )
}
