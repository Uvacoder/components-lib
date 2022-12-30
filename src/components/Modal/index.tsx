import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { StyledModal, StyledModalOverlay } from './styled';

import Box from '../Box';
import Text from '../Text';

interface ModalProps {
    isOpen: boolean;
    title: string;
    onDismiss: () => void;
    children: ReactNode;
    closeOnOutsideClick?: boolean;
}

export default function Modal({ isOpen, children, closeOnOutsideClick, onDismiss, title }: ModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const body = document.body as HTMLBodyElement;
        isOpen ? body.classList.add('lock-scroll') : body.classList.remove('lock-scroll');

        closeOnOutsideClick ? onDismiss : null;

        if (body.classList.contains('lock-scroll')) {
            window.addEventListener('keyup', (e: KeyboardEvent) => {
                if (e.key === 'Escape') onDismiss();
            });
        }
    }, [closeOnOutsideClick, onDismiss, isOpen]);

    const content = isOpen ? (
        <StyledModal>
            <StyledModalOverlay onClick={onDismiss} />
            <Box
                flex
                direction="column"
                space="1.2rem"
                bg="neutralLight"
                rounded="16px"
                shadow
                w="70%"
                h="fit-content"
                minW="32rem"
                zIndex="2"
                px="1.8rem"
                py="1.8rem">
                <Box flex justify="space-between" items="center">
                    <Text size="lg" as="h2">
                        {title}
                    </Text>

                    <button onClick={onDismiss}>X</button>
                </Box>

                <Box flex justify="center">
                    {children}
                </Box>
            </Box>
        </StyledModal>
    ) : null;

    return mounted ? createPortal(content, document.getElementById('__modal-root') as Element) : null;
}
