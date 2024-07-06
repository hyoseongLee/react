import React from 'react';
import '../style/Calender.css';
import { Link } from 'react-router-dom';


const Calender = () => {
    return (
        <div className='Tablecontainer'>
            <table className='Tablebox'>
                <caption className='Tablename'> ※Table </caption>
                <thead>
                    <tr>
                        <th></th>
                        <td>월</td>
                        <td>화</td>
                        <td>수</td>
                        <td>목</td>
                        <td>금</td>
                        <td>토</td>
                        <td>일</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>09:00 - 10:00</th>
                        <td rowspan="3" className='point1'></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>10:00 - 11:00</th>
                        <td></td>
                        <td></td>
                        <td rowspan="2" className='point2'></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>11:00 - 12:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>12:00 - 13:00</th>
                        <td></td>
                        <td rowspan="3" className='point3'></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>13:00 - 14:00</th>
                        <td></td>
                        <td rowspan="2" className='point4'></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>14:00 - 15:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>15:00 - 16:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td rowspan="3" className='point5'></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>16:00 - 17:00</th>
                        <td rowspan="2" className='point6'></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>17:00 - 18:00</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calender;