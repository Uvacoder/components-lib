import { StyledImage, StyledImageProps } from './styled';

interface ImageProps extends StyledImageProps {
    src: string;
    alt: string;
}

export default function Image({ src, alt, ...props }: ImageProps) {
    return <StyledImage {...props} role="image" src={src} alt={alt} />;
}
