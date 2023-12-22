import React from 'react'
import './Home.scss'
import awatar1 from '../../assets/awatar/awatar__1.png'
import awatar2 from '../../assets/awatar/awatar__2.png'
import awatar3 from '../../assets/awatar/awatar__3.png'
import awatar4 from '../../assets/awatar/awatar__4.png'
import awatar5 from '../../assets/awatar/awatar__6.png'
import awatar6 from '../../assets/awatar/5awatar__1.png'
import awatar7 from '../../assets/awatar/awatar__7.png'
import awatar8 from '../../assets/awatar/awatar__8.png'
function Home() {
  return (
    <div className='home'>
   <div className="container">
   <b>OUR TEAM</b>
      <h1>Meet the Clonify team</h1>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour</p>
      <ul className="home__list">
        <li className="home__item">
          <div className="img__div">
            <img src={awatar1} alt="" />
          </div>
          <div className="item__div">
            <h4>Jocelyn Schleifer</h4>
            <h6>Software Engineer</h6>
            <p>
              There are many variations of passages of Lorem Ipsum available
            </p>
            <div className="icon__div">
              <span> <i className="bi bi-facebook"></i> </span>
              <span> <i className="bi bi-instagram"></i> </span>
              <span> <i className="bi bi-twitter"></i></span>
            </div>
          </div>
        </li>
        <li className="home__item">
          <div className="img__div">
            <img src={awatar2} alt="" />
          </div>
          <div className="item__div">
            <h4>Martin Donin</h4>
            <h6>Software Engineer</h6>
            <p>
              There are many variations of passages of Lorem Ipsum available
            </p>
            <div className="icon__div">
              <span> <i className="bi bi-facebook"></i> </span>
              <span> <i className="bi bi-instagram"></i> </span>
              <span> <i className="bi bi-twitter"></i></span>
            </div>
          </div>
        </li>
        <li className="home__item">
          <div className="img__div">
            <img src={awatar3} alt="" />
          </div>
          <div className="item__div">
            <h4>Jordyn Septimus</h4>
            <h6>Software Engineer</h6>
            <p>
              There are many variations of passages of Lorem Ipsum available
            </p>
            <div className="icon__div">
              <span> <i className="bi bi-facebook"></i> </span>
              <span> <i className="bi bi-instagram"></i> </span>
              <span> <i className="bi bi-twitter"></i></span>
            </div>
          </div>
        </li>
        <li className="home__item">
          <div className="img__div">
            <img src={awatar4} alt="" />
          </div>
          <div className="item__div">
            <h4>Leo Arcand</h4>
            <h6>Software Engineer</h6>
            <p>
              There are many variations of passages of Lorem Ipsum available
            </p>
            <div className="icon__div">
              <span> <i className="bi bi-facebook"></i> </span>
              <span> <i className="bi bi-instagram"></i> </span>
              <span> <i className="bi bi-twitter"></i></span>
            </div>
          </div>
        </li>
        <li className="home__item">
          <div className="img__div">
            <img src={awatar5} alt="" />
          </div>
          <div className="item__div">
            <h4>Marilyn Levin</h4>
            <h6>Software Engineer</h6>
            <p>
              There are many variations of passages of Lorem Ipsum available
            </p>
            <div className="icon__div">
              <span> <i className="bi bi-facebook"></i> </span>
              <span> <i className="bi bi-instagram"></i> </span>
              <span> <i className="bi bi-twitter"></i></span>
            </div>
          </div>
        </li>
        <li className="home__item">
          <div className="img__div">
            <img src={awatar6} alt="" />
          </div>
          <div className="item__div">
            <h4>Lindsey Dokidis</h4>
            <h6>Software Engineer</h6>
            <p>
              There are many variations of passages of Lorem Ipsum available
            </p>
            <div className="icon__div">
              <span> <i className="bi bi-facebook"></i> </span>
              <span> <i className="bi bi-instagram"></i> </span>
              <span> <i className="bi bi-twitter"></i></span>
            </div>
          </div>
        </li>
        <li className="home__item">
          <div className="img__div">
            <img src={awatar7} alt="" />
          </div>
          <div className="item__div">
            <h4>Hanna Dias</h4>
            <h6>Software Engineer</h6>
            <p>
              There are many variations of passages of Lorem Ipsum available
            </p>
            <div className="icon__div">
              <span> <i className="bi bi-facebook"></i> </span>
              <span> <i className="bi bi-instagram"></i> </span>
              <span> <i className="bi bi-twitter"></i></span>
            </div>
          </div>
        </li>
        <li className="home__item">
          <div className="img__div">
            <img src={awatar8} alt="" />
          </div>
          <div className="item__div">
            <h4>Ryan Gouse</h4>
            <h6>Software Engineer</h6>
            <p>
              There are many variations of passages of Lorem Ipsum available
            </p>
            <div className="icon__div">
              <span> <i className="bi bi-facebook"></i> </span>
              <span> <i className="bi bi-instagram"></i> </span>
              <span> <i className="bi bi-twitter"></i></span>
            </div>
          </div>
        </li>
      </ul>
   </div>
    </div>
  )
}

export default Home