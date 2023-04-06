const mongoose = require('mongoose');
const subcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }, 
    videos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Video',
        },
    ],
});
module.exports = mongoose.model('Subcategory', subcategorySchema);