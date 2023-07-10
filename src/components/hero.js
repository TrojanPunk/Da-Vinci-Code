import LogoLarge from '../assets/Logo2.svg';
import Box from '@mui/material/Box';
import ComputersCanvas from './computer';
import Laptop from '../assets/Laptop.png';

const Hero = () => {
    return (
        <Box className='container' sx={{ flexGrow: 1, backgroundColor: '#11161a', minWidth: '100%',
            borderBottom: '2px solid',
            backgroundImage: '-webkit-linear-gradient(left, rgba(255, 168, 0, 0.25) 0%, rgba(255, 210, 50, 1) 50%, rgba(255, 168, 0, 0.25) 100%)',
            backgroundSize: '100% 2px',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            width: '100%'
            // Alternate: '-webkit-linear-gradient(left, rgba(92, 7, 52, 1) 0%, rgba(134, 29, 84, 1) 12%, rgba(255, 93, 177, 1) 47%, rgba(83, 0, 30, 1) 100%)'
        }}>
            <div className='heroSection'>
                <div className='heroText'>
                    <img className='logoLarge' src={LogoLarge} />
                    <h1 className='slogan'>ALWAYS BE PREPARED TO <span style={{ color: '#A4A4A4' }}>CRACK</span> AN INTERVIEW</h1>
                    <h6 className='subTitle'>Enhance your proficiency in Data Structures by tackling Company-Specific problems with practice.</h6>
                </div>
                <img className='heroImage' src={Laptop} />
            </div>
            {/* <canvas id="gradient-canvas" data-transition-in /> */}
        </Box>
        
    );
}

export default Hero;