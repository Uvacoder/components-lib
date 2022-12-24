import { DefaultTheme } from 'styled-components';

import { baseColors as color } from './colors';
import { baseTypography as typography } from './typography';
import { baseSizes as size } from './sizes';

const theme: DefaultTheme = {
    colors: {
        primary: color.purple_100,
        primaryVariant: color.purple_200,
        primaryVariant_2: color.purple_300,

        secondary: color.cyan_100,
        secondaryVariant: color.cyan_200,
        secondaryVariant_2: color.cyan_300,

        warning: color.yellow_100,
        warningVariant: color.yellow_200,
        warningVariant_2: color.yellow_300,

        error: color.red_100,
        errorVariant: color.red_200,
        errorVariant_2: color.red_300,

        neutral: color.blue_100,
        neutralVariant: color.blue_200,
        neutralVariant_2: color.blue_300,

        neutralLight: color.white_100,
        neutralLightVariant: color.white_200,

        neutralMedium: color.gray_100,
        neutralMediumVariant: color.gray_200,

        neutralDark: color.black_100,
        neutralDarkVariant: color.black_200,
    },
    typography: {
        display_lg: typography.roboto_display_large,
        display_md: typography.roboto_display__medium,
        display_sm: typography.roboto_display_small,

        headline_lg: typography.roboto_headline_large,
        headline_md: typography.roboto_headline_medium,
        headline_sm: typography.roboto_headline_small,

        title_lg: typography.roboto_title_large,
        title_md: typography.roboto_title_medium,
        title_sm: typography.roboto_title_small,

        label_lg: typography.roboto_label_large,
        label_md: typography.roboto_label_medium,
        label_sm: typography.roboto_label_small,

        body_lg: typography.roboto_body_large,
        body_md: typography.roboto_body_medium,
        body_sm: typography.roboto_body_small,
    },
    sizes: {
        xs: size.sizing_1,
        sm: size.sizing_2,
        md: size.sizing_3,
        lg: size.sizing_4,
        xl: size.sizing_5,
        xl2: size.sizing_6,
    },
};

export { theme };
