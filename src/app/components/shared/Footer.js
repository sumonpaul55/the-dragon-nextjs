
import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

const navItems = [
    {
        route: "home",
        pathname: "/"
    },
    {
        route: "Pages",
        pathname: "/page"
    },
    {
        route: "Category",
        pathname: "/category"
    },
    {
        route: "News",
        pathname: "/news"
    },
    {
        route: "Post",
        pathname: "/post"
    },
    {
        route: "Contact",
        pathname: "/contact"
    },
]
const Footer = () => {
    return (
        <Box className="bg-black py-20 text-white">
            <Container>
                <Box sx={{ "& svg": { color: "white" } }} className="w-full text-center">
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                </Box>
                <Box className="w-full text-center">
                    {navItems.map((page) => (
                        <Link href={page.pathname} key={page}>
                            <Button className="text-white">
                                {page.route}
                            </Button>
                        </Link>
                    ))}
                </Box>
                <Typography color="gray" variant="body2" textAlign="center">
                    @2023 the dragon news designed by || Ph hero
                </Typography>
            </Container>
        </Box >
    );

};

export default Footer;