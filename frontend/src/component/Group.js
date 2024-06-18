import React from 'react';
import '../style/Group.css';

const Group = () => {
    return (

        <div className='Grouptotal'>
            <div className='Group'> Group </div>
            <div className='Groupboxs'>
                <div className='Groupbox'></div>
                <div className='smallbox'>
                    <div className='Groupcontent1'> 
                        이 메신저는 그룹 사람들에게만 볼 수 있도록 허용됩니다. <br/>
                        통화가 끝나면 이 메세지는 사라집니다. 
                    </div>
                    
                    <input className='Groupcontent2' type='text' placeholder='채팅을 입력하세요.' />
                </div>
            </div>
        </div>
    )
}

export default Group;