import './card.css'
import cat01Img from './../../img/categories/cat-01.jpg'
import arrowImg from './../../img/icons/arrow.svg'

const Card = () => {
  return (
    <div className="card">
      <a href="#!" className='card__link'></a>
      <img className="card__img" src={cat01Img} alt="Category" />
      <div className="card__body">
        <div className="card__text">
          <div className="card__title">Hoodies & Sweetshirt</div>
          <div className="card__subtitle">Explore now!</div>
        </div>
        <div className="card__icon">
          <img src={arrowImg} alt="Arrow" />
        </div>
      </div>
    </div>
  )
}

export default Card
