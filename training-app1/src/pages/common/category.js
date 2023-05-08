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
import { Card } from 'antd';
import Row from 'react-bootstrap/Row';
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

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
        <div class="container">
            <Row xs={2} md={3} className="g-6"></Row>
           <Card title="Card Title">
   {/* <Card.Grid style={gridStyle}>Categories</Card.Grid>  */}
   {/*  <Card.Grid hoverable={false} style={gridStyle}>
      categories
    </Card.Grid>  */} 
 {/*    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
     */}
             {/* <ul> */}

            {categories.map(category => (
                <li key={category._id}>
                    <Link to={`/categories/${category._id}/subcategories`}>
                    <Card.Grid hoverable={false} style={gridStyle}>
   {category.name}</Card.Grid>
                    </Link>
                </li>
            ))}
        {/* </ul>  */}
        </Card>

  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="col">
    <Card title="Card Title">
   <Card.Grid style={gridStyle}>Categories</Card.Grid> 
   {/*  <Card.Grid hoverable={false} style={gridStyle}>
      categories
    </Card.Grid>  */} 
 {/*    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
     */}
             {/* <ul> */}

            {categories.map(category => (
                <li key={category._id}>
                    <Link to={`/categories/${category._id}/subcategories`}>
                    <Card.Grid hoverable={false} style={gridStyle}>
   {category.name}</Card.Grid>
                    </Link>
                </li>
            ))}
        {/* </ul>  */}
        </Card>
    </div>



            {/* <select >
           

                {categories


                    ? categories.map((category) => {
                        return <option key={category._id}>
                            <Link to={`/categories/${category._id}/subcategories`}>
                                {category.name}

                            </Link>
                        </option>;
                    })
                    
                    : null}
                <option value="default">Categories</option>

            </select> 
 */}
           {/*  <Card
    style={{
      width: 300,
    }}
  >
   {categories


? categories.map((category) => {
    return <option key={category._id}>
        <Link to={`/categories/${category._id}/subcategories`}>

         {category.name} 

        </Link>
        
    </option>;

})

: null}
  <option value="default">Categories</option>  
 </Card>

 */}
 </div>
        </div>

    );
}
export default CategoryList;