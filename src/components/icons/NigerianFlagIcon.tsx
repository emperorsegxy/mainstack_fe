import {createSvgIcon} from "@mui/material";

export default function NigerianFlagIcon () {
    const Icon = createSvgIcon(<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_703_920)">
                <rect y="0.5" width="21" height="15" rx="3" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0.5H7V15.5H0V0.5ZM14 0.5H21V15.5H14V0.5Z" fill="#0A6A30"/>
            </g>
            <defs>
                <clipPath id="clip0_703_920">
                    <rect y="0.5" width="21" height="15" rx="3" fill="white"/>
                </clipPath>
            </defs>
        </svg>, 'nigerian-flag')
    return <Icon />
}
