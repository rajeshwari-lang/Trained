import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import React, { useRef } from 'react';

import axios from 'axios';
function VideoList() {
    const playerRef = useRef(null);

    const { categoryId, subcategoryId } = useParams();
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        async function fetchVideos() {
            const response = await axios.get(`http://localhost:5000/subcategories/${subcategoryId}/videos`);
            setVideos(response.data);
        }
        fetchVideos();
    }, [categoryId, subcategoryId]);
    return (
        <div className='added'>
            <h1>DigitalMarketing</h1>
            <ul>
                {/* <Link to="/about"> */}
                {videos.map(video => (
                    <li key={video._id}>
                        {/* <a href={video.url} target="_blank" rel="noopener noreferrer">{video.title}</a> */}
                        <ReactPlayer ref={playerRef} url={video.url} controls={true} height={250} width={350} />

                        
                        {/* {video.title} */}
                    </li>
                ))}
                {/* </Link> */}
            </ul>
        </div>
    );
}
export default VideoList;