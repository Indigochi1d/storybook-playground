interface IErrorMessageProps{
    children: string;
}

const ErrorMessage = ({children}:IErrorMessageProps) => {
    return (
        <p className="font-extrabold text-xs text-error" >
            {children}
        </p>
    );
};

export default ErrorMessage;
