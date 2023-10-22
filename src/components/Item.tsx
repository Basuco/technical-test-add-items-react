interface Props {
    text: string;
    handleClick: () => void;
}
export function Item({ text, handleClick} : Props) {
    return (
        <li>
            {text}
            <button onClick={handleClick}>
                Delete
            </button>
        </li>
    )
}