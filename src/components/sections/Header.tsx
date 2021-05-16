import React from "react"
import ThemeSwitcher from "../common/ThemeSwitcher"
import { Header, Heading, Box, BoxTypes } from "grommet"

export default function HeaderComponent(props: BoxTypes) {
  return (
    <Header background="dark-1" {...props}>
      <Heading level="2" margin="none" responsive>footnotes<sup>1</sup></Heading>
      <Box>
        <ThemeSwitcher />
      </Box>
    </Header>
  )
}
