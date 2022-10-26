import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Router from '../router'
import "./App.css";
import theme from "./assets/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
