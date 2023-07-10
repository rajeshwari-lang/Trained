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
  useEffect(() => {
    async function fetchCategories() {
      const response = await axios.get('http://localhost:5000/categories');
      setCategories(response.data);
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
              
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj2jma2z7jmk1gd8J1Ty4W29QlPs_lc8w1aA&usqp=CAU" />
              {/* <Card.Header>categories</Card.Header> */}


              <Card.Body style={{ height: '100px' }}>

                <Card.Text>
                  

                  <Link to={`/categories/${category._id}/subcategories`}> 

                    {category.name}      
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