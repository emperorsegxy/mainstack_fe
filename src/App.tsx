import {ThemeProvider} from "@mui/material";
import theme from "./utils/theme.ts";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
          <div className={`d-flex justify-center align-center`}>
              Mainstack
          </div>
      </ThemeProvider>
    </>
  )
}

export default App
