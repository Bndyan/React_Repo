import React, { useRef } from 'react';
import './contact.css';
import Amazone from "../../assets/amazon.png";
import Microsoft from "../../assets/microsoft.png";
import Adobe from "../../assets/adobe.png";
import Facebook from "../../assets/facebook_1.png";
import facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";
import Youtub from "../../assets/youtube.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_7fph1ao', 'template_8lu5g3n', form.current, {
            publicKey: 'RYVJ92S74oh5sbawM',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a diverse group of companies. 
                Some of the notable companies I have worked with includes 
            </p>
            <div className='clientImgs'>
                <img src={Amazone} alt='Client' className='clientImg' />
                <img src={Microsoft} alt='Client' className='clientImg' />
                <img src={Adobe} alt='Client' className='clientImg' />
                <img src={Facebook} alt='Client' className='clientImg' />
            </div>
        </div>

        <div id='contact'>
            <h1 className='contactPageTile'>Contact Me</h1>
            <span className='contactDesc' >Please fill out the form below to discuss any work opportunies.</span>

            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message' ></textarea>

                <button type='submit' value="Send" className='submitBtn'>Submit</button>

                <div className='links'>
                    <img src={facebook} alt='Facebook' className='link' />
                    <img src={Instagram} alt='Instagram' className='link' />
                    <img src={Twitter} alt='Twitter' className='link' />
                    <img src={Youtub} alt='Youtub' className='link' />
                </div>
            </form>

            {/* <form className='contactForm' 
             action="https://formspree.io/f/mvgaledn"
              method="POST" >
                <input type='text' className='name' placeholder='Your Name' name='name'/>
                <input type='email' className='email' placeholder='Your Email' name='email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message' ></textarea>

                <button type='submit' value="Send" className='submitBtn'>Submit</button>

                <div className='links'>
                    <img src={facebook} alt='Facebook' className='link' />
                    <img src={Instagram} alt='Instagram' className='link' />
                    <img src={Twitter} alt='Twitter' className='link' />
                    <img src={Youtub} alt='Youtub' className='link' />
                </div>
            </form> */}
        </div>
    </section>
  );
}

export default Contact;