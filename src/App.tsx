import {ThemeProvider} from "@mui/material";
import theme from "./utils/theme.ts";
import SideNav from "./components/SideNav.tsx";
import AppHeader from "./components/AppHeader.tsx";
import DashboardHome from "./components/DashboardHome/DashboardHome.tsx";
import {useEffect, useState} from "react";
import useWindowWidth from "./composable/useWindowWidth.ts";

function App() {
    const [openDrawer, setOpenDrawer] = useState(true)
    const windowWidth = useWindowWidth()
    useEffect(() => {
        setOpenDrawer(windowWidth >= 826)
    }, [windowWidth])
  return (
    <>
      <ThemeProvider theme={theme}>
          <div>
              <SideNav openDrawer={openDrawer} />
              <AppHeader openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
              <div>
                  <DashboardHome />
              </div>
          </div>
      </ThemeProvider>
    </>
  )
}

export default App
