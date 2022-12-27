import {
    StyledArticle,
    StyledAside,
    StyledDiv,
    StyledFooter,
    StyledHeader,
    StyledMain,
    StyledNav,
    StyledProps,
    StyledSection,
} from './styled';

interface BoxProps extends StyledProps {
    as?: 'article' | 'aside' | 'div' | 'footer' | 'header' | 'main' | 'nav' | 'section';
    children?: React.ReactNode;
}

export default function Box({ as, children, ...styled }: BoxProps) {
    const props = {
        ...styled,
    };

    return (
        <>
            {as === 'article' ? <StyledArticle {...props}>{children}</StyledArticle> : null}

            {as === 'aside' ? <StyledAside {...props}>{children}</StyledAside> : null}

            {as === 'div' ? <StyledDiv {...props}>{children}</StyledDiv> : null}

            {as === 'footer' ? <StyledFooter {...props}>{children}</StyledFooter> : null}

            {as === 'header' ? <StyledHeader {...props}>{children}</StyledHeader> : null}

            {as === 'main' ? <StyledMain {...props}>{children}</StyledMain> : null}

            {as === 'nav' ? <StyledNav {...props}>{children}</StyledNav> : null}

            {as === 'section' ? <StyledSection {...props}>{children}</StyledSection> : null}
        </>
    );
}

Box.defaultProps = {
    as: 'div',
};
