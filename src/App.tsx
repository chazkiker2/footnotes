import React from 'react';
import { Grommet } from 'grommet';
import { dark } from "grommet/themes"
// import { theme } from "./theme";

export default function App() {
  return (
    <Grommet theme={dark}>
      <header>
        <h1>Footnotes</h1>
      </header>
    </Grommet>
  );
}
