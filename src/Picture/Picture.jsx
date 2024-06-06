import { Link } from 'react-router-dom';
import './Picture.css';

function Picture({url,id}){
    return(
        <div className='gallery-picture'>
        <Link to={`/${id}`} > 
        <img src={url} alt='gallery' />
        </Link>
        </div>
        
    )
};

export default Picture;