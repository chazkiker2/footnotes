import React from "react"
import ThemeSwitcher from "../common/ThemeSwitcher"
import { Button, Header, Heading, Box, BoxTypes } from "grommet"

export interface HeaderProps extends BoxTypes {
  toggleSidebar: () => void
}

export default function HeaderComponent({ toggleSidebar, ...rest }: HeaderProps) {
  return (
    <Header background="dark-1" {...rest}>
      <Button href="#footnotes" onClick={toggleSidebar}>
        <Heading level="2" margin="none" responsive>footnotes<sup>1</sup></Heading>
      </Button>
      <Box>
        <ThemeSwitcher />
      </Box>
    </Header>
  )
}
