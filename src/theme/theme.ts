import { DefaultTheme } from 'styled-components';

import { baseColors } from './colors';
import { baseTypography } from './typography';
import { baseSizes } from './sizes';

const theme: DefaultTheme = {
    colors: {
        ...baseColors,
    },
    typography: {
        ...baseTypography,
    },
    sizes: {
        ...baseSizes,
    },
};

export { theme };
