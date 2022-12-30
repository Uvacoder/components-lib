import styled, { css } from 'styled-components';

const StyledModal = styled.div`
    ${({ theme }) => css`
        top: 0;
        position: fixed;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`;

const StyledModalOverlay = styled.div`
    background-color: ${({ theme }) => theme.colors.neutralDarkVariant_2};
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

export { StyledModal, StyledModalOverlay };
