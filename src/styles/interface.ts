interface ColorScheme {
  primary: string;
  'primary-focus': string;
  'primary-content': string;
  secondary: string;
  'secondary-focus': string;
  'secondary-content': string;
  accent: string;
  'accent-focus': string;
  'accent-content': string;
  neutral: string;
  'neutral-focus': string;
  'neutral-content': string;
  'base-100': string;
  'base-200': string;
  'base-300': string;
  'base-content': string;
  info: string;
  success: string;
  warning: string;
  error: string;
}
interface OneColor {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export type { ColorScheme, OneColor };
