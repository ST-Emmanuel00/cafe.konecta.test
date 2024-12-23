export enum ButtonColor {
    BLUE = 'blue',
    RED = 'red',
    GREEN = 'green'
}

interface ButtonProps {
    label: string;
    onClick: () => void;
    color: ButtonColor;
}

export const ActionButton: React.FC<ButtonProps> = ({ label, onClick, color }) => (
    <button onClick={onClick} className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded-3xl`}>
        {label}
    </button>
);