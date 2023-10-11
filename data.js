import { BsWhatsapp } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi"
import { AiFillInstagram } from "react-icons/ai"

import img1 from "./src/app/assets/Rectangle3.png"
import img2 from "./src/app/assets/Rectangl.png"
import img3 from "./src/app/assets/hospital.avif"
import img4 from "./src/app/assets/Rectangl 43(1).jpeg"
import img5 from "./src/app/assets/hungry.jpg"

export const labels = [
    {
        id: 1,
        linkplace: "Terms of service",
        // link: "/terms"
    },
    {
        id: 2,
        linkplace: "Blog",
        // link: "/blog"
    },
    {
        id: 3,
        linkplace: "Trust and security",
        // link: "/Trust-and-security"
    },
    {
        id: 4,
        linkplace: "Privacy Cookies",
        // link: "/Trust-and-security"
    },
];

export const socials = [
    {
        id: 1,
        icon: <BsWhatsapp/>,
        connect: 'https://chat.whatsapp.com/KUzJS4aoq5qJ8R5L0FWwSK'
    },
    {
        id: 2,
        icon: <FaXTwitter />,
        connect: 'https://x.com/oore_africa?s=21'

    },
    {
        id: 3,
        icon: <BiLogoLinkedin />,
        connect: '#'

    },
    {
        id: 4,
        icon: <BiLogoFacebook />,
        connect: 'https://facebook.com/profile.php?id=100093880538726&mibextid=2JQ9OC'

    },

    {
        id: 5,
        icon: <AiFillInstagram />,
        connect: 'https://instagram.com/oore_africa?igshid=MzRIODBiNWFIZA=='
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
        captions: 'Provide food for those on the streets and hungry children'
    },

    {
        id: 4,
        pix: img3,
        captions: 'payment of hospital bills and others'
    },

    {
        id: 5,
        pix: img4,
        captions: ''
    },

    {
        id: 6,
        pix: img1,
        captions: 'Provide food for those on the streets and hungry children'
    },
]


export const accordion = [
    {
        id: 1,
        title: 'What is Oore?',
        details: 'Oore is a technology powered Non-governmental Organization (NGO) dedicated to facilitating charitable donations. it enables individuals to donate just #500 per'
    },

    {
        id: 2,
        title: 'How does Oore work?',
        details: 'Oore operates through a user-friendly mobile app or website. Users sign up, link their payment methods, and commit to donating 500Naira every month'
    },

    {
        id: 3,
        title: 'Where does my donations go?',
        details: 'Your donation goes directly to funding charitable projects of Oore, which include initiatives related to education, healthcare, clean water, disaster relief, and'
    },

    {
        id: 4,
        title: 'Does Oore NGO make profit from my donations?',
        details: 'Absolutely not! 100% of your donations go to funding of Oore various charity works'
    },

    {
        id: 5,
        title: 'Can i choose which charity or project my donation supports?',
        details: 'Over pools of donations to maximize their impact. However, you can be rest assured that Oore diligently selects and oversees a variety of impactfulprojects to ensure that your donations have positive effects'
    },

    {
        id: 6,
        title: 'How can I get involved with Oore beyond donation?',
        details: 'Oore encourages active engagement! You can become a volunteer, participate in fundraising events, or even suggest charitable projects for consideration. Contact us for more information on getting involved.'
    },

    {
        id: 7,
        title: 'Is my personal information secure with Oore?',
        details: 'Absolutely. Oore takes data security seriously. Your personal and financial information is protected with state of the art encryption and security measures.'
    },

    {
        id: 8,
        title: 'Can i cancel my monthly donation if needed?',
        details: 'Your donation goes directly to funding charitable projects of Oore, which include initiatives related to education, healthcare, clean water, disaster relief, and'
    },

    {
        id: 9,
        title: 'Is my donation tex-deductible?',
        details: 'Oore is a registered NGO, and in mayny countries, donations to such organizations are tax deductible'
    },

    {
        id: 10,
        title: 'Can I donate more than 500Naira?',
        details: 'Yes, you can donate more than the stipulated #500. Kindly locate the Donate More option on your dashboard'
    },

    {
        id: 11,
        title: 'Do Oore accept international donations?',
        details: 'Your donations goes directly to funding charitable projects of Oore, which include initiatives related to education, healthcare, clean water, disaster relief, and'
    },
]

