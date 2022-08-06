import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const PageHeader = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor: "Snow" }}>
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontSize: "30px", color: "RoyalBlue" }}>
                Matrix Calculator
                </Typography>
            </Toolbar>
            </AppBar>
        </Box>
    );    
};

export default PageHeader; 