import {useState} from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface IDefaultTextFieldProps{
    errorMessage: string;
    iconPath: string;
    onIconClick: React.MouseEventHandler<HTMLButtonElement>;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: string;
    alt: string;
    isError: boolean;
    id: string;
}

const DefaultTextField = ({errorMessage,iconPath,onIconClick,placeholder,onChange,value,alt,isError,id} : IDefaultTextFieldProps) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <>
            <div
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`text-primary border-b ${isFocused ? "border-secondary" : value ? "border-primary" : "border-mono300"}`}>
                <input id={id} className="outline-none" placeholder={placeholder} value={value} type="text" onChange={onChange}/>
                {!!value && <IconButton onClick={onIconClick} alt={alt} iconpath={iconPath}/>}
            </div>
            <div>
                {isError && <ErrorMessage>{errorMessage}</ErrorMessage> }
            </div>
        </>
        
    );
}

export default DefaultTextField;
