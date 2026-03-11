import React from 'react'
import Button from '@mui/material/Button'
import { RiMenuFill } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";



const Navigation = () => {
  return (
    
    <nav className="py-2">{/* all navigation bar */}
         <div className="container flex items-center justify-end gap-4 ">
            {/*category button */}
            <div className="col_1 w-[25%]"> 
                <Button className="!text-black gap-2 !font-bold">
                <RiMenuFill className="text-[18px]"/>SHOP BY CATEGORIES
                <TfiAngleDown className="text-[14px] ml-auto !font-bold"/></Button>
            </div>
            {/*Main nav bar */}
            <div className="col_2 w-[60%] ">
                <ul className="flex item-center gap-4">
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className="link transition !font-[500] !text-[rgb(0,0,0,0.9)] hover:!text-[red]">Home</Button>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button>Fashion</Button>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button>Electronics</Button>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button>Bags</Button>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button>Footwear</Button>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button>Groceries</Button>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button>Beauty</Button>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button>Wellness</Button>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button>Jewellery</Button>
                        </Link>
                    </li>
                </ul> 
            </div>
            <div className="col_3 w-[20%] ">
                <p className="text-[13px] font-[500] flex items-center gap-3 mb-0 mt-0">
                    <GoRocket className="text-[18px]"/>
                                Free Intternational Delivery</p>
            </div>
            
         </div>
    </nav>
  )
}

export default Navigation
