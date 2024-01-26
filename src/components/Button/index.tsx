interface Props {
    label: string;
    className?: string;
    onClick?: () => void;
}

const Button = ({ label, className, onClick }: Props) => {
    return (
        <button className={className} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;