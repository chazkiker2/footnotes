import React from "react"
import Header from "../sections/Header"
import { useTheme } from "../../context/ThemeContext"
import { Grid, Main, Box, Button, Text, Sidebar, BoxProps } from "grommet"

export interface LayoutProps extends BoxProps {
  children: React.ReactNode
}

/* cSpell:disable */
const linkedTOC = [
  // ["footnotes", "#footnotes"],
  // ["Table of Contents", "#table-of-contents"],
  ["Note", "#note-to-reader"],
  ["Forward", "#forward"],
  ["SMALL POIM", "#small-poim"],
  ["RADIO POIM", "#radio-poim"],
  ["LAURENS POIM", "#laurens-poim"],
  ["LOVE POIM", "#love-poim"],
  ["PRAYER POIM", "#prayer-poim"],
  ["MARY POIM", "#mary-poim"],
  ["MILWAUKEE POIM (VOL.I)", "#milwaukee-poim-vol-i"],
  ["RED GOLD POIM (VOL.II)", "#red-gold-poim-vol-ii"],
  ["NATES POIM", "#nates-poim"],
  ["SMALL POIMS", "#small-poims"],
  // ["I", "i"],
  // ["II", "ii"],
  // ["III", "iii"],
  // ["IV", "iv"],
  ["EULOGY (RECYCLED IN IV.PARTS)", "#eulogy-recycled-in-iv-parts"],
  // ["I | RE: E", "#i--re-e"],
  // ["II | RE: John Jr", "#ii--re-john-jr"],
  // ["III | RE: B", "#iii--re-b"],
  // ["IV | RE: Everyone I’ve ever loved", "#iv--re-everyone-ive-ever-loved"],
]
/* cSpell:enable */
export default function Layout(props: LayoutProps) {
  const { children, ...rest } = props;

  const [sidebar, setSidebar] = React.useState(true)
  const { theme } = useTheme()

  const toggleSidebar = () => setSidebar(prev => !prev)

  const triggerIndex = () => {
    if (!sidebar) setSidebar(true)
  }

  return (
    <Grid
      fill
      rows={['auto', 'flex']}
      columns={['auto', 'flex']}
      areas={
        sidebar ? [
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'sidebar', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] },
        ] : [
          { name: 'header', start: [0, 0], end: [1, 0] },
          // { name: 'sidebar', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [0, 1], end: [1, 1] },
        ]
      }
    >

      <Header gridArea="header"
        toggleSidebar={triggerIndex}
        direction="row"
        align="center"
        justify="between"
        pad={{ horizontal: 'medium', vertical: 'small' }}
        background={theme.isDark ? "dark-2" : "light-2"} />

      {sidebar &&
        <Sidebar gridArea="sidebar"
          background={theme.isDark ? "dark-1" : "light-1"}
          width="small"
          animation={[
            { type: 'fadeIn', duration: 300 },
            { type: 'slideRight', size: 'xlarge', duration: 150 },
          ]}
        >
          <Button onClick={toggleSidebar}>Close Side Bar</Button>
          {linkedTOC.map(([name, link]) => (
            <Button key={name} href={link} hoverIndicator>
              <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
                <Text>{name}</Text>
              </Box>
            </Button>
          ))}
        </Sidebar>
      }
      {/* <Box gridArea="sidebar"
        >
          <Button onClick={toggleSidebar}>Open Sidebar</Button>
        </Box> */}
      <Main gridArea="main" {...rest}>
        {children}
      </Main>
    </Grid>
  )
}
