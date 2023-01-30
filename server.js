const fastify=require('fastify')({logger:true})
//const items=require("./item")


fastify.register(require('./Routes/items'))

const start= async()=>{
    try{
        await fastify.listen({port:5000})
    }catch(error){
        fastify.log.error(error)
        process.exit(1)
    
    }
 
}
start()