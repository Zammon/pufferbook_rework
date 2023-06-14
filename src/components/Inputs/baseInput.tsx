import { BaseInputInterface } from "../../Interfaces/inputInterface";

export default function BaseInput({ 
    name="",
    type="text", 
    styled="text-base font-media h-10 w-auto px-2 border-grayBorder border-solid rounded-md focus:outline-orangPuf", 
    placeholder,
    textValidation = 'error',
    statusValidation = false,
    onChange}:BaseInputInterface) {


    return(
        <div className="base-input-component flex flex-col w-auto h-auto cursor-pointer">
            <input
                className={`${styled} mb-2 placeholder-grayPlaceholder`}  
                name={name}
                type={type}  
                placeholder={placeholder} 
                onChange={onChange}/>
            {
                statusValidation ?    
                <div className="text-errorAlert font-media">
                    {textValidation}
                </div>
                :
                <></>
            }
            
        </div>
    )
}