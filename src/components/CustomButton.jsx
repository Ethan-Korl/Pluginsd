

export default function CustomButton({title, onClick}) {
    return (
        <button onClick={onClick} className="submit-button">{title}</button>
    )
}