import React from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='headerbox'>
            <div className='subbox'>
                <div  >
                    <Link to="/" className='Dooray'>Dooray! </Link>
                </div>
                |
                <div>
                    <Link to="/Calender" className='Calender'>캘린더 </Link>
                </div>

                <input className='input' type='text' placeholder='일정 검색' />

            </div>

            <Link to="/Group" className='right'> 문의하기 </Link>
        </div>
    )
}
export default Header;
