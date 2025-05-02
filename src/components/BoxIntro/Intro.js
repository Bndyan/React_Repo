import React from 'react';
import './Intro.css';
import bg from '../../assets/user.png';
import btnImg from '../../assets/bag.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='intro_content'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Karwan</span><br/>Website Designer</span>
            <p className='introPara'>I am a skilled and passionate web designer with experience in creating <br/>visually appealing and user-friendly websites.</p>
            <Link>
                <button className='btn'>
                    <img src={btnImg} alt='Hier me' className='btnImg'/>
                    <p className='btnText'>Hier me</p>
                </button>
            </Link>
        </div>
        <img src={bg} alt='Portfolio' className='bg' />
    </section>
  );
}

export default Intro;