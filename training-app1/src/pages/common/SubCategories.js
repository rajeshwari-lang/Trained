import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';


function SubcategoryList() {
    const { categoryId } = useParams();
    const [subcategories, setSubcategories] = useState([]);
    useEffect(() => {
        async function fetchSubcategories() {
            const response = await axios.get(`http://localhost:5000/categories/${categoryId}/subcategories`);
            setSubcategories(response.data);
        }
        fetchSubcategories();
    }, [categoryId]);
    return (
        <ul>
            {subcategories.map(subcategory => (
                <li key={subcategory._id}>
                    <Link to={`/subcategories/${subcategory._id}/videos`}>
                        {subcategory.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
export default SubcategoryList;
