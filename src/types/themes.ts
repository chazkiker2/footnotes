export type ThemeName =
  | "dark"
  | "light"

export interface Theme {
  displayName: string
  themeMode: ThemeName
  isDark: boolean
}
