import { BsWhatsapp } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi"
import { AiFillInstagram } from "react-icons/ai"

import img1 from "./src/app/assets/Rectangle3.png"
import img2 from "./src/app/assets/Rectangl.png"
import img3 from "./src/app/assets/Rectangle 43.png"
import img4 from "./src/app/assets/Rectangl 43(1).jpeg"
import img5 from "./src/app/assets/hungry.jpg"

export const labels = [
    {
        id: 1,
        linkName: "Terms of service",
        // link: "/terms"
    },
    {
        id: 2,
        linkName: "Blog",
        // link: "/blog"
    },
    {
        id: 3,
        linkName: "Trust and security",
        // link: "/Trust-and-security"
    },
    {
        id: 4,
        linkName: "Privacy Cookies",
        // link: "/Trust-and-security"
    },
];

export const socials = [
    {
        id: 1,
        icon: <BsWhatsapp/>,
        connect: 'https://fb.com'
    },
    {
        id: 2,
        icon: <FaXTwitter />,
        connect: 'https://fb.com'

    },
    {
        id: 3,
        icon: <BiLogoLinkedin />,
        connect: 'https://fb.com'

    },
    {
        id: 4,
        icon: <BiLogoFacebook />,
        connect: 'https://fb.com'

    },

    {
        id: 5,
        icon: <AiFillInstagram />,
        connect: 'https://fb.com'
    },
];

export const project = [
    {
        id:1,
        pix: img2,
        captions: 'Provide sanitary pads to girl child'
    },

    {
        id: 2,
        pix: img4,
        captions: 'Provide accessible and quality education for out of school children'
    },

    {
        id: 3,
        pix: img5,
        captions: ''
    },

    {
        id: 4,
        pix: img4,
        captions: ''
    },

    {
        id: 5,
        pix: img5,
        captions: 'Provide food for those on the streets and hungry children'
    },

    {
        id: 6,
        pix: img1,
        captions: 'Provide food for those on the streets and hungry children'
    },
]
