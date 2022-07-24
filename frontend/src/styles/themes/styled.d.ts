import 'styled-components';

declare module 'styled-components' {
  export interface DeafautTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      tertiary: string;

      white: string;
      black: string;
      gray: string;

      sucess: string;
      info: string;
      warning: string;
    };
  }
}
