const mongoose = require('mongoose')

async function connect(){
    
    mongoose.connect("mongodb+srv://admin:admin@cluster0.4liqm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    mongoose.connection
    .once('open',()=> console.log('Database ATN has been connected !!!'))
    .on('error',(error)=>{
        console.log("Can not connect to Database !!!", error)
    })
    }

module.exports = { connect }
