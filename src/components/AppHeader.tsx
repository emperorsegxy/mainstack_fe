import {AppBar, IconButton} from "@mui/material";
import useWindowWidth from "../composable/useWindowWidth.ts";
import {Menu} from "@mui/icons-material";

type Props = {
    openDrawer: boolean
    setOpenDrawer: (v: boolean) => void
}
export default function AppHeader ({openDrawer, setOpenDrawer}: Props) {
    const windowWidth = useWindowWidth()
    return (
        <AppBar elevation={0} sx={{height: '68px', background: "#FFF", width: windowWidth >= 826 ? 'calc(100vw - 304px)' : '100vw'}}>
            <div className={`flex items-center justify-between pr-6`} style={{height: '100%', paddingLeft: '60px'}}>
                <h3 className={'font-bold text-xl text-black'}>Dashboard</h3>
                <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ ...(windowWidth >=826 && { display: 'none' }) }}>
                    <Menu />
                </IconButton>
            </div>
        </AppBar>
    )
}
