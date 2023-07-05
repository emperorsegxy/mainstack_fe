import {createSvgIcon} from "@mui/material";

export default function GermanFlagIcon () {
    const Icon = createSvgIcon(<svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_209_35" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
                <path d="M26 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H26C27.1046 20 28 19.1046 28 18V2C28 0.89543 27.1046 0 26 0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_209_35)">
                <path d="M26 0.25H2C1.0335 0.25 0.25 1.0335 0.25 2V18C0.25 18.9665 1.0335 19.75 2 19.75H26C26.9665 19.75 27.75 18.9665 27.75 18V2C27.75 1.0335 26.9665 0.25 26 0.25Z" fill="#0F0F0F" stroke="#101010" strokeWidth="0.5"/>
                <mask id="mask1_209_35" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
                    <path d="M26 0.25H2C1.0335 0.25 0.25 1.0335 0.25 2V18C0.25 18.9665 1.0335 19.75 2 19.75H26C26.9665 19.75 27.75 18.9665 27.75 18V2C27.75 1.0335 26.9665 0.25 26 0.25Z" fill="white" stroke="white" strokeWidth="0.5"/>
                </mask>
                <g mask="url(#mask1_209_35)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 13.3333H28V6.66667H0V13.3333Z" fill="#980505"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 20H28V13.3333H0V20Z" fill="#DC9203"/>
                </g>
            </g>
        </svg>, 'german-flag')
    return <Icon />
}
