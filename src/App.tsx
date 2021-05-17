import { Grommet } from 'grommet';
import { grommet } from "grommet/themes"
import { useTheme } from "./context/ThemeContext"
import { deepMerge } from 'grommet/utils';
import Home from "./components/pages/Home"

const themeOverrides = {
  global: {
    font: {
      family: "Times New Roman",
      size: "18px",
      height: "24px",
      maxWidth: "432px"
    },
  }
}

const customTheme = deepMerge(grommet, themeOverrides)

export default function App() {
  const { theme } = useTheme()

  return (
    <>
      <Grommet full theme={customTheme} themeMode={theme.isDark ? "dark" : "light"}>
        <Home />
      </Grommet>
    </>
  );
}
