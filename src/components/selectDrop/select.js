import React, { useState } from "react";
import '../selectDrop/select.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const Select = ({ data, placeholder = "Select an item", icon }) => {
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [selectedItem, setSelectedItem] = useState(placeholder);
    const [listData, setListData] = useState(data);


    const openSelect = () => {
        setIsOpenSelect(!isOpenSelect);
        
        setListData(data); 
    };

    const closeSelect = (index, name) => {
        setSelectedIndex(index);
        setIsOpenSelect(false);
        setSelectedItem(name);
    };

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase(); 
        const filteredList = data.filter((item) => {
            return item.toLowerCase().includes(keyword); 
        })
       

        
        setListData(filteredList); 
    };
    
    return (
        <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
            <div className='selectDropwrapper cursor position-relative'>
                {icon}
                <span className='openSelect' onClick={openSelect}>
                    <KeyboardArrowDownIcon className='arrow' />{selectedItem.length>14 ? selectedItem.substr(0,14) +'..' :selectedItem}
                </span>

                {isOpenSelect && (
                    <div className='searchDrop'>
                        <div className="searchFiled">
                            <input 
                                type='text' 
                                placeholder='Search here...'  
                                onChange={filterList} 
                            />
                        </div>
                        <ul className='searchResults'>
                            <li
                                key={0}
                                onClick={() => closeSelect(0, placeholder)}
                                className={selectedIndex === 0 ? 'active' : ''}
                            >
                                {placeholder}
                            </li>
                            {listData.map((item, index) => ( 
                                <li
                                    key={index + 1}
                                    onClick={() => closeSelect(index + 1, item)}
                                    className={selectedIndex === index + 1 ? 'active' : ''}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </ClickAwayListener>
    );
};

export default Select;
