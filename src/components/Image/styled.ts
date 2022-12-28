import styled, { css } from 'styled-components';

import { ColorsProps } from '@src/infra/interfaces/ColorsProp';

export interface StyledImageProps {
    naturalWidth: string;
    naturalHeight: string;
    circle?: boolean;
    border?: boolean;
    borderColor?: ColorsProps['color'];
}

const StyledImage = styled.img<StyledImageProps>`
    ${({ theme }) => css`
        ${({ naturalWidth, naturalHeight, ...props }: StyledImageProps) => css`
            max-width: ${naturalWidth ? naturalWidth : '100%'};

            height: ${naturalHeight ? naturalHeight : '100%'};

            ${props.circle
                ? css`
                      object-fit: cover;
                      clip-path: circle();
                      border-radius: 100%;
                  `
                : null};

            ${props.border && props.borderColor
                ? css`
                      border: 3px solid ${theme.colors[props.borderColor]};
                  `
                : null}
        `}
    `}
`;

export { StyledImage };
