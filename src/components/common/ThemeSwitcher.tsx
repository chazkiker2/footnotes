import { useTheme } from "../../context/ThemeContext"
import { Button } from "grommet"
import { Moon, Sun } from "grommet-icons"


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ThemeSwitcherProps { }

export default function ThemeSwitcher(props: ThemeSwitcherProps) {
  // eslint-disable-next-line no-empty-pattern
  const { } = props

  const { theme, toggleTheme } = useTheme()

  const ThemeIcon: typeof Moon = theme.isDark ? Moon : Sun

  return (
    <Button icon={<ThemeIcon />} onClick={toggleTheme} hoverIndicator />
  )

}
