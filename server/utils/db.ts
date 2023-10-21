import moongoose from 'mongoose';
require("dotenv").config();

const dbUrl:string = process.env.DB_URL || "";

const connectDB = async ()=>{
    try{
        await moongoose.connect(dbUrl).then((data:any) =>{
            console.log(`Database is connected with ${data.connection.host}`);
        })
    }catch(error:any){
        console.log(error.message);
        setTimeout(connectDB, 5000);
    }
}

export default connectDB;