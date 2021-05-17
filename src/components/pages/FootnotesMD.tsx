import { Markdown, MarkdownExtendedProps, Anchor, AnchorExtendedProps } from "grommet";
import styled from "styled-components"
import { Theme } from "../../types";
import footnotesMarkdown from "./footnotes_txt";

export interface FootnotesMDProps extends MarkdownExtendedProps {
  theme: Theme
}

const CustomMarkdown: React.FC<MarkdownExtendedProps> = styled(Markdown)`
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


const SAnchor: React.FC<AnchorExtendedProps> = styled(Anchor)`
  text-decoration: underline;
  font-weight: 630;
  font-style: italic;
`


export default function FootnotesMD(props: FootnotesMDProps) {
  const { theme, ...rest } = props;
  return (
    <>
      <CustomMarkdown
        components={{
          a: {
            component: SAnchor,
            props: { color: theme.isDark ? "light-1" : "dark-1", }
          }
        }}
        {...rest}
      >
        {footnotesMarkdown}
      </CustomMarkdown>
    </>
  )
}
