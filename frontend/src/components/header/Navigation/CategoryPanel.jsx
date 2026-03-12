import React from 'react';
import { Box, Drawer, List, Divider, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const CategoryPanel = ({ isOpenCatPanel, setIsOpenCatPanel }) => {
    const categories = [
        'Fashion', 'Electronics', 'Bags', 'Footwear', 
        'Groceries', 'Beauty', 'Wellness', 'Jewellery'
    ];

    return (
        <Drawer 
            anchor="left" 
            open={isOpenCatPanel} 
            // Simple inline logic to close when clicking outside
            onClose={() => setIsOpenCatPanel(false)}
        >
            <Box 
                sx={{ width: 280 }} 
                role="presentation" 
                // Simple inline logic to close when clicking any item inside
                onClick={() => setIsOpenCatPanel(false)}
            >
                <div className="p-4 bg-gray-100 font-bold text-gray-700 border-b">
                    SHOP BY CATEGORIES
                </div>
                
                <List>
                    {categories.map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton component={Link} to={`/${text.toLowerCase()}`}>
                                <ListItemText 
                                    primary={text} 
                                    primaryTypographyProps={{ fontSize: '14px', fontWeight: 500 }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                
                <Divider />
                
                <List>
                    {['My Account', 'Orders', 'Wishlist'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText 
                                    primary={text} 
                                    primaryTypographyProps={{ fontSize: '14px' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}

export default CategoryPanel;