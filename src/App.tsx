import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/Global"
import { HomePage } from "./pages/home"
import { PublicationPage } from "./pages/publication"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/publication/:id" element={<PublicationPage/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
