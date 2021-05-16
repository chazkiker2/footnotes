import { Markdown } from "grommet";
import styled from "styled-components"
import footnotesMarkdown from "./footnotes_txt";

const CustomMarkdown = styled(Markdown)`
  width: 100%;

  blockquote {
    margin: 0;
    p {
      text-indent: 2em;
    }
  }

  figure {
    text-align: center;
    box-sizing: border-box;
    margin: 5rem auto;
    padding: 0;
    width: 100%;
    img {
      max-width: 100%;
      height: auto;
    }
    figcaption {
      font-style: italic;
      font-weight: 600;
      font-size: 1.4rem;
      margin: 5px;
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
