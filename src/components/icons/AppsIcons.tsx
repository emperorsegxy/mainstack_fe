import {createSvgIcon} from "@mui/material";

export default function AppsIcon() {
    const Icon = createSvgIcon(<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/*// @ts-ignore*/}
        <mask id="mask0_5856_802" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
            <rect width="20" height="20" fill="#C4C4C4"/>
        </mask>
        <g mask="url(#mask0_5856_802)">
            <path d="M11.25 7.49992V3.33325H16.6667V7.49992H11.25ZM3.33337 9.99992V3.33325H8.75004V9.99992H3.33337ZM11.25 16.6666V9.99992H16.6667V16.6666H11.25ZM3.33337 16.6666V12.4999H8.75004V16.6666H3.33337ZM4.16671 9.16658H7.91671V4.16659H4.16671V9.16658ZM12.0834 15.8333H15.8334V10.8333H12.0834V15.8333ZM12.0834 6.66659H15.8334V4.16659H12.0834V6.66659ZM4.16671 15.8333H7.91671V13.3333H4.16671V15.8333Z" fill="#31373D"/>
        </g>
    </svg>, 'apps-icon')
    return <Icon />
}
