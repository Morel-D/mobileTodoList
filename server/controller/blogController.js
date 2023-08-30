const Blog = require('../model/blogModel');
const mongoose = require('mongoose');


// Add the records to the database
const addBlog = (req, res) => 
{
    const newBlog = new Blog(req.body);
    newBlog.save();

    Blog.find().then((results) => {
        res.json(results);
    }).catch((error) => {
        res.json(error.message)
    })
}

// Display all the records

const getBlog  = (req, res) =>
{
    Blog.find().sort({ createdAt: -1 })
    .then((results) => {
        res.json(results)
    }).catch((error) => {
        res.json(error.message)
    });
}

const getSingleBlog = (req, res) => 
{
    const id = new mongoose.Types.ObjectId(req.params.id);
    Blog.findById(id)
    .then((results) => {
        res.json(results)
    }).catch((error) => {
        res.json(error)
    })
}

const deleteBlog = (req, res) => 
{
    const id = new mongoose.Types.ObjectId(req.params.id);
    Blog.findByIdAndRemove(id).then((results) => {
        res.json(results)
    }).catch((error) => {
        res.json(error.message)
    })
}

const updateBlog = (req, res) => 
{
    const id = new mongoose.Types.ObjectId(req.params.id);
    
    const newBlog = 
    {
        content: req.body.content
    }

    Blog.findByIdAndUpdate(id, newBlog)
    .then((results) => {
        res.json(results)
    }).catch((error) => {
        res.json(error.message)
    })
}

module.exports = 
{
    addBlog,
    getBlog,
    getSingleBlog,
    deleteBlog,
    updateBlog
}