interface IIconButtonProps{
    iconpath : string;
    onClick : React.MouseEventHandler<HTMLButtonElement>;
    alt: string;
}

const IconButton = ({iconpath,onClick,alt} : IIconButtonProps) => {
    return (
        <button onClick={onClick}>
            <img src={iconpath} alt={alt}/>
        </button>
    );
};

export default IconButton;
