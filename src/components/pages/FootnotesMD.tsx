import { Markdown } from "grommet";
import styled from "styled-components"
import footnotesMarkdown from "./footnotes_txt";

const CustomMarkdown = styled(Markdown)`
  width: 100%;
  figure {
    text-align: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    img {
      margin: 0 auto;
      max-width: 100%;
      height: auto;
    }
  }
`

export default function FootnotesMD() {
  return (
    <CustomMarkdown>
      {footnotesMarkdown}
    </CustomMarkdown>
  )
}
