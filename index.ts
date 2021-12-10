import types from "./interface";

const darkScheme:types.ColorScheme = {
    primary: '#516DFA',
    'primary-focus': '#6A82FB',
    'primary-content': '#ffffff',
    secondary: '#11B679',
    'secondary-focus': '#13CD88',
    'secondary-content': '#ffffff',
    accent: '#DB5F6C',
    'accent-focus': '#D64A59',
    'accent-content': '#FFFFFF',
    neutral: '#3E4549',
    'neutral-focus': '#32383B',
    'neutral-content': '#ffffff',
    'base-100': '#272B2D', // make this darker
    'base-200': '#1B1E20',
    'base-300': '#111314',
    'base-content': '#AAB1B8',
    info: '#C9B900',
    success: '#13CD88',
    warning: '#AAB1B8',
    error: '#D64A59',
}

const lightScheme:types.ColorScheme = {
    primary: '#516DFA',
    'primary-focus': '#6A82FB',
    'primary-content': '#ffffff',
    secondary: '#11B679',
    'secondary-focus': '#13CD88',
    'secondary-content': '#ffffff',
    accent: '#DB5F6C',
    'accent-focus': '#D64A59',
    'accent-content': '#FFFFFF',
    neutral: '#AAB1B8',
    'neutral-focus': '#9CA4AC',
    'neutral-content': '#FFFFFF',
    'base-100': '#EEEFF1', // make this darker
    'base-200': '#F7F8F9',
    'base-300': '#FFFFFF',
    'base-content': '#AAB1B8',
    info: '#C9B900',
    success: '#13CD88',
    warning: '#AAB1B8',
    error: '#D64A59',
}

const grayScheme:types.OneColor = {
    100: "#FFFFFF",
    200: "#F7F8F9",
    300: "#EEEFF1",
    400: "#AAB1B8",
    500: "#555F65",
    600: "#3E4549",
    700: "#272B2D",
    800: "#1B1E20",
    900: "#111314"
}

export { types, lightScheme, darkScheme, grayScheme }



