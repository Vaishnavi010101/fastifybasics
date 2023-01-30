const {getItem, postItem,deleteItem}=require('../Controller/itemController')

const getItemsOpts={
    schema: {
        response :{
        200: {
            type:'array',
           items:{
                type:'object',
                properties:{
                    //id:{type:'string'},
                       name:{ type:'string'  }
                    }
                }

            }
        }
    },
    handler: getItem, 
}


const postItemsOpts={
    schema: {
        response :{
        201: {
            
          //  items:{
                type:'object',
                properties:{
                    //id:{type:'string'},
                       name:{ type:'string'  }
                    }
                }

            }
       // }
    },
    handler: postItem, 
}

const deleteItemOtps={
schema: {
    response :{
    200: {
        
      //  items:{
            type:'object',
            properties:{
                //id:{type:'string'},
                   message:{ type:'string'  }
                }
            }

        }
   // }
},
handler: deleteItem, 
}
function itemRoute(fastify,options,done){

fastify.get('/items',getItemsOpts)
 
fastify.get('/items/:id',(req,reply)=>{
    const {id}=req.params;
    const i =items.find((item)=> item.id===id)
    reply.send(i); 

})
//POST request

fastify.post('/items',postItemsOpts)
fastify.delete('/items/:id',deleteItemOtps)
done()
}
module.exports=itemRoute