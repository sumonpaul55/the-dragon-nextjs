import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import headingImage from "@/assets/thedragonnews.png"
import Image from 'next/image';
import { getNewDayMonthDateYear } from '@/utils/getCurrentTime';
const Header = () => {
    const todyastime = getNewDayMonthDateYear();
    return (
        <Box className="py-5 w-full text-center">
            <Container>
                <Image src={headingImage} height={100} alt='the Dragon news' width={300} className='mx-auto' />
                <Typography color="gray" variant="body2" textAlign="center">Journalism Without Fear or Favour</Typography>
                <Typography variant='h4'>
                    {todyastime}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;