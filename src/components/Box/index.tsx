import { StyledBox, StyledProps } from './styled';

interface BoxProps extends StyledProps {
    as?: 'article' | 'aside' | 'div' | 'footer' | 'header' | 'main' | 'nav' | 'section';
    children?: React.ReactNode;
}

export default function Box({ children, ...styled }: BoxProps) {
    const props = {
        ...styled,
    };

    return (
        <>
            <StyledBox {...props}>{children}</StyledBox>
        </>
    );
}

Box.defaultProps = {
    as: 'div',
};
