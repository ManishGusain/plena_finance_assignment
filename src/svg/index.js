import Svg, { Path, Circle, G } from "react-native-svg";

export const BackIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#1E222B"
            d="M4.25.557a.747.747 0 0 0-.528.22L.235 4.246a.751.751 0 0 0 0 1.062l3.487 3.472A.749.749 0 1 0 4.78 7.718l-2.953-2.94 2.953-2.94a.75.75 0 0 0-.53-1.28Z"
        />
    </Svg>
)

export const BagIcon = ({ color }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={24}
        fill="none"
    >
        <Path
            stroke={color}
            strokeWidth={1.5}
            d="M13.448 6c-3.155.511-5.815.496-8.88-.005-2.09-.341-3.97 1.489-3.473 3.545l1.767 7.316A2.804 2.804 0 0 0 5.589 19h6.853a2.804 2.804 0 0 0 2.728-2.144l1.764-7.302c.497-2.06-1.39-3.894-3.486-3.554Z"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M5 8.832V4.5A3.5 3.5 0 0 1 8.5 1h1A3.5 3.5 0 0 1 13 4.5V9"
        />
    </Svg>
)

export const SearchIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={15}
        fill="none"
        {...props}
    >
        <Path
            fill="#F8F9FB"
            d="m15.317 14.455-2.578-2.52-.06-.093a.604.604 0 0 0-.853 0c-2.191 2.01-5.567 2.12-7.89.256-2.322-1.864-2.87-5.123-1.28-7.615 1.59-2.493 4.825-3.445 7.559-2.226 2.733 1.219 4.118 4.23 3.235 7.039a.584.584 0 0 0 .137.578c.148.156.369.222.58.174a.602.602 0 0 0 .445-.404c1.055-3.333-.539-6.918-3.75-8.438C7.651-.314 3.786.688 1.767 3.564-.252 6.44.18 10.327 2.787 12.71c2.605 2.383 6.6 2.547 9.401.386l2.283 2.232c.236.23.617.23.852 0a.588.588 0 0 0 0-.84l-.006-.033Z"
        />
    </Svg>
)

export const BackBtnIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Svg width={24} height={24} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx={20} cy={20} r={20} fill="#F8F9FB" />
            <Path
                d="M22.2506 15.5572C22.0596 15.5572 21.8676 15.6302 21.7216 15.7762L18.2346 19.2462C18.0936 19.3872 18.0146 19.5782 18.0146 19.7782C18.0146 19.9772 18.0936 20.1682 18.2346 20.3092L21.7216 23.7812C22.0146 24.0732 22.4886 24.0732 22.7816 23.7792C23.0736 23.4852 23.0726 23.0102 22.7796 22.7182L19.8266 19.7782L22.7796 16.8382C23.0726 16.5462 23.0736 16.0722 22.7816 15.7782C22.6356 15.6302 22.4426 15.5572 22.2506 15.5572Z"
                fill="#1E222B"
            />
        </Svg>
    </Svg>
)

export const CategoryIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke="#3E4554"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 4.674a3.674 3.674 0 1 1-7.348-.001 3.674 3.674 0 0 1 7.348 0Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.5}
            d="M19 4.674a3.674 3.674 0 1 1-7.348-.001 3.674 3.674 0 0 1 7.348 0Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#3E4554"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8.347 4.674a3.674 3.674 0 1 1-7.348 0 3.674 3.674 0 0 1 7.348 0Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.5}
            d="M8.347 4.674a3.674 3.674 0 1 1-7.348 0 3.674 3.674 0 0 1 7.348 0Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#3E4554"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 15.262a3.674 3.674 0 1 1-7.347-.001 3.674 3.674 0 0 1 7.347 0Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.5}
            d="M19 15.262a3.674 3.674 0 1 1-7.347-.001 3.674 3.674 0 0 1 7.347 0Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#3E4554"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8.347 15.262a3.673 3.673 0 1 1-7.346 0 3.673 3.673 0 0 1 7.346 0Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.5}
            d="M8.347 15.262a3.673 3.673 0 1 1-7.346 0 3.673 3.673 0 0 1 7.346 0Z"
            clipRule="evenodd"
        />
    </Svg>
)

export const FavIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            stroke="#3E4554"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.872 11.598c-1.073-3.35.18-7.179 3.698-8.312a6.007 6.007 0 0 1 5.43.912c1.455-1.125 3.572-1.505 5.42-.912 3.517 1.133 4.779 4.962 3.707 8.312-1.67 5.31-9.127 9.4-9.127 9.4s-7.402-4.028-9.128-9.4Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={0.2}
            strokeWidth={1.5}
            d="M2.872 11.598c-1.073-3.35.18-7.179 3.698-8.312a6.007 6.007 0 0 1 5.43.912c1.455-1.125 3.572-1.505 5.42-.912 3.517 1.133 4.779 4.962 3.707 8.312-1.67 5.31-9.127 9.4-9.127 9.4s-7.402-4.028-9.128-9.4Z"
            clipRule="evenodd"
        />
        <G
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            opacity={0.4}
        >
            <Path stroke="#3E4554" d="M16 6.7a2.781 2.781 0 0 1 1.917 2.422" />
            <Path
                stroke="#000"
                strokeOpacity={0.2}
                d="M16 6.7a2.781 2.781 0 0 1 1.917 2.422"
            />
        </G>
    </Svg>

)

export const MoreIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#3E4554"
            d="M12 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
        />
        <Path
            fill="#000"
            fillOpacity={0.2}
            d="M12 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
        />
    </Svg>

)

export const HomeIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
        <Path
            stroke="#3E4554"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="m11.953 22.116.047.003.047-.003 5.232-.327a4.5 4.5 0 0 0 4.22-4.494l-.004-5.985a4.5 4.5 0 0 0-1.223-3.08L15.27 2.915a4.5 4.5 0 0 0-6.554 0L3.723 8.222A4.5 4.5 0 0 0 2.5 11.306v5.992a4.5 4.5 0 0 0 4.22 4.491l5.233.327Z"
        />
        <Path
            stroke="#000"
            strokeLinecap="round"
            strokeOpacity={0.2}
            strokeWidth={1.5}
            d="m11.953 22.116.047.003.047-.003 5.232-.327a4.5 4.5 0 0 0 4.22-4.494l-.004-5.985a4.5 4.5 0 0 0-1.223-3.08L15.27 2.915a4.5 4.5 0 0 0-6.554 0L3.723 8.222A4.5 4.5 0 0 0 2.5 11.306v5.992a4.5 4.5 0 0 0 4.22 4.491l5.233.327Z"
        />
    </Svg>

)
