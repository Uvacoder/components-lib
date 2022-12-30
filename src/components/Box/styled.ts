import styled, { css } from 'styled-components';

import { ColorsProps } from '@src/infra/interfaces/ColorsProp';

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
    flexWrap?: boolean;
    direction?: 'row' | 'column';
    w?: string;
    minW?: string;
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
    zIndex?: string;
}

const StyledBox = styled.div<StyledProps>`
    ${({ theme }) => css`
        ${({ flex, h, w, ...props }: StyledProps) => css`
            ${flex &&
            css`
                display: flex;
                align-items: ${props.items};
                justify-content: ${props.justify};
                gap: ${props.space};
                flex-wrap: ${props.flexWrap ? 'wrap' : null};

                flex-direction: ${props.direction ? props.direction : null};
            `}

            width: ${w ? w : null};

            min-width: ${props.minW ? props.minW : null};

            height: ${h ? h : null};

            background-color: ${props.bg ? theme.colors[props.bg] : null};

            margin-inline: ${props.mx ? props.mx : null};

            margin-block: ${props.my ? props.my : null};

            padding-inline: ${props.px ? props.px : null};

            padding-block: ${props.py ? props.py : null};

            ${props.border &&
            props.bColor &&
            css`
                border: ${props.border} solid ${theme.colors[props.bColor]};
            `};

            border-radius: ${props.rounded ? `${props.rounded || '12px'}` : null};

            margin: ${props.center ? '0 auto' : null};

            box-shadow: ${props.shadow ? `0 0 12px ${theme.colors.neutralDarkVariant_2}` : null};

            z-index: ${props.zIndex ? props.zIndex : null};
        `}
    `}
`;

export { StyledBox };
