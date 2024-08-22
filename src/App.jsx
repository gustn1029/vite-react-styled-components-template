import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
${reset}
  /* global style 작성 */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>vite-react-styled-components-template</h1>
      <ul>
        <li></li>
      </ul>
    </>
  );
}

export default App;
