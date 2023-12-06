"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from "@/assets/logo.png"
// icons
import { IconButton } from '@mui/material';
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

function Navbar() {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image src={logo} alt="logo" width={200} height={100} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: "10px", marginLeft: "20px" } }}>
                        {navItems.map((page) => (
                            <Link href={page.pathname} key={page}>
                                <Button className="text-white">
                                    {page.route}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Box>
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
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;