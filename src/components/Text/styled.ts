import styled, { css } from 'styled-components';

import { ColorsProps } from '@src/infra/interfaces/ColorsProp';
import { SizeProps } from '@src/infra/interfaces/SizeProps';

export interface StyledTextProps {
    align?: 'start' | 'end' | 'center' | 'left' | 'right';
    colors?: ColorsProps['color'];
    inline?: boolean;
    italic?: boolean;
    size?: SizeProps['sizes'];
    underline?: boolean;
    weight?: 'normal' | 'bold';
}

const StyledText = styled.p<StyledTextProps>`
    ${({ theme }) => css`
        ${({ align, colors, size, ...props }: StyledTextProps) => css`
            text-align: ${align ? align : 'initial'};

            color: ${colors ? theme.colors[colors] : 'initial'};

            display: ${props.inline ? 'inline' : 'block'};

            font-style: ${props.italic ? 'italic' : 'normal'};

            font-weight: ${props.weight ? props.weight : 'normal'};

            text-decoration: ${props.underline ? '2px underline' : 'none'};

            font: ${size &&
            css`
                ${size === 'xl2' ? theme.typography.display_md : null}
                ${size === 'xl' ? theme.typography.headline_lg : null}
                ${size === 'lg' ? theme.typography.title_lg : null}

                ${size === 'md' ? theme.typography.body_lg : null}
                ${size === 'sm' ? theme.typography.label_lg : null}
                ${size === 'xs' ? theme.typography.label_sm : null}
            `};
        `}
    `}
`;

export { StyledText };
