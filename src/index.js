import connectDB from "./db/index.js";
import dotenv from "dotenv"
// database mein error handling har baar karni padegi aur asunchronous behavious bhi show karta hai to async await bhi use karna padega
 
dotenv.config({
 path: './env'  
})

connectDB();



/*const connectDB = async()=> {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.listen(process.env.PORT, ()=>{
        console.log(`PORT Nu:${process.env.PORT}`);
      })
    } catch (error) {
        console.log("Error:", error);
        throw error
    }
}*/


