import './brands.css'
import hm from './../../img/brands/hm.png'
import obey from './../../img/brands/obey.png'
import shopify from './../../img/brands/shopify.png'
import levis from './../../img/brands/levis.png'
import lacoste from './../../img/brands/lacoste.png'
import amazon from './../../img/brands/amazon.png'

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands-list">
          <li>
            <a href="#!">
              <img src={hm} alt="" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={obey} alt="" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={shopify} alt="" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={levis} alt="" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={lacoste} alt="" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={amazon} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Brands
