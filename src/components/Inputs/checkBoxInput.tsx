import { CheckBoxInputInterface } from "../../Interfaces/inputInterface";
import { BsCheckLg } from 'react-icons/bs';
import { useEffect, useState } from "react";

export default function CheckBoxInput({
    size = '15px',
    bgActive = 'bg-orangPuf',
    bgNoneActive = 'bg-whiteCheckbox',
    status = false,
    onClick
    }:CheckBoxInputInterface) {
    const [statusCheckBox, setStatusCheckBox] = useState<boolean>(false);
    
    useEffect(()=>{
        setStatusCheckBox(status);
    },[status])

    return(
        <div className={`flex border-solid ${statusCheckBox ? 'border-none':'border-[2px]'} border-grayBorder rounded-[6px] overflow-hidden cursor-pointer`}
            style={{height: size, width: size, maxWidth: size, minWidth: size, maxHeight: size, minHeight: size}}
            onClick={()=>{
                setStatusCheckBox(!statusCheckBox)
                if(!onClick) return;
                onClick(!statusCheckBox);
            }}
            >
            {
                statusCheckBox ?
                <div className={`flex justify-center items-center w-full h-full ${bgActive}`}>
                    <BsCheckLg size="10rem" fill="#fff" />
                </div>
                :
                <div className={` w-full h-full ${bgNoneActive}`}></div>
            }
            
        </div>
    )
}