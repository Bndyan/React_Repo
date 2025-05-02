import React from 'react';
import './skills.css';
import UIDesign from '../../assets/web-design.png';
import WebDesigen from '../../assets/ui-web.png';
import AppDesigen from '../../assets/App-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate web desigenr with exerience in creating visually appealing and user-frindly webseites. 
            I have a strong understanding of desigen and a keen eye for detail.
            I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photeshop and Illustrator.
        </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text, you can write your own content here.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={WebDesigen} alt='WebDesigen' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Website Desigen</h2>
                    <p>This demo text can be changed while making the production ready site.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={AppDesigen} alt='AppDesigen' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>App design</h2>
                    <p>You can write text related to mobile app development</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;