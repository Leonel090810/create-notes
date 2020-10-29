const { Schema, model} = require('mongoose');

const userSchema = new Schema(

{
    useremail: {
        type: String,
        required: true,
        default: '',
        unique: true,
        trim: true

        
    },



    userpassword: {
        type: String,
        required: true,
        default: '',
        trim: true
        
    },

    username: {
        type: String,
        required: true,
        unique: false,
        trim: true
    }
    
  

    
},
{
    timestamps: true
});

module.exports = model('User', userSchema);