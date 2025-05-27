const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    number:{
        type: String,
        required: true
    },
    terraceSize:{
        type:number,
        required: true
    },
    monthylConsumption:{
        type:[Number],
    },
    recommendedCapacity:{
        type: String,
    },

    submittedAt:{
        type: Date,
        default: Date.now
    }

}); 


module.exports = mongoose.model('Customer', customerSchema);
