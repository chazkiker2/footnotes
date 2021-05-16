import React from "react"
import Header from "../sections/Header"
import { Grid, Main, Footer, Box, Button, Text, Sidebar, Nav } from "grommet"

export interface LayoutProps {
  children: React.ReactNode
}

const TableOfContents = [
  "Forward",
  "Dedication",
  "SMALL POIM",
  "RADIO POIM",
  "LAURENS POIM",
  "LOVE POIM",
  "PRAYER POIM",
  "MARY POIM",
  "MILWAUKEE POIM (VOL. I)",
  "RED GOLD POIM (VOL. II)",
  "NATES POIM",
  "SMALL POIMS",
  "EULOGY (RECYCLED IN IV PARTS)"
]

function SidebarButton(props: { label: string }) {
  const { label } = props

  return (
    <Box pad="small">
      <Button
        gap="medium"
        alignSelf="start"
        plain
        label={label}
      />
    </Box>
  )
}


export default function Layout(props: LayoutProps) {
  const [sidebar, setSidebar] = React.useState(true)

  const toggleSidebar = () => setSidebar(prev => !prev)

  return (
    <Grid
      fill
      rows={['auto', 'flex']}
      columns={['auto', 'flex']}
      areas={[
        { name: 'header', start: [0, 0], end: [1, 0] },
        { name: 'sidebar', start: [0, 1], end: [0, 1] },
        { name: 'main', start: [1, 1], end: [1, 1] },
      ]}
    >

      <Header gridArea="header"
        direction="row"
        align="center"
        justify="between"
        pad={{ horizontal: 'medium', vertical: 'small' }}
        background="dark-2" />

      {sidebar &&
        <Sidebar gridArea="sidebar"
          background="dark-1"
          width="small"
          animation={[
            { type: 'fadeIn', duration: 300 },
            { type: 'slideRight', size: 'xlarge', duration: 150 },
          ]}
        >
          {TableOfContents.map(name => (
            <Button key={name} href="#" hoverIndicator>
              <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                <Text>{name}</Text>
              </Box>
            </Button>
          ))}
        </Sidebar>

      }
      <Main gridArea="main">
        {props.children}
      </Main>
    </Grid>
  )
}
