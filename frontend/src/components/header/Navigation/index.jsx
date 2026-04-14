import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { RiMenuFill } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";
import CategoryPanel from './CategoryPanel';

import './style.css';

const Navigation = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    };

    return (
        <>
            <nav className="py-2 border-b border-gray-200">
                <div className="container flex items-center  gap-2">
                    {/* Category Button */}
                    <div className="col_1 w-[25%]">
                        <Button 
                            className="text-black! gap-2 font-bold!" 
                            onClick={openCategoryPanel}
                        >
                            <RiMenuFill className="text-[18px]" />
                            SHOP BY CATEGORIES
                            <TfiAngleDown className="text-[14px] ml-auto font-bold!" />
                        </Button>
                    </div>

                    {/* Main Nav Bar */}
                  
                    <div className="col_2 w-[80%] ">
                        <ul className="flex item-center gap-2 nav">
                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-medium">
                                <Button className="link transition font-medium! text-[rgb(0,0,0,0.9)]! hover:text-[red]!">Home</Button>
                                </Link>
                            </li>
                            <li className="list-none">
                                <Link to="/dashboard" className="link transition text-[14px] font-medium">
                                <Button className="link transition font-medium! text-[rgb(0,0,0,0.9)]! hover:text-[red]!">Dashboard</Button>
                                </Link>
                            </li>
                            <li className="list-none relative">
                                <Link to="/" className="link transition text-[14px] font-medium">
                                <Button className="link transition font-medium! text-[rgb(0,0,0,0.9)]! hover:text-[red]!">Fashion</Button>
                                </Link>


                                {/* sub nav bar*/}
                                <div className="submenu absolute top-[120%] left-0 w-25 bg-white shadow-md opacity-0 transition-all ">
                                    <ul>
                                        <li className="list-none w-full ">
                                            <Link to="/" className="w-full">
                                            <Button className="text-[rgb(0,0,0,0.8)] w-full text-left! justify-start! rounded-none!">Men</Button>
                                            </Link>
                                        </li>
                                             <li className="list-none w-full ">
                                                <Link to="/" className="w-full">

                                            <Button className="text-[rgb(0,0,0,0.8)] w-full text-left! justify-start! rounded-none!">Women</Button>
                                                </Link>
                                        </li>
                                          <li className="list-none ">
                                            <Link to="/" className="w-full">

                                            <Button className="text-[rgb(0,0,0,0.8)] w-full text-left! justify-start! rounded-none!">Kids</Button>
                                            </Link>
                                        </li>
                                             <li className="list-none ">
                                        <Link to="/" className="w-full">

                                            <Button className="text-[rgb(0,0,0,0.8)] w-full text-left! justify-start! rounded-none!">Girls</Button>
                                        </Link>
                                        </li>
                                        <li className="list-none ">
                                        <Link to="/" className="w-full">
                                            <Button className="text-[rgb(0,0,0,0.8)] w-full text-left! justify-start! rounded-none!">Boys</Button>
                                        </Link>
                                        </li>
                                                                              

                                        
                                    </ul>
                                </div>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-medium">
                                <Button className="link transition font-medium! text-[rgb(0,0,0,0.9)]! hover:text-[red]!">Electronics</Button>
                                </Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-medium">
                                <Button className="link transition font-medium! text-[rgb(0,0,0,0.9)]! hover:text-[red]!">Bags</Button>
                                </Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-medium">
                                <Button className="link transition font-medium! text-[rgb(0,0,0,0.9)]! hover:text-[red]!">Footwear</Button>
                                </Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-medium">
                                <Button className="link transition font-medium! text-[rgb(0,0,0,0.9)]! hover:text-[red]!">Groceries</Button>
                                </Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-medium">
                                <Button className="link transition font-medium! text-[rgb(0,0,0,0.9)]! hover:text-[red]!">Beauty</Button>
                                </Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-medium">
                                <Button className="link transition font-medium! text-[rgb(0,0,0,0.9)]! hover:text-[red]!">Wellness</Button>
                                </Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className="link transition text-[14px] font-medium">
                                <Button className="link transition font-medium! text-[rgb(0,0,0,0.9)]! hover:text-[red]!">Jewellery</Button>
                                </Link>
                            </li>
                        </ul> 
                    </div>
                    {/* Delivery Text */}
                    <div className="col_3 w-[20%] justify-end">
                        <p className="text-[13px] font-medium flex items-center gap-2 mb-0 mt-0">
                            <GoRocket className="text-[18px]" />
                            Free International Delivery
                        </p>
                    </div>
                </div>
            </nav>

            {/* Pass state and toggle function as props */}
            <CategoryPanel 
                isOpenCatPanel={isOpenCatPanel} 
                setIsOpenCatPanel={setIsOpenCatPanel} 
            />
        </>
    );
}

export default Navigation;