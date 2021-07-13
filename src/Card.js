import "./Card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card(props) {
    console.log(props);

    return <div className="bg-white rounded shadow text-center pb-4 overflow-hidden">
        <img src={props.img} className="w-100 mb-3" alt="" />
        <p className="fw-bold mx-3 title">{props.title}</p>
        <FontAwesomeIcon icon={props.icon} className="icon" />
        <p className="text-secondary mx-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, porro laboriosam, eligendi recusandae ab eius molestiae voluptatibus aut distinctio, in consequatur ullam earum reprehenderit deserunt libero? Aperiam totam expedita nesciunt.</p>
    </div>
}

export default Card;