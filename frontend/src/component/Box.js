import React from 'react';
import '../style/Box.css';
const Box = () => {
    return (
        <div className='headerbox'>
            <div className='subbox'>
                <div className='Dooray'>Dooray!</div>
                |
                 <div className='calender'>캘린더</div>
                 <div> <input className='input' type='text' placeholder='일정 검색' /> 
                 </div>

            </div>

            <div className='right'> 문의하기 </div>
        </div>
    )
}
export default Box;
