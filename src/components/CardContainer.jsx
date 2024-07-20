import { Link } from "react-router-dom";

export default function CardContainer({svgUrl, containerName, route}) {
    return (
    <Link
    to={route} 
    className='option-card'
    >
    <img src={svgUrl} />
    <div class="overlay-text">{containerName}</div>
    </Link>
    )
}