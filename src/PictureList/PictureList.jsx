import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PictureList.css';
import Picture from '../Picture/Picture';

function PictureList() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const API_URL = 'https://api.slingacademy.com/v1/sample-data/photos?limit=20';
                const response = await axios.get(API_URL);
                const data = response.data;
                setPhotos(data.photos);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []); 

    return (
        <div className="picture-list">
            {photos.map((photo) => (
                <Picture key={photo.id} url={photo.url} id={photo.id}/>
            ))}
        </div>
    );
}

export default PictureList;
