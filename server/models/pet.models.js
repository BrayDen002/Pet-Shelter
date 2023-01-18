const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    name: {
        type : String,
        required: [
            true, 
            "Name must be provided"
        ]
    },
    type: {
        type : String,
        required: [
            true, 
            "Type must be provided"
        ]
    },
    description : {
        type : String,
        required : [
            true, 
            "Description must be provided"
        ]
    },
    skillOne : {
        type : String,
    },
    skillTwo : {
        type : String,
    },
    skillThree : {
        type : String,
    },
}, {timestamps:true})
module.exports.Pet = mongoose.model('Pet', ProductSchema);