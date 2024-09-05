"use client";
import { useEffect, useState} from "react";
import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    };

    const handleChatClick = () => {
        router.push('/chatbot');
    };

    return (
        <AppBar position="absolute" 
            sx={{
                width: '100%',
                bgcolor: 'white',
                zIndex: (theme) => theme.zIndex.appBar,
                borderBottom: '1px solid black',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                height: '10vh',
                display: 'flex',
                flexDirection: 'column', 
                justifyContent: 'center',
            }}>
            <Toolbar 
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                }}>
                <Typography 
                    onClick={handleClick} 
                    variant="h6" 
                    sx={{ display: 'flex', cursor: 'pointer', fontWeight: 700, color: '#849785', fontSize: '2.5vw'}}>
                    OLEA
                </Typography>
                <Box sx={{float: 'right'}} onClick={handleChatClick}>
                    <Button sx={{color: 'black', mr: '5vw', '&:hover': {color: '#849785', bgcolor: 'transparent'}}}>
                        ChatBot
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}