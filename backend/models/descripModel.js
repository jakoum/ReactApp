const mongoose = require('mongoose')

const UserSchema1= mongoose.Schema(
    
    {
    description:{ 
        type:String, 
        required:true},
    
    date: {type:Date,
        defaut:Date.now}

},
{
    collection: 'mytables',
    autoIndex: false
  },
  { typeKey: '$type' }
)
const mytables=mongoose.model('mytables',UserSchema1)
module.exports=mytables