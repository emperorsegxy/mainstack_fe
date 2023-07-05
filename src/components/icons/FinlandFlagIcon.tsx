import {createSvgIcon} from "@mui/material";

export default function FinlandFlagIcon() {
    const Icon = createSvgIcon(<svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision"
                                    textRendering="geometricPrecision" imageRendering="optimizeQuality"
                                    fillRule="evenodd" clipRule="evenodd" viewBox="0 0 841.05 586.08">
        <g fillRule="nonzero">
            <path fill="#fff"
                  d="M839.41 47.68V538.4c0 25.33-20.72 46.05-46.04 46.05H47.68c-22.51 0-41.38-16.38-45.3-37.81V39.44c3.92-21.43 22.79-37.8 45.3-37.8h745.69c25.32 0 46.04 20.72 46.04 46.04z"/>
            <path fill="#003580" d="M1.64 236.17h837.77v89.41H1.64z"/>
            <path fill="#003580" d="M240.04 1.64v582.81h-89.41V1.64z"/>
        </g>
        <rect fill="none" stroke="#CCC" strokeWidth="3.27" strokeMiterlimit="22.926" x="1.64" y="1.63" width="837.77"
              height="582.81" rx="44.53" ry="46.04"/>
    </svg>, 'finland-flag')
    return <Icon/>
}
