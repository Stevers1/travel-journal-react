import "./Card.css"
import pointer from "../images/pointer.svg"

export default function Card() {

  return(
    <section className="card_container">
      <img className="card__image" src="https://source.unsplash.com/WLxQvbMyfas" alt="mount fuji WC"/>
      <div className="card__text">
        <div className="card__google_location">
          <img src={pointer} alt="google thingy"/>
          <h4>JAPAN WC</h4>
          <a href="google.com">View on Google Maps WC</a>
        </div>
        <h2>Mount Fuji WC</h2>
        <p className="card__date">Date WC</p>
        <p className="card__description">Desc WC</p>
      </div>

    </section>
  )
}

