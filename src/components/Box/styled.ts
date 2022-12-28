import styled, { css } from 'styled-components';

interface ColorsProps {
    color:
        | 'primary'
        | 'primaryVariant'
        | 'primaryVariant_2'
        | 'secondary'
        | 'secondaryVariant'
        | 'secondaryVariant_2'
        | 'sky'
        | 'skyVariant'
        | 'skyVariant_2'
        | 'warning'
        | 'warningVariant'
        | 'warningVariant_2'
        | 'error'
        | 'errorVariant'
        | 'errorVariant_2'
        | 'neutral'
        | 'neutralVariant'
        | 'neutralVariant_2'
        | 'neutralLight'
        | 'neutralLightVariant'
        | 'neutralMedium'
        | 'neutralMediumVariant'
        | 'neutralDark'
        | 'neutralDarkVariant';
}

export interface StyledProps {
    flex?: boolean;
    items?: 'baseline' | 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'inherit' | 'initial';
    justify?:
        | 'baseline'
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'stretch'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | 'inherit'
        | 'initial';
    w?: string;
    h?: string;
    bg?: ColorsProps['color'];
    bColor?: ColorsProps['color'];
    mx?: string;
    my?: string;
    px?: string;
    py?: string;
    border?: string;
    rounded?: string;
    space?: string;
    center?: boolean;
    shadow?: boolean;
}

const StyledBox = css<StyledProps>`
    ${({ theme }) => css`
        ${({ flex, h, w, ...props }: StyledProps) => css`
            ${flex &&
            css`
                display: flex;
                align-items: ${props.items};
                justify-content: ${props.justify};
                gap: ${props.space};
            `}

            ${w &&
            css`
                width: ${w};
            `}

            ${h &&
            css`
                height: ${h};
            `};

            ${props.bg &&
            css`
                background: ${theme.colors[props.bg]};
            `}

            ${props.mx &&
            css`
                margin-right: ${props.mx};
                margin-left: ${props.mx};
            `}
            ${props.my &&
            css`
                margin-top: ${props.my};
                margin-bottom: ${props.my};
            `}

            ${props.px &&
            css`
                padding-inline: ${props.px};
            `}

            ${props.py &&
            css`
                padding-block: ${props.py};
            `}

            ${props.border &&
            props.bColor &&
            css`
                border: ${props.border} solid ${theme.colors[props.bColor]};
            `}

            ${props.rounded &&
            css`
                border-radius: ${props.rounded || '12px'};
            `}

            ${props.center &&
            css`
                margin: 0 auto;
            `}

            ${props.shadow &&
            css`
                box-shadow: 0 0 12px ${theme.colors.neutralDarkVariant_2};
            `}
        `}
    `}
`;

const StyledArticle = styled.article`
    ${StyledBox}
`;

const StyledAside = styled.aside`
    ${StyledBox}
`;

const StyledDiv = styled.div`
    ${StyledBox}
`;
const StyledFooter = styled.footer`
    ${StyledBox}
`;

const StyledHeader = styled.header`
    ${StyledBox}
`;

const StyledMain = styled.main`
    ${StyledBox}
`;

const StyledNav = styled.nav`
    ${StyledBox}
`;

const StyledSection = styled.section`
    ${StyledBox}
`;
export { StyledArticle, StyledAside, StyledDiv, StyledFooter, StyledHeader, StyledMain, StyledNav, StyledSection };
