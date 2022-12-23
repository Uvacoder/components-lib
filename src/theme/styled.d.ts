import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            primaryVariant: string;
            primaryVariant_2: string;

            secondary: string;
            secondaryVariant: string;
            secondaryVariant_2: string;

            warning: string;
            warningVariant: string;
            warningVariant_2: string;

            error: string;
            errorVariant: string;
            errorVariant_2: string;

            neutral: string;
            neutralVariant: string;
            neutralVariant_2: string;

            neutralLight: string;
            neutralLightVariant: string;

            neutralMedium: cstring;
            neutralMediumVariant: string;

            neutralDark: string;
            neutralDarkVariant: string;
        };
        typography: {};
        sizes: {};
    }
}
