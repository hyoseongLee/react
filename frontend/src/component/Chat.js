import React from 'react';
import '../style/Chat.css';

const Chat = () => {
    return (
        <div className='bigbox'>
            <div className='box'></div>
            <div className='smallbox'>
                <div className='content'>
                    <div className='content1'> <span> 이 메신저는 그룹 사람들에게만 볼 수 있도록 허용됩니다.
                        통화가 끝나면 이 메세지는 사라집니다.</span></div>
                </div>
                <div className='content2'>
                    <div> <input className='content3' type='text' placeholder='채팅을 입력하세요.' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Chat;