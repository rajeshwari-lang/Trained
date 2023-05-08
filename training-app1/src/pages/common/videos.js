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
                {videos.map(video => (
                    <li key={video._id}>
                        <ReactPlayer ref={playerRef} url={video.url} controls={true} height={250} width={350} />

                        
                         {video.title} 
                    </li>
                ))}
            </ul>
        </div>
    );
} 
export default VideoList; 

/* import React, { useState, useEffect } from 'react';

function VideoList() {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/subcategories/${subcategoryId}/videos')
      .then(response => response.json())
      .then(data => {
        setVideos(data);
        setCategories([...new Set(categories.map(video => video.category))]);
      })
      .catch(error => console.error(error));
  });

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
    setSelectedSubcategory('');
  };

  const handleSubcategoryChange = event => {
    setSelectedSubcategory(event.target.value);
    const filteredVideos = videos.filteredVideos(video => 
      video.category === selectedCategory && video.subcategory === selectedSubcategory
    );
    const selectedVideo = filteredVideos[0];
    // update video player with selectedVideo URL
setVideos(selectedVideo);
  };

  const subcategories = [...new Set(videos.filteredVideos(video => video.category === selectedCategory).map(video => video.subcategory))];

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        {categories.map(category => <option key={category.name} value={category}>{category.name}</option>)}
      </select>
      <select value={selectedSubcategory} onChange={handleSubcategoryChange}>
        <option value="">Select a subcategory</option>
        {subcategories.map(subcategory => <option key={subcategory.name} value={subcategory}>{subcategory.name}</option>)}
      </select>
  /*   </div>
  );
}

export default VideoList; */ 