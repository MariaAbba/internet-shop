import './promo.css'
import promoImg from './../../img/images/header.jpg'

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <div className="promo__title">
              <span className="highlight">
                <span>LET’S</span>
              </span>
              <span className="highlight highligh--yellow">
                <span>EXPLORE</span>
              </span>
              UNIQUE CLOTHES.
            </div>
            <div className="promo__descr">
              Live for Influential and Innovative fashion!
            </div>
            <div className="promo__btn-wrapper">
              <a className="promo__btn" href="#!">
                Shop now
              </a>
            </div>
          </div>
          <div className="promo__img">
            <img src={promoImg} alt="Promo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promo
