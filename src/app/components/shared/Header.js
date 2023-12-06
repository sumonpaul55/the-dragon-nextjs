import { Box, Container } from '@mui/material';
import React from 'react';
import headingImage from "@/assets/thedragonnews.png"
import Image from 'next/image';
const Header = () => {

    return (
        <Box className="py-2">
            <Container>
                <Image src={headingImage} height={100} alt='the Dragon news' width={300} />
            </Container>
        </Box>
    );
};

export default Header;