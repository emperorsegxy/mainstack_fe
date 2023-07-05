import {Avatar, Drawer, Tab, Tabs} from "@mui/material";
import sideNavData from "../assets/data/sideNavData.ts";
import {useState} from "react";
import BrandLogo from "./icons/BrandLogo.tsx";
import {makeStyles} from "@mui/styles";
import avatar from '../assets/images/avatar.svg';
import MoreIcon from "./icons/MoreIcon.tsx";
// import useWindowWidth from "../composable/useWindowWidth.ts";

const useStyles = makeStyles({
    brandLogo: {
        '& > svg': {
            width: '40px',
            height: '40px'
        }
    },
    sectionTitle: {
        color: '#56616B',
        fontSize: "12px"
    }
})

type Props = {
    openDrawer: boolean,
    // setOpenDrawer: (open: boolean) => void
}

export default function SideNav ({ openDrawer }: Props) {
    const [tab, setTab] = useState('Dashboard')
    const classes = useStyles()
    const tabStylesOverride = {
        textTransform: 'initial',
        minHeight: "48px !important",
        '& > svg': {
            marginRight: .5,
            marginBottom: 0 + '!important'
        },
        '&.Mui-selected': {
            fontWeight: '600'
        },
        '&.Mui-selected > svg': {
            stroke: '#FF5403'
        }
    }

    const drawerStylesOverride = {
        width: 304,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 304,
            boxSizing: 'border-box',
        }
    }

    const tabsWrapperOverride = {
        '& .MuiTabs-indicator': {
            height: 40 + 'px',
            left: '0 !important'
        }
    }

    return (
        <>
            <Drawer
                variant="persistent"
                open={openDrawer}
                hideBackdrop={false}
                anchor="left"
                sx={drawerStylesOverride}
            >
                <div>
                    <div className={`${classes.brandLogo} pl-16 mt-8`}>
                        <BrandLogo />
                    </div>
                    <div className="navigations mt-10">
                        {sideNavData.map((sideNav, index) => {
                            return (<div className="section mb-8" key={index}>
                                <h4 className={`pl-16 ${classes.sectionTitle}`}>{ sideNav.title }</h4>
                                <Tabs
                                    sx={tabsWrapperOverride}
                                    orientation="vertical"
                                    value={tab}
                                    onChange={(e, v) => {
                                        e.preventDefault()
                                        setTab(v)
                                    }}>
                                    {sideNav.items.map((nav, index) => (<Tab
                                        className={`flex flex-row items-center justify-start pl-16`}
                                        key={index}
                                        value={nav.text.split(/\s/).join('_')}
                                        icon={nav.icon}
                                        sx={tabStylesOverride}
                                        label={nav.text} />))}
                                </Tabs>
                            </div>)
                        })}
                    </div>
                </div>
                <div className={`flex items-center ml-16 pr-4`}>
                    <div className="flex flex-1 items-center">
                        <Avatar className={`mr-3`} src={avatar}/>
                        <h6>Blessing Daniels</h6>
                    </div>
                    <MoreIcon />
                </div>
            </Drawer>
        </>
    )
}
