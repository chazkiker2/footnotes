import { useTheme } from "../../context/ThemeContext"
import { Button } from "grommet"
import { Moon, Sun } from "grommet-icons"

export default function ThemeSwitcher() {

  const { theme, toggleTheme } = useTheme()

  const ThemeIcon: typeof Moon = theme.isDark ? Moon : Sun

  return (
    <Button icon={<ThemeIcon />} onClick={toggleTheme} hoverIndicator />
  )

}
