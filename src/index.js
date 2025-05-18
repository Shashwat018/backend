import connectDB from "./db/index.js";
import dotenv from "dotenv"
// database mein error handling har baar karni padegi aur asunchronous behavious bhi show karta hai to async await bhi use karna padega

dotenv.config({
  path: './env'
})

connectDB()
  //jab app connect ho jaye {successfully}, tabh PORT pe listen hoga app
  .then(() => {
    app.listen(process.env.PORT || 8000 /* OR operator lagake ek aur port dena chahiye jo, aae error aane mein resolve ho jayega aar port khali nahi hai to*/, () => {
      console.log(`Server listen at : ${process.env.PORT}`);
    })
  })
  .catch((err) => {
    console.log("MONGODB FAILED!!:", err)
  })


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


