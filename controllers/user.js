const{response,request}=require('express')

const userGet=(req=request,res=response)=>{
    //res.send('Hello')
    /*
    res.status(403).json({
        msg:'get API'
    })*/    
    const {age,au,v}=req.query
    res.json({
        msg:'get api- controller modif',
        age,au,v
    })
}

const userPost=(req,res=response)=>{
    const body=req.body
    res.json({
        msg:'post api-controller modif',
        body:body
    })
}
const userPut=(req,res=response)=>{
    let {id}=req.params
    res.json({
        msg:'put api-controller modif',
        id
    })
}
const userDelete=(req,res=response)=>{
    res.json({
        msg:'delete api-controller modif'
    })
}

module.exports={
    userGet,
    userPost,
    userPut,
    userDelete
}