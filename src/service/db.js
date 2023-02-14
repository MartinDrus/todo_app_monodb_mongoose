import mongoose from "mongoose";

console.log(process.env.DB_URI + process.env.DB_NAME);

export async function connectDB(){
    try {
        // versuche verbindung zur db aufzubauen
        let conn = await mongoose.connect(process.env.DB_URI + process.env.DB_NAME);
    } catch (error) {
        console.error(error);
    }
}

