let  Items=require("../items")

const getItem=function(req,reply){
    reply.send(Items)
}

const postItem=function(req,reply) {
    const{name}=req.body;
    //const{id}=req.body.id;
    const item={
        //id,
        name
    }
    items=[...Items,item]
    reply.code(201).send(item);

}

const deleteItem=function(req,reply){
    const {id}=req.params;
    Items=Items.filter(item=> item.id!=id)
    reply.send({ message: `item ${id} has been deleted`})
}
module.exports={getItem,postItem,deleteItem}