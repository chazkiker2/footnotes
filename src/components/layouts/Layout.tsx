import React from "react"
import Header from "../sections/Header"
import { useTheme } from "../../context/ThemeContext"
import { Box, Collapsible, BoxProps } from "grommet"
import Sidebar from "../sections/Sidebar"

export interface LayoutProps extends BoxProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children, ...rest } = props;

  const [sidebar, setSidebar] = React.useState(true)
  const { theme } = useTheme()

  const toggleSidebar = () => setSidebar(prev => !prev)

  return (
    <Box fill>
      <Header theme={theme} toggleSidebar={toggleSidebar} />
      <Box flex direction="row">
        <Collapsible direction="horizontal" open={sidebar}>
          <Sidebar theme={theme} />
        </Collapsible>
        <Box fill flex align="center" justify="center" {...rest}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}
