export type TextFormat = "bold" | "italics"

export interface TextFragment {
  content: string
  specialFormatting: TextFormat[]
}

export interface TextLine {
  content: TextFragment[]
  indentation?: number
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
}

export interface PoemParent<Type> extends PoemFragment<Type> {
  author: string
  image?: Image
  song?: string
}

export type Poem = PoemParent<TextLine>

export type MultiPartPoem = PoemParent<PoemFragment<TextLine>>
