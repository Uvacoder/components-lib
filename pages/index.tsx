import { useState } from 'react';
import type { NextPage } from 'next';

import Box from '@src/components/Box';
import Text from '@src/components/Text';
import Image from '@src/components/Image';
import Modal from '@src/components/Modal';

const Home: NextPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => setShowModal(!showModal);

    return (
        <>
            <Box
                as="section"
                flex
                items="center"
                justify="space-between"
                // h="300px"
                space="10rem"
                rounded="7px"
                bg="neutralMedium"
                shadow
                flexWrap
                w="90%"
                py="1.2rem"
                px="1.2rem"
                my="10rem"
                mx="auto">
                <Box as="article" flex space="2.8rem" flexWrap>
                    <Text as="h2" colors="errorVariant_2" italic weight="bold" underline>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur suscipit libero excepturi
                        hic nesciunt labore voluptates doloremque placeat ipsa, temporibus quidem deserunt expedita nemo
                        officiis, mollitia aut. Et, nam quidem.
                    </Text>

                    <Text as="span" align="end" size="lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus odio reprehenderit delectus
                        assumenda. Odio aliquam omnis, hic doloremque, veritatis tenetur vitae, quas quia laboriosam
                        consectetur quo ea odit repellendus impedit!
                    </Text>

                    <button onClick={handleModal}>Open Modal</button>

                    <Modal
                        title="Testing Modal"
                        isOpen={showModal}
                        closeOnOutsideClick={showModal}
                        onDismiss={handleModal}>
                        <Box flex direction="column" space="1.2rem">
                            <Text weight="bold">Lorem, ipsum dolor sit?</Text>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur hic quia in
                                veritatis deserunt magni nihil quos, provident voluptas numquam sed fugiat rem? Nisi
                                odit voluptatem blanditiis commodi iste nulla!
                            </Text>
                        </Box>
                    </Modal>
                </Box>

                <Box center>
                    <Image
                        src="https://github.com/lucianosants.png"
                        alt="Image test"
                        circle
                        naturalWidth="80px"
                        naturalHeight="100%"
                        border
                        borderColor="primaryVariant"
                    />
                </Box>
            </Box>
        </>
    );
};

export default Home;
