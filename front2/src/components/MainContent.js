import React from 'react'
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

function MainContent() {
  return (        
        <div className='Banner-container mt-4'>
            <div className='Banner-title Banner-color-red-white'>
                <div className='Banner-center-align'>
                    <span>India's Largest CA Professionals Network which helps to solve all your business needs related to finance and accounts quickly.</span>
                </div>
            </div>
            <div className='Banner-list'>
                <span className='Banner-list-item'>1000+CAs present on our platform</span>
                <span className='Banner-list-item'>3000+ Happy Customers</span>
                <span className='Banner-list-item'>30+ Business Services Available</span>
            </div>
            <div className='Banner-title Banner-color-red-white'>
                <div className='Banner-center-align'>
                    <span>Benefits for CAs on our platform -</span>
                </div>
                <br/>
                <div className='Banner-title-list'>
                    <div className='Banner-title-item'><DoneRoundedIcon/> &nbsp; Build your digital brand presence</div>
                    <div className='Banner-title-item'><DoneRoundedIcon/> &nbsp; Get your micro website, share it with your prospects, and do conversions</div>
                    <div className='Banner-title-item'><DoneRoundedIcon/> &nbsp; Write blogs and generate leads from them </div>
                </div>
            </div>
            <div className='Banner-title Banner-color-white-red'>
                <div className='Banner-center-align'>
                    <span>Benefits for Users on our platform -</span>
                </div>
                <br/>
                <div className='Banner-title-list'>
                    <div className='Banner-title-item'><DoneRoundedIcon/> &nbsp; Search CAs according to your business stages such as Introduction, Growth, and Maturity</div>
                    <div className='Banner-title-item'><DoneRoundedIcon/> &nbsp; Search CAs according to your business domain such as Manufacturing, Wholesale, Retail, Export/Import, and many more</div>
                    <div className='Banner-title-item'><DoneRoundedIcon/> &nbsp; Whether you are a Startup/MSME, we have CAs according to your business need</div>
                    <div className='Banner-title-item'><DoneRoundedIcon/> &nbsp; Whether you are looking to start business or want to grow business, we have CAs according to your business need</div>
                    <div className='Banner-title-item'><DoneRoundedIcon/> &nbsp; Search CAs according to your business stages such as Introduction, Growth, and Maturity</div>
                </div>
            </div>
        </div>  
  )
}

export default MainContent