// All countries
// length 252
export const country = [
    { 
        place: "Afghanistan", 
        id: 1 
    },
    { place: "Aland Islands", id: 2 },
    { place: "Albania", id: 3 },
    { place: "Algeria", id: 4 },
    { place: "American Samoa", id: 5 },
    { place: "Andorra", id: 6 },
    { place: "Angola", id: 7 },
    { place: "Anguilla", id: 8 },
    { place: "Antarctica", id: 9 },
    { place: "Antigua and Barbuda", id: 10 },
    { place: "Argentina", id: 11 },
    { place: "Armenia", id: 12 },
    { place: "Aruba", id: 13 },
    { place: "Australia", id: 14 },
    { place: "Austria", id: 15 },
    { place: "Azerbaijan", id: 16 },
    { place: "Bahamas", id: 17 },
    { place: "Bahrain", id: 18 },
    { place: "Bangladesh", id: 19 },
    { place: "Barbados", id: 20 },
    { place: "Belarus", id: 21 },
    { place: "Belgium", id: 22 },
    { place: "Belize", id: 23 },
    { place: "Benin", id: 24 },
    { place: "Bermuda", id: 25 },
    { place: "Bhutan", id: 26 },
    { place: "Bolivia", id: 27 },
    { place: "Bonaire, Sint Eustatius and Saba", id: 28 },
    { place: "Bosnia and Herzegovina", id: 29 },
    { place: "Botswana", id: 30 },
    { place: "Bouvet Island", id: 31 },
    { place: "Brazil", id: 32 },
    { place: "British Indian Ocean Territory", id: 33 },
    { place: "Brunei Darussalam", id: 34 },
    { place: "Bulgaria", id: 35 },
    { place: "Burkina Faso", id: 36 },
    { place: "Burundi", id: 37 },
    { place: "Cambodia", id: 38 },
    { place: "Cameroon", id: 39 },
    { place: "Canada", id: 40 },
    { place: "Cape Verde", id: 41 },
    { place: "Cayman Islands", id: 42 },
    { place: "Central African Republic", id: 43 },
    { place: "Chad", id: 44 },
    { place: "Chile", id: 45 },
    { place: "China", id: 46 },
    { place: "Christmas Island", id: 47 },
    { place: "Cocos (Keeling) Islands", id: 48 },
    { place: "Colombia", id: 49 },
    { place: "Comoros", id: 50 },
    { place: "Congo", id: 51 },
    { place: "Congo, Democratic Republic of the Congo", id: 52 },
    { place: "Cook Islands", id: 53 },
    { place: "Costa Rica", id: 54 },
    { place: "Cote D'Ivoire", id: 55 },
    { place: "Croatia", id: 56 },
    { place: "Cuba", id: 57 },
    { place: "Curacao", id: 58 },
    { place: "Cyprus", id: 59 },
    { place: "Czech Republic", id: 60 },
    { place: "Denmark", id: 61 },
    { place: "Djibouti", id: 62 },
    { place: "Dominica", id: 63 },
    { place: "Dominican Republic", id: 64 },
    { place: "Ecuador", id: 65 },
    { place: "Egypt", id: 66 },
    { place: "El Salvador", id: 67 },
    { place: "Equatorial Guinea", id: 68 },
    { place: "Eritrea", id: 69 },
    { place: "Estonia", id: 70 },
    { place: "Ethiopia", id: 71 },
    { place: "Falkland Islands (Malvinas)", id: 72 },
    { place: "Faroe Islands", id: 73 },
    { place: "Fiji", id: 74 },
    { place: "Finland", id: 75 },
    { place: "France", id: 76 },
    { place: "French Guiana", id: 77 },
    { place: "French Polynesia", id: 78 },
    { place: "French Southern Territories", id: 79 },
    { place: "Gabon", id: 80 },
    { place: "Gambia", id: 81 },
    { place: "Georgia", id: 82 },
    { place: "Germany", id: 83 },
    { place: "Ghana", id: 84 },
    { place: "Gibraltar", id: 85 },
    { place: "Greece", id: 86 },
    { place: "Greenland", id: 87 },
    { place: "Grenada", id: 88 },
    { place: "Guadeloupe", id: 89 },
    { place: "Guam", id: 90 },
    { place: "Guatemala", id: 91 },
    { place: "Guernsey", id: 92 },
    { place: "Guinea", id: 93 },
    { place: "Guinea-Bissau", id: 94 },
    { place: "Guyana", id: 95 },
    { place: "Haiti", id: 96 },
    { place: "Heard Island and McDonald Islands", id: 97 },
    { place: "Holy See (Vatican City State)", id: 98 },
    { place: "Honduras", id: 99 },
    { place: "Hong Kong", id: 100 },
    { place: "Hungary", id: 101 },
    { place: "Iceland", id: 102 },
    { place: "India", id: 103 },
    { place: "Indonesia", id: 104 },
    { place: "Iran, Islamic Republic of", id: 105 },
    { place: "Iraq", id: 106 },
    { place: "Ireland", id: 107 },
    { place: "Isle of Man", id: 108 },
    { place: "Israel", id: 109 },
    { place: "Italy", id: 110 },
    { place: "Jamaica", id: 111 },
    { place: "Japan", id: 112 },
    { place: "Jersey", id: 113 },
    { place: "Jordan", id: 114 },
    { place: "Kazakhstan", id: 115 },
    { place: "Kenya", id: 116 },
    { place: "Kiribati", id: 117 },
    { place: "Korea, Democratic People's Republic of", id: 118 },
    { place: "Korea, Republic of", id: 119 },
    { place: "Kosovo", id: 120 },
    { place: "Kuwait", id: 121 },
    { place: "Kyrgyzstan", id: 122 },
    { place: "Lao People's Democratic Republic", id: 123 },
    { place: "Latvia", id: 124 },
    { place: "Lebanon", id: 125 },
    { place: "Lesotho", id: 126 },
    { place: "Liberia", id: 127 },
    { place: "Libyan Arab Jamahiriya", id: 128 },
    { place: "Liechtenstein", id: 129 },
    { place: "Lithuania", id: 130 },
    { place: "Luxembourg", id: 131 },
    { place: "Macao", id: 132 },
    { place: "Macedonia, the Former Yugoslav Republic of", id: 133 },
    { place: "Madagascar", id: 134 },
    { place: "Malawi", id: 135 },
    { place: "Malaysia", id: 136 },
    { place: "Maldives", id: 137 },
    { place: "Mali", id: 138 },
    { place: "Malta", id: 139 },
    { place: "Marshall Islands", id: 140 },
    { place: "Martinique", id: 141 },
    { place: "Mauritania", id: 142 },
    { place: "Mauritius", id: 143 },
    { place: "Mayotte", id: 144 },
    { place: "Mexico", id: 145 },
    { place: "Micronesia, Federated States of", id: 146 },
    { place: "Moldova, Republic of", id: 147 },
    { place: "Monaco", id: 148 },
    { place: "Mongolia", id: 149 },
    { place: "Montenegro", id: 150 },
    { place: "Montserrat", id: 151 },
    { place: "Morocco", id: 152 },
    { place: "Mozambique", id: 153 },
    { place: "Myanmar", id: 154 },
    { place: "Namibia", id: 155 },
    { place: "Nauru", id: 156 },
    { place: "Nepal", id: 157 },
    { place: "Netherlands", id: 158 },
    { place: "Netherlands Antilles", id: 159 },
    { place: "New Caledonia", id: 160 },
    { place: "New Zealand", id: 161 },
    { place: "Nicaragua", id: 162 },
    { place: "Niger", id: 163 },
    { place: "Nigeria", id: 164 },
    { place: "Niue", id: 165 },
    { place: "Norfolk Island", id: 166 },
    { place: "Northern Mariana Islands", id: 167 },
    { place: "Norway", id: 168 },
    { place: "Oman", id: 169 },
    { place: "Pakistan", id: 170 },
    { place: "Palau", id: 171 },
    { place: "Palestinian Territory, Occupied", id: 172 },
    { place: "Panama", id: 173 },
    { place: "Papua New Guinea", id: 174 },
    { place: "Paraguay", id: 175 },
    { place: "Peru", id: 176 },
    { place: "Philippines", id: 177 },
    { place: "Pitcairn", id: 178 },
    { place: "Poland", id: 179 },
    { place: "Portugal", id: 180 },
    { place: "Puerto Rico", id: 181 },
    { place: "Qatar", id: 182 },
    { place: "Reunion", id: 183 },
    { place: "Romania", id: 184 },
    { place: "Russian Federation", id: 185 },
    { place: "Rwanda", id: 186 },
    { place: "Saint Barthelemy", id: 187 },
    { place: "Saint Helena", id: 188 },
    { place: "Saint Kitts and Nevis", id: 189 },
    { place: "Saint Lucia", id: 190 },
    { place: "Saint Martin", id: 191 },
    { place: "Saint Pierre and Miquelon", id: 192 },
    { place: "Saint Vincent and the Grenadines", id: 193 },
    { place: "Samoa", id: 194 },
    { place: "San Marino", id: 195 },
    { place: "Sao Tome and Principe", id: 196 },
    { place: "Saudi Arabia", id: 197 },
    { place: "Senegal", id: 198 },
    { place: "Serbia", id: 199 },
    { place: "Serbia and Montenegro", id: 200 },
    { place: "Seychelles", id: 201 },
    { place: "Sierra Leone", id: 202 },
    { place: "Singapore", id: 203 },
    { place: "St Martin", id: 204 },
    { place: "Slovakia", id: 205 },
    { place: "Slovenia", id: 206 },
    { place: "Solomon Islands", id: 207 },
    { place: "Somalia", id: 208 },
    { place: "South Africa", id: 209 },
    { place: "South Georgia and the South Sandwich Islands", id: 210 },
    { place: "South Sudan", id: 211 },
    { place: "Spain", id: 212 },
    { place: "Sri Lanka", id: 213 },
    { place: "Sudan", id: 214 },
    { place: "Suriplace", id: 215 },
    { place: "Svalbard and Jan Mayen", id: 216 },
    { place: "Swaziland", id: 217 },
    { place: "Sweden", id: 218 },
    { place: "Switzerland", id: 219 },
    { place: "Syrian Arab Republic", id: 220 },
    { place: "Taiwan, Province of China", id: 221 },
    { place: "Tajikistan", id: 222 },
    { place: "Tanzania, United Republic of", id: 223 },
    { place: "Thailand", id: 224 },
    { place: "Timor-Leste", id: 225 },
    { place: "Togo", id: 226 },
    { place: "Tokelau", id: 227 },
    { place: "Tonga", id: 228 },
    { place: "Trinidad and Tobago", id: 229 },
    { place: "Tunisia", id: 230 },
    { place: "Turkey", id: 231 },
    { place: "Turkmenistan", id: 232 },
    { place: "Turks and Caicos Islands", id: 233 },
    { place: "Tuvalu", id: 234 },
    { place: "Uganda", id: 235 },
    { place: "Ukraine", id: 236 },
    { place: "United Arab Emirates", id: 237 },
    { place: "United Kingdom", id: 238 },
    { place: "United States", id: 239 },
    { place: "United States Minor Outlying Islands", id: 240 },
    { place: "Uruguay", id: 241 },
    { place: "Uzbekistan", id: 242 },
    { place: "Vanuatu", id: 243 },
    { place: "Venezuela", id: 244 },
    { place: "Viet Nam", id: 245 },
    { place: "Virgin Islands, British", id: 246 },
    { place: "Virgin Islands, U.s.", id: 247 },
    { place: "Wallis and Futuna", id: 248 },
    { place: "Western Sahara", id: 249 },
    { place: "Yemen", id: 250 },
    { place: "Zambia", id: 251 },
    { place: "Zimbabwe", id: 252 }
];
