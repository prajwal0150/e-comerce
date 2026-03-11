import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../search';
import Navigation from './Navigation';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IoIosGitCompare } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';

//adding the shopping card icon
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
return (
    <header className='bg-white'>
  <div className='top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]'> {/* border-y replaces t and b */}
    <div className='container mx-auto px-4'> {/* Added mx-auto to center container */}
      <div className='flex items-center justify-between'>
        <div className='w-1/2'>
          <p className='text-sm font-medium'>Get up to 50% new season styles, limited time only</p>
        </div>
        <div className='w-1/2 flex items-center justify-end gap-2'> {/* Grouped links together */}
          <Link to="help-center" className='text-xs font-medium hover:text-blue-600 transition'>Help Center</Link>
          <Link to="order-tracking" className='text-xs font-medium hover:text-blue-600 transition'>Order Tracking</Link>
        </div>
      </div>
    </div>
  </div>
  <div className='header py-4 border-b-[1px] border-gray-200'>
    <div className='container flex items-center justify-between'>
        <div className='col1 w-[25%]'>
            <Link to={'/'}><img src='src/assets/logo.png' className='w-[120px]'/></Link>
        </div>
        <div className='col2 w-[45%] '>
          <Search/>
        </div>
        <div className='col3 w-[30%] flex items-center pl-5'>
            <div className="flex item-center gap-2 w-full justify-end mr-2">
              <Link to="/login" className="link transition text-[15px] font-[500]">Login</Link>/
              <Link to="/register" className="link transition text-[15px] font-[500]">Register</Link>
            </div>
            
            <div className="items-center">
              <Tooltip title="Compare" placement="top">
              <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <IoIosGitCompare className="text-gray-600 link"/>
              </StyledBadge>
            </IconButton>
            </Tooltip>
            </div>
            <div className="items-center">
              <Tooltip title="Wish list" placement='top'>
              <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <MdFavoriteBorder className="text-gray-600 link"/>
              </StyledBadge>
            </IconButton>
            </Tooltip>
            </div>
            <div className="items-center">
              <Tooltip title="cart" placement='top'>
              <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon className="text-gray-600 link"/>
              </StyledBadge>
            </IconButton>
            </Tooltip>
            </div>
        </div>

        

        
    </div>
  </div>
  <Navigation/>
    </header>
)
}

export default Header;
