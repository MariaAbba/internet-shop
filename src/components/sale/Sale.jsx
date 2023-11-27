import './sale.css'
import saleImg from './../../img/images/sale.jpg'

const Sale = () => {
  return (
    <section className="sale">
      <div className="container">
        <div className="sale__content">
          <div className="sale__img">
            <img src={saleImg} alt="Image" />
          </div>
          <div className="sale__text ">
            <div className="sale__title">PAYDAY SALE NOW</div>
            <div className="sale__descr">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </div>
            <div className="sale__dates">
              1 June - 10 June 2021
              <span>*Terms & Conditions apply</span>
            </div>
            <div className="sale-wrapper">
              <a className="btn-general sale__btn" href="#!">
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sale
