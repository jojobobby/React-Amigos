import './EstrellaPage.css';

function EstrellaPage() {
  
  return (
    <div>
      <Header />
      <Hero />

      <div className='card-row'>
        <Card 
          img = "./bean.webp"
          rating= "4.0"
          title = "Bean"
        />
        <Card 
          img = "./chiSkyline.jpeg"
          rating= "5.0"
          title = "SKyLine View"
        />
        <Card 
          img = "./IceCream.jpeg"
          rating = "3.8"
          title = "Ice Cream Museum"
        />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

function Header(){
    return (
      <header>
        <nav className="nav">
          <img src= "./airbnbLogo.png" className='airbnb-Logo' />
        </nav>
      </header>
    )
  }

function Hero(){
    return (
      <div className='Hero-Content'>
          <img src='./chiSkyline.jpeg' className='chi-Skyline' />

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
      <div class='row'>
         <div>
            <img src={img} className='card-Skyline' />
              <div>
                <span><img src='./pinkStar.webp' className='star'/></span>
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