import React from 'react';
import './Home.css'
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png'
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className="hero">
          <img src={hero_banner} alt="" className='banner-img' />
          <div className="hero-caption">
            <img src={hero_title} alt="" className='caption-img' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consectetur distinctio, expedita repellat, ab quaerat sunt nemo corporis quisquam fugiat, nulla facere dolores voluptas voluptatem modi cumque? Quibusdam est modi harum non. Totam tempore ducimus quas dicta nihil, commodi magni nulla vitae illo quis itaque ex blanditiis, iure nobis ab.</p>
            <div className="hero-btns">
              <button className='btn'><img src={play_icon} alt="" />Play</button>
               <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <Cards />
          </div>
        </div>
        <div className="more-cards">
          <Cards title={"Blockbuster Movies"}/>
          <Cards title={"Only on Netflix"}/>
          <Cards title={"For You"}/>
          <Cards title={"Top Pick for You"}/>
        </div>
        <Footer />
    </div>
  )
}

export default Home