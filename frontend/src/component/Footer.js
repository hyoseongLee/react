import React from 'react';
import '../style/Footer.css';

const Footer = () => {
    return (
        <body>
            <div className='box1'>
                <div className='content1'>
                    <div className='login'> Schooler 로그인 </div>
                    <div className='signup'> <button className='button'> Sign up </button> </div>
                </div>
                <hr></hr>

                <div className='content2'>
                    <div>
                        <div className='idname'> 아이디 </div>
                        <div className='idbox'><input className='inputbox' type='text' placeholder='아이디 필수' /> </div>
                    </div>

                    <div>
                        <div className='pwname'> 비밀번호 </div>
                        <div className='pwbox'><input className='inputbox' type='text' placeholder='비밀번호 필수' /></div>
                    </div>
                </div>

                <div className='content3'>
                    <div> <button className='bluebutton'> 로그인 </button></div>
                    <div className='missing'>
                        <div className='idmiss'> 아이디 찾기 </div>
                        <p> / </p>
                        <div className='pwmiss'> 비밀번호 찾기 </div>

                    </div>
                </div>

            </div>
        </body>
    )
}

export default Footer;