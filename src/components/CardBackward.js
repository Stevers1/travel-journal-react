import "./Card.css"
import pointer from "../images/pointer.svg"

export default function CardBackward(props) {

  return(
    <section className="card_container">
      
      <div className="card__text">
        <div className="card__google_location">
          <img src={pointer} alt="google thingy"/>
          <h4>{props.item.location}</h4>
          <a href={props.item.googleMapsUrl}>View on Google Maps WC</a>
        </div>
        <h2>{props.item.title}</h2>
        <p className="card__date">{props.item.startDate} - {props.item.endDate}</p>
        <p className="card__description">{props.item.description}</p>
      </div>
      <img className="card__image" src={props.item.imageUrl} alt="mount fuji WC"/>

    </section>
  )
}