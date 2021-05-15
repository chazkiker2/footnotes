import { Grommet } from 'grommet';
import { useTheme } from "./context/ThemeContext"
import Home from "./components/pages/Home"

export default function App() {
  const { theme } = useTheme()

  return (
    <>
      {/* <style>
        {`body { background-color: ${theme.isDark ? "#111111" : "#FFFFFF"} }`}
      </style> */}
      <Grommet full theme={theme.theme}>
        <Home />
      </Grommet>
    </>
  );
}
