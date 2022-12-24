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
        typography: {
            display_lg: string;
            display_md: string;
            display_sm: string;

            headline_lg: string;
            headline_md: string;
            headline_sm: string;

            title_lg: string;
            title_md: string;
            title_sm: string;

            label_lg: string;
            label_md: string;
            label_sm: string;

            body_lg: string;
            body_md: string;
            body_sm: string;
        };
        sizes: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xl2: string;
        };
    }
}
