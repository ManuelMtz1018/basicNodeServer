const express=require('express')
const cors=require('cors')

class Server{

    constructor(){
        this.app=express()
        this.port=process.env.PORT 
        //this.user='/api/user'
        this.user="/"
        //Middlewares
        this.middlewares()          
        ///Routes
        this.routes()
    }
    middlewares(){
        //CORS
        this.app.use(cors())
        //JSON Parse
        this.app.use(express.json())
        ///Note:it's not neccesary specify '/' in routes
        //This will charge index file automatically 
        this.app.use(express.static('public'))          
    }

    routes(){
        this.app.use(this.user, require('../routes/user') )  
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Listening ${this.port}`)
        })
    }

}

module.exports=Server