import React from 'react';
import { Box, Drawer, Button, List, Divider, ListItem, ListItemButton, ListItemText, capitalize } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaRegPlusSquare } from "react-icons/fa";


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
                            <Button component={Link} to={`/${text.toLowerCase()}`} className="hover:!text-[red] w-full !text-left !justify-start">
                                <ListItemText 
                                    primary={text} 
                                    primaryTypographyProps={{ fontSize: '14px', fontWeight: 500  }}
                                className=" text-black text-transform: capitalize !important p-1 ml-2 "/>
                            </Button>
                            {/* Show icon only for Fashion */}
                            {text === "Fashion" && <FaRegPlusSquare className="mr-3" />}

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