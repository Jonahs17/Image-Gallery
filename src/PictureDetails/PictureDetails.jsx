import { useParams } from 'react-router-dom';
import './PictureDetails.css';
import axios from 'axios';
import { useState } from 'react';

function PictureDetails(){
    const {id}= useParams();
    let PICTURE_URL=('https://api.slingacademy.com/v1/sample-data/photos/'+id);
    const [imageUrl,setImageUrl]=useState('');
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');


    
    async function downloadPicture(){
        try{
            const response= await axios.get(PICTURE_URL);
            const data=response.data;
            console.log(data.photo);
            setImageUrl(data.photo.url);
            setTitle(data.photo.title);
            setDescription(data.photo.description)
        }
        catch(e){
            console.log("Error in downloading data");
        }
    }

    downloadPicture();
    



    return(
        <div className='body'>
        <div className='left'>
        <img src={imageUrl} alt="" className='detail-image'/>
        </div>
        <div className='right'>
        <h1 className='title'>{title}</h1>
        <p className='description'>{description}</p>
        </div>
        </div>
        
    )
};

export default PictureDetails;