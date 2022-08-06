import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import data from "../../data/data";

const Options = ({setActiveTab}) => {
    const [value, setValue] = React.useState("0");

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setActiveTab(parseInt(newValue));
    };

    const tabs = data.tabs.labels;

    return (
        <Box sx={{ width: '100%' }}>
        <Tabs
            value={value}
            onChange={handleChange}
        >
            {tabs.map((text, index) => (
                <Tab value={index.toString()} label={text} />
            ))}
        </Tabs>
        </Box>
    );
}

export default Options; 