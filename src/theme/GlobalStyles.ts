import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body.lock-scroll {
        overflow: hidden;
    }

    body {
        font-size: ${({ theme }) => theme.sizes.md};
        width: 100%;
        height: 100%;
    }

    body * {
        font: ${({ theme }) => theme.typography.body_lg};
    }
`;

export { GlobalStyles };
