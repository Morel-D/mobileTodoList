const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema(
    {
        content: 
        {
            type: String,
            require: true
        }
    }, 
    {
        timestamps: true
    }
)

const blogModel = mongoose.model('List', blogSchema);

module.exports = blogModel;