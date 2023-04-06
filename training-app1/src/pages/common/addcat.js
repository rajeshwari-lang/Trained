
import { useState } from 'react';
import axios from 'axios';
const AddCategory = () => {
    const [categoryName, setCategoryName] = useState('');
    const [subcategoryName, setSubcategoryName] = useState([]);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState([]);
     
    //subcategory
    const handleAddSubcategory = () => {
        setSubcategoryName([...subcategoryName, '']);
    };
    const handleSubcategoryNameChange = (index, value) => {
        const newSubcategoryName = [...subcategoryName];
        newSubcategoryName[index] = value;
        setSubcategoryName(newSubcategoryName);
    };
   // video
    const handleAddVideo = () => {
        setUrl([...url, '']);
    };
    const handleVideoChange = (index, value) => {
        const newUrl = [...url];
        newUrl[index] = value;
        setUrl(newUrl);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Add the new category and subcategory
            const categoryResponse = await axios.post('http://localhost:5000/categories', {
                name: categoryName,
                subcategories: subcategoryName.filter(Boolean),           
             });
            const subcategoryId = categoryResponse.data.subcategories[0]._id;
            // Add the new video to the subcategory
            const videoResponse = await axios.post(`http://localhost:5000/subcategories/${subcategoryId}/videos`, {
                title,
                url,
            });
            console.log(videoResponse.data);
            setCategoryName('');
            setSubcategoryName([]);
            setTitle('');
            setUrl([]);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="category-name">Category name:</label>
                <input
                    type="text"
                    id="category-name"
                    value={categoryName}
                    onChange={(event) => setCategoryName(event.target.value)}
                    required
                />
            </div>
            {subcategoryName.map((subcategoryName, index) => (
                <div key={index}>
                    <label htmlFor={`subcategory-name-${index}`}>Subcategory name:</label>
                    <input
                        type="text"
                        id={`subcategory-name-${index}`}
                        value={subcategoryName}
                        onChange={(event) => handleSubcategoryNameChange(index, event.target.value)}
                    />
                </div>
            ))}
            <button type="button" onClick={handleAddSubcategory}>
                Add subcategory
            </button><br />
            <div>
                <label htmlFor="title">Video title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                />
            </div>
            {url.map((url, index) => (
                <div key={index}>
                    <label htmlFor={`url-${index}`}>video url:</label>
                    <input
                        type="text"
                        id={`url-${index}`}
                        value={url}
                        onChange={(event) => handleVideoChange(index, event.target.value)}
                    />
                </div>
            ))}
            <button type="button" onClick={handleAddVideo}>
                Add url
            </button><br />
            
            <button type="submit">Add</button>
        </form>
    );
};
export default AddCategory;