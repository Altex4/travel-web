import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />   
                <h1><p>123 Acme St.</p> 
                <p>Houston, Tx</p> </h1>
                </div>
            <div>
         </div>
         <div className='phone'>
             <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}} />1-800-123-12365</h4>
         </div>
         <div className='email'>
             <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}} />hagen@gamil.com</h4>
         </div>
        </div>
        <div className='right'>
            <h4>About the company</h4>
            <p> Lorem ipsum dolor sit, amet consectetur
                 adipisicing elit. Enim perspiciatis
                  necessitatibus obcaecati voluptatibus animi 
                  nobis laborum ab porro repellendus maiores.</p>
               <div className='social'>
                  <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                  <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}} /> 
                  <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                </div>   
        </div>
    </div>

    </div>
  )
}

export default Footer
