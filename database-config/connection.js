const mongoClient = require('mongodb').MongoClient
const state = {
    db:null
}

module.exports.connect = function(done){
    const url = 'mongodb://localhost:27017'
    const dbname = 'Foodora'

    mongoClient.connect(url,(err,data)=>{
        console.log("connected");
        if(err) return done(err)
        state.db=data.db(dbname)
        done()
    })
    
    
}

module.exports.get=function(){
    return state.db
} 
