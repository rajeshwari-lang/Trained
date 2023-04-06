
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'antd';

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
        <div>
            {/* <ul>
            
            {categories.map(category => (
                <li key={category._id}>
                    <Link to={`/categories/${category._id}/subcategories`}>
                        {category.name}
                    </Link>
                </li>
            ))}
        </ul> */}


            <select >
           

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

    );
}
export default CategoryList;
