import { BannerImage } from '../../icons';
import Search from '../SearchBar';
import './HomeBanner.module.css'

const Banner = () => {
    return ( 
        <div className='banner-container'>
            <img src={BannerImage} className='banner-image'/>
            <Search />
        </div>
     );
}
 
export default Banner;