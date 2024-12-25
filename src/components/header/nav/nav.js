
import React from "react";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import './nav.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import HeadphonesIcon from '@mui/icons-material/Headphones';

const Nav = () => {
    return (
        <div className="nav d-flex align-items-center">

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                    <Button className="bg-success text-white cat-tab"><GridViewIcon />&nbsp; Browse All Categories <KeyboardArrowDownIcon /></Button>

                    </div>
                    <div className="col-sm-7 d-flex align-items-center part2">
                        <nav>
                            <ul className="list-line-inline mb-0">
                                <li className="list-line-item"><Button><Link>Home</Link></Button></li>
                             
                                <li className="list-line-item"><Button><Link>About</Link></Button></li>
                                <li className="list-line-item"><Button><Link>Shop</Link></Button></li>
                                <li className="list-line-item"><Button><Link>Vendors</Link></Button></li>
                                <li className="list-line-item"><Button><Link>Mega Menu</Link></Button></li>
                                <li className="list-line-item"><Button><Link>Blog</Link></Button></li>
                                <li className="list-line-item"><Button><Link>Pages</Link></Button>
                                <div className="dropdown_menu"></div>
                                </li>

                                <li className="list-line-item"><Button><Link>Contact</Link></Button></li>
                            
                            </ul>

                        </nav>

                    </div>
                    <div className="col-sm-2 part3 d-flex align-items-center ">
                        <div className="ph-mb d-flex align-items-center ml-auto">
                            <span><HeadphonesIcon/></span>
                            <div className="info ml-3">
                            <h5 className="text-g mb-0">1900-800</h5>
                            <p className="mb-0">24/7 Support Center</p>
                            </div>


                        </div>

                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default Nav;
