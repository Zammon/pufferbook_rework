import { Link } from 'react-router-dom'
import BaseInput from '../../components/Inputs/baseInput'
import './Register.scss'
import BaseButton from '../../components/Buttons/baseButton'

export default function Register() {
    return(
        <div className="container-register-page">
            <div className="container-form-register">
                <div className="flex flex-col mb-[27px]">
                    <div className="font-[1000] text-[18px] mb-[5.5px]">
                        Register
                    </div>
                    <div className="text-grayLabel">
                        Please, fill out your information to apply.
                    </div>
                </div>
                <div className='flex flex-col w-full h-auto mb-[22px]'>
                    <label className='font-bold text-[15px] mb-[13px]'>
                        Email
                    </label>
                    <BaseInput placeholder='please input your email' />
                </div>
                <div className='flex flex-col w-full h-auto mb-[22px]'>
                    <label className='font-bold text-[15px] mb-[13px]'>
                        Username
                    </label>
                    <BaseInput placeholder='please input your username' />
                </div>
                <div className='flex flex-col w-full h-auto mb-[22px]'>
                    <label className='font-bold text-[15px] mb-[13px]'>
                        Password
                    </label>
                    <BaseInput placeholder='please input your password' />
                </div>
                <div className='flex flex-col w-full h-auto mb-[20px]'>
                    <label className='font-bold text-[15px] mb-[13px]'>
                    Confirm password
                    </label>
                    <BaseInput placeholder='please confirm your password' />
                </div>
                <div className='flex justify-end mb-[22px] text-grayLabel'>
                    Are you have accout?
                    <Link to="/login" className='font-bold ml-[5px] text-blueLink no-underline'>
                        sign in.
                    </Link>
                </div>
                <BaseButton text="SIGN UP" textBold={true} fontSize='text-[14px]'/>
            </div>
        </div>
    )
}