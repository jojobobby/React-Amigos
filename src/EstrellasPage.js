import './EstrellaPage.css';
import data from './data.js';

function EstrellaPage() {
  // {openSpots === 0 && <div className='card-Badge'>SOLD OUT</div>}
  const cardElements = data.map(item => {
    return(
    <Card
      img={item.img}
      rating={item.rating}
      title={item.title}
      openSpots={item.openSpots}
    />
    )
  })

  return (
    <div>
      <Header />
      <Hero />
      <div className='card-row'>
        {cardElements}
      </div>
      <Footer />
    </div>
  )
};

function Header(){
    return (
      <header>
        <nav className="nav">
          <img src= "./estrellaImages/airbnbLogo.png" className='airbnb-Logo' />
        </nav>
      </header>
    )
  }

function Hero(){
    return (
      <div className='Hero-Content'>
          <img src="./estrellaImages/chiSkyline.jpeg" className='chi-Skyline' />

          <h1 className='hero-header'>Online Experince</h1>

          <p className='hero-paragraph'>
            Lorem ipsum dolor sit amet. Et adipisci Quis est rerum 
            expedita hic quod maiores eos nostrum labore. Hic adipisci 
            similique et dolorem quaerat sit asperiores numquam qui 
            magnam consequatur!
          </p>

      </div>
    )
}

function Card({img, rating, title}){
    return(
      <div class='card'>
        <div className='card-Badge'>SOLD OUT</div>
         <div>
            <img src={img} className='card-Skyline' />
              <div>
                <span><img src='./estrellaImages/pinkStar.webp' className='star'/></span>
                <span>{rating}</span>
                  <div>
                    <span>{title}</span>
                  </div>
              </div>
         </div>
      </div>
    )
}

function Footer(){
    return (
      <footer className='footer'>
          <small>@2023 Anguiano developement. All rights reserved.</small>
      </footer>
    )
  }

export default EstrellaPage;