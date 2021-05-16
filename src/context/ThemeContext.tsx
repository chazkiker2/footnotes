import React from "react"
import { dark, grommet } from "grommet/themes"
import { Theme } from "../types"

export interface ThemeProviderProps {
  children: React.ReactNode
}

export interface ThemeProviderState {
  theme: Theme,
  toggleTheme: () => void
}

const defaultLightTheme: Theme = {
  id: "light",
  displayName: "Light",
  theme: grommet,
  isDark: false,
}
const defaultDarkTheme: Theme = {
  id: "dark",
  displayName: "Dark",
  theme: dark,
  isDark: true,
}
const defaultTheme = defaultDarkTheme

export const ThemeContext = React.createContext<ThemeProviderState>({
  theme: defaultTheme,
  toggleTheme() {
    throw new Error(
      `ThemeContext not yet initialized. Cannot toggle theme until ThemeContext is initialized`
    )
  }
})
ThemeContext.displayName = "ThemeContext"

export function ThemeProvider(props: ThemeProviderProps) {
  const [theme, setTheme] = React.useState(defaultTheme)

  const value: ThemeProviderState = React.useMemo(
    () => ({
      theme,
      toggleTheme: () => {
        setTheme((t) => (t.isDark ? defaultLightTheme : defaultDarkTheme))
      },
    }),
    [theme.id]
  )

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export const ThemeConsumer = ThemeContext.Consumer

export function useTheme() {
  return React.useContext(ThemeContext)
}
