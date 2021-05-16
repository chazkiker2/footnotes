import { Box, Button, Text, Sidebar, BoxExtendedProps } from "grommet"
import { Theme } from "../../types";

export interface SidebarProps extends BoxExtendedProps {
  theme: Theme
}


/* cSpell:disable */
const linkedTOC = [
  ["footnotes", "#footnotes"],
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

export default function SidebarComponent(props: SidebarProps) {
  const { theme, ...rest } = props;
  return (
    <Box
      fill
      >
      <Sidebar
        // fill
        overflow="scroll"
        pad="small"
        width="small"

        elevation="small"
        background={theme.isDark ? "dark-1" : "light-1"}
        {...rest}
      >
        {linkedTOC.map(([name, link]) => (
          <Button key={name} href={link} hoverIndicator>
            <Box pad={{ horizontal: 'none', vertical: 'small' }}>
              <Text weight="bold" size="medium">{name}</Text>
            </Box>
          </Button>
        ))}

      </Sidebar>
    </Box>
  )
}
