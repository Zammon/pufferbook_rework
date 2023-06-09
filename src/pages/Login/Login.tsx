import BaseButton from '../../components/Buttons/baseButton';
import BaseInput from '../../components/Inputs/baseInput';
import CheckBoxInput from '../../components/Inputs/checkBoxInput';
import { Link } from 'react-router-dom';
import './Login.scss';
import SocialButton from '../../components/Buttons/socialButton';

export default function Login() {
    return(
        <div className="container-login-page">
            <div className="container-form">
                <div className='flex flex-col w-full h-auto justify-center items-center pt-7'>
                    <div className='mb-[17px]'>
                        <img src="/Pufferbook_logo.png" alt=''/>
                    </div>
                    <div className='font-bold text-2xl'>
                        Puffer Book
                    </div>
                </div>
                <div className='flex flex-col mt-[57px] mb-5'>
                    <label className='text-grayLabel'>Username or Email</label>
                    <BaseInput 
                        placeholder='enter your username or email' />
                    <label className='text-grayLabel'>Password</label>
                    <BaseInput
                        type='password'
                        placeholder='enter your password'/>
                    <div className='flex justify-between w-auto h-[22px] mb-[22px]'>
                        <div className='flex'>
                            <CheckBoxInput size='22px' onClick={(status)=>{

                            }}/>
                            <div className='flex items-center text-[12px] ml-[6px] w-auto h-full text-grayLabel'>
                                Remember Password
                            </div>
                        </div>
                        <Link to="/forgetpassword" className='trasitions-brightness-strong flex font-bold no-underline text-grayLabel w-auto h-full items-center text-[12px] cursor-pointer'>
                            Forgot password?
                        </Link>
                    </div>
                    <BaseButton text='SIGN IN' textBold={true} height='h-[42px]' />
                    <div className='flex items-center my-[12px] '>
                        <div className='h-[1px] w-[100%] bg-grayBorder'></div>
                        <div className='mx-[15px] text-grayLabel'>or</div>
                        <div className='h-[1px] w-[100%] bg-grayBorder'></div>
                    </div>
                    <BaseButton url='/register' margin='mb-[25px]' text='SIGN UP' textBold={true} borderButton={true} height='h-[42px]' />
                    <div className='flex h-[33px] w-full justify-center'>
                        <SocialButton url="/twitter" styled='mr-[26px]' type='twitter' size='w-[33px]' />
                        <SocialButton url="/google" styled='mr-[26px]' type='google' size='w-[33px]' />
                        <SocialButton url="/facebook" type='facebook' size='w-[33px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}