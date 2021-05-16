import { Grommet } from 'grommet';
import { grommet } from "grommet/themes"
import { useTheme } from "./context/ThemeContext"
import Home from "./components/pages/Home"

export default function App() {
  const { theme } = useTheme()

  return (
    <>
      <Grommet full theme={grommet} themeMode={theme.isDark ? "dark" : "light"}>
        <Home />
      </Grommet>
    </>
  );
}
