import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import topImage from "@/assets/top-new-images.png"
import Image from 'next/image';
const LatestNews = () => {
    return (
        <Box className="my-5">

            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={topImage} alt='top news' width="" height="" />
                    </CardMedia>
                    <CardContent>
                        <p className='py-2 px-4 bg-pink-800 max-w-[200px] text-center text-white rounded-lg font-medium'>Technology</p>
                        <Typography gutterBottom variant="h5" component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography gutterBottom variant="span" className='text-sm my-2 block'>
                            By Awlad Hossain - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default LatestNews;