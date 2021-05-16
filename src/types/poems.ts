export type TextFormat = "bold" | "italics"

export interface TextFragment {
  content: string
  specialFormatting: TextFormat[]
  relatedFooter?: number
}

export interface TextLine {
  content: TextFragment[]
  indentation?: number
}

export interface Footer extends TextLine {
  id: number
}

export interface Image {
  path?: string
  url?: string
  alt: string
  title: string
}

export interface PoemFragment<Type> {
  title: string
  content: Type[]
  footers?: Footer[]
}

export interface PoemParent<Type> extends PoemFragment<Type> {
  id: number
  author: string
  image?: Image
  song?: string
}

export type Poem = PoemParent<TextLine>

export type MultiPartPoem = PoemParent<PoemFragment<TextLine>>
