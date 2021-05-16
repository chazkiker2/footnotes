import { Grommet } from 'grommet';
import { useTheme } from "./context/ThemeContext"
import Home from "./components/pages/Home"

export default function App() {
  const { theme } = useTheme()

  return (
    <>
      <Grommet full theme={theme.theme}>
        <Home />
      </Grommet>
    </>
  );
}
