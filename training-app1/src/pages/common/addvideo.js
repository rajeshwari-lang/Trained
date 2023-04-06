import { useState } from 'react';
import axios from 'axios';
const Addvideo = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [subcategoryNames, setSubcategoryNames] = useState([]);
    const [categoryName, setCategoryName] = useState('');

    const handleAddSubcategory = () => {
        setSubcategoryNames([...subcategoryNames, '']);
    };
    const handleSubcategoryNameChange = (index, value) => {
        const newSubcategoryNames = [...subcategoryNames];
        newSubcategoryNames[index] = value;
        setSubcategoryNames(newSubcategoryNames);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/videos', {
                url: videoUrl,
                subcategories: subcategoryNames.filter(Boolean),
            });
            console.log(response.data);
            setVideoUrl('');
            setSubcategoryNames([]);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="url">Url:</label>
                <input
                    type="string"
                    id="url"
                    value={videoUrl}
                    onChange={(event) => setVideoUrl(event.target.value)}
                    required
                />
            </div>
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
            {subcategoryNames.map((subcategoryName, index) => (
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
            <button type="submit">Add video</button>
        </form>
    );
};
export default Addvideo;