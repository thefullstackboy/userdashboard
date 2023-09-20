import React from 'react'
import './header.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className='Footer-title Footer-color-red-white'>
    <div className='Footer-heading'>Follow us on</div>
    <div className='Footer-logo-list'>
        <a className='Footer-logo-list-item text-white'><TwitterIcon fontSize='large'/></a>
        <a className='Footer-logo-list-item text-white'><InstagramIcon fontSize='large'/></a>
        <a className='Footer-logo-list-item text-white'><FacebookIcon fontSize='large'/></a>
        <a className='Footer-logo-list-item text-white'><LinkedInIcon fontSize='large'/></a>
        <a className='Footer-logo-list-item text-white'><YouTubeIcon fontSize='large'/></a>
    </div>
    <div className='Footer-row-list'>
        <span>About Us</span>
        <span>Contact Us</span>
        <span>Terms and Conditions</span>
        <span>Privacy Policy</span>
    </div>
</div>
  )
}

export default Footer