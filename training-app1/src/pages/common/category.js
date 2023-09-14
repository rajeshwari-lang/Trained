/* 
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';




function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [videos, setVideos] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedVideo, setSelectedVideo] = useState('');
  const { categoryId, subcategoryId } = useParams();



  
  useEffect(() => {
    async function fetchVideos() {
      const response = await axios.get(`http://localhost:5000/subcategories/${subcategoryId}/videos`);
      setVideos(response.data);
      setCategories(response.data);

    }
    fetchVideos();
  }, [categoryId, subcategoryId]);
  useEffect(() => {
    async function fetchCategories() {
      const response = await axios.get('http://localhost:5000/categories');
      setCategories(response.data);
      setVideos(response.data);

    }
    fetchCategories();
  }, []);


  var onClick1 = (event) => {
    const selectedCategory = event.target.value;

    setSelectedCategory(selectedCategory);

    const category = categories.find((c) => c.name === selectedCategory);
    setSubcategories(category.subcategories);




  };
  const onClick = (event) => {
    const selectedSubcategory = event.target.value;

    setSelectedSubcategory(selectedSubcategory);

    const subcategory = subcategories.find((c) => c.name === selectedSubcategory);
    setVideos(subcategory.videos);




  };





  return (

    <div>

      <select value={selectedCategory} onChange={onClick1}>
        <option value="">Categories</option>

        {categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>

        ))}

      </select>

      {subcategories.length > 0 && (
        <div>
          <select value={selectedSubcategory} onChange={onClick}>
            <option value=""> Subcategories</option>
            {subcategories.map((subcategory) => (
              <option key={subcategory.name} value={subcategory.name}>
                {subcategory.name}
              </option>
            ))}
          </select>




          <select value={selectedVideo} onChange={onClick}>
            <option value=""> VideoList</option>
            {videos.map((video) => (
              <option key={video._id} value={video.title}>
                {video.title}
              </option>

            ))}
          </select>



        </div>
      )}

    </div>

  );

}

export default CategoryList;


 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await axios.get('http://localhost:5000/categories');
      setCategories(response.data);
      setImageUrl(response.data);
    }
    fetchCategories();
  }, []);
  
  return (
    <Row xs={1} md={3} className="g-4">
      {
        categories.map(category => (
          <Col>
     <a class="thumbnail" href=""> 
            <Card> 
              <Card.Img variant="top" style={{ height: '100px' }}
              
              src="data:image/jpeg;base64,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"/>
                
              {/* <Card.Header>categories</Card.Header> */}


              <Card.Body style={{ height: '100px' }}>

                <Card.Text>
                  

                  <Link to={`/categories/${category._id}/subcategories`} > 

                    {category.name} 
                    {category.imageUrl}     
</Link>
                </Card.Text>


              </Card.Body>
            </Card>
            </a>
          </Col>
        ))}
    </Row>

  );
}
export default CategoryList;