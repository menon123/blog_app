import mongoose from "mongoose"


const Connection= async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-lxq33fq-shard-00-00.k3ksxjz.mongodb.net:27017,ac-lxq33fq-shard-00-01.k3ksxjz.mongodb.net:27017,ac-lxq33fq-shard-00-02.k3ksxjz.mongodb.net:27017/?ssl=true&replicaSet=atlas-q55na9-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{

        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log('Database connected successfully');
    }catch(error){
        console.log('error while connecting to database',error);

    }
}
export default Connection;