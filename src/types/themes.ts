import { ThemeType } from "grommet"

export type ThemeName =
  | "auto"
  | "dark"
  | "light"


export type ThemePair = {
  id: ThemeName,
  color?: string
}

export interface StaticThemeColors {
  black: string
  blue: string
  blueGray: string
  brown: string
  gray: string
  green: string
  lightRed: string
  orange: string
  pink: string
  purple: string
  red: string
  teal: string
  transparent: 'transparent'
  white: string
  yellow: string
}

export interface ThemeColors extends StaticThemeColors {
  primaryBackgroundColor: string
  primaryForegroundColor: string

  backgroundColor: string
  backgroundColorDarker1: string
  backgroundColorDarker2: string
  backgroundColorDarker3: string
  backgroundColorDarker4: string
  backgroundColorDarker5: string
  backgroundColorLess1: string
  backgroundColorLess2: string
  backgroundColorLess3: string
  backgroundColorLess4: string
  backgroundColorLess5: string
  backgroundColorLighter1: string
  backgroundColorLighter2: string
  backgroundColorLighter3: string
  backgroundColorLighter4: string
  backgroundColorLighter5: string
  backgroundColorMore1: string
  backgroundColorMore2: string
  backgroundColorMore3: string
  backgroundColorMore4: string
  backgroundColorMore5: string
  backgroundColorTransparent05: string
  backgroundColorTransparent10: string
  backgroundColorTintedRed: string

  foregroundColor: string
  foregroundColorMuted10: string
  foregroundColorMuted25: string
  foregroundColorMuted40: string
  foregroundColorMuted65: string
  foregroundColorTransparent05: string
  foregroundColorTransparent10: string
}

export interface Theme {
  id: ThemeName
  displayName: string
  theme: ThemeType
  isDark: boolean
}

export interface CustomTheme extends ThemeColors {
  id: ThemeName
  displayName: string
  isInverted: boolean
  invert: () => Theme
}
