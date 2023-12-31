import {createSvgIcon} from "@mui/material";

export default function FacebookIcon() {
    const Icon = createSvgIcon(<svg xmlns="http://www.w3.org/2000/svg" aria-label="Facebook" role="img"
                                    viewBox="0 0 512 512" fill="#000000">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="512" height="512" rx="15%" fill="#1877f2"></rect>
            <path
                d="M355.6 330l11.4-74h-71v-48c0-20.2 9.9-40 41.7-40H370v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6V256h-65v74h65v182h80V330h59.6z"
                fill="#ffffff"></path>
        </g>
    </svg>, 'facebook-icon')
    return <Icon/>
}
