import React, { useEffect, useState } from 'react';
import '../header/header.css';
import Logo from '../../assets/images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';
import axios from 'axios';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import IconCompare from '../../assets/images/icon-compare.png';
import IconWishlist from '../../assets/images/icon-wishlist.png';
import IconCart from '../../assets/images/icon-cart.png';
import IconUser from '../../assets/images/icon-user.png';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Nav from './nav/nav';

const Header = () => {
  const [categories] = useState([
    'Milks and Dairies',
    'Wines & Drinks',
    'Clothing & Beauty',
    'Fresh Seafood',
    'Pet Foods & Toys',
    'Fast Food',
    'Baking Material',
    'Vegetables',
    'Fresh Fruit',
    'Bread and Juice',
    'Milks and Drinks',
    'Milk and Dairy'
  ]);
  const [isOpenDropDown,setisOpenDropDown] =useState(false);

  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    getCountry();
  }, []); // Runs only once when the component mounts

  const getCountry = async () => {
    try {
      const { data } = await axios.get('https://countriesnow.space/api/v0.1/countries');
      setCountryList(data.data.map(country => country.country));
    } catch (error) {
      console.error('Error fetching country data:', error.message);
    }
  };

  return (
    <header>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-2'>
            <img src={Logo} alt="Logo" />
          </div>
          <div className='col-sm-5'>
            <div className='headerSearch d-flex align-items-center'>
              <Select data={categories} placeholder={'All Categories'} icon={false} />
              <div className='Search'>
                <input type='text' placeholder='Search for items' />
                <SearchIcon className='searchIcon cursor' />
              </div>
            </div>
          </div>
          <div className='col-sm-5 d-flex align-items-center'>
            <div className='countryWrapper'>
              <Select data={countryList} placeholder={'Your Location'} icon={<LocationOnOutlinedIcon style={{opacity:'0.5'}} />}/>
            </div>
            <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>
            <ul className='list list-inline mb headerTabs'>
              <li className='list list-item' style={{marginRight: '10px',top:'5px'}}>
                <span>
                  <img src={IconCompare}/>
                  <span className='badge bg-success rounded-circle'>3</span>
                  compare
                </span>
              </li>

              <li className='list list-item' style={{ marginRight: '10px',top: '5px' }}>
                <span>
                <img src={IconWishlist}/>
                  <span className='badge bg-success rounded-circle'>3</span>
                  wishlist
                </span>
              </li>

              <li className='list list-item'style={{marginRight:'10px',top: '5px'}}>
                <span>
                <img src={IconCart}/>
                <span className='badge bg-success rounded-circle'>3</span> 
                  cart
                </span>
              </li>
              <li className='list list-item' style={{top:'5px'}} >
       
              
                <span onClick={()=>setisOpenDropDown(!isOpenDropDown)}>
                <img src={IconUser}/>
                  Account
                </span>
                {
                  isOpenDropDown!==false &&
                
                <ul className='dropdownMenu'>
                 
                  <li><button><AccountCircleIcon /> My Account</button></li>
                  <li><button><TrackChangesIcon /> Order Tracking</button></li>
                  <li><button><FavoriteBorderIcon /> My Wishlist</button></li>
                  <li><button><SettingsIcon /> Settings</button></li>
                  <li><button><LogoutIcon /> Sign out</button></li>
                
                </ul>
                }
         
                
              </li>
            </ul>
            </ClickAwayListener>
          </div>
          </div>
        </div>
        <Nav/>
    </header>
    
  );
};

export default Header;
