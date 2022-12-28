import { StyledText, StyledTextProps } from './styled';

interface TextProps extends StyledTextProps {
    as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4';
    children?: React.ReactNode;
}

export default function Text({ children, ...styledProps }: TextProps) {
    const props = {
        ...styledProps,
    };

    return <StyledText {...props}>{children}</StyledText>;
}

Text.defaultProps = {
    as: 'p',
};
