import { useSelector } from 'react-redux';
import BaseNavbar from '../../components/Navbars/baseNavbar';
import './Home.scss';
import { useEffect } from 'react';

export default function Home() {
    return(
        <div className="container-home-page">
            <BaseNavbar>
                <div className='flex justify-center w-[100vw] h-auto min-h-full pt-[35px]'>
                    <div className='base-box flex flex-col w-[304px] h-auto p-[16px]'>
                        
                    </div>
                    <div className='base-box flex flex-col w-[626px] h-auto min-h-full mx-[20px] p-[16px]'>
                                             
                    </div>
                    <div className='base-box flex flex-col w-[465px] h-auto p-[16px]'>
                        
                    </div>
                </div>
            </BaseNavbar>
        </div>
    )
}