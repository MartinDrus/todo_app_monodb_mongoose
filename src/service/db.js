import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config();



let connection;
export async function getDbConnection(){
    if (connection === undefined) {
        try {
        
            mongoose.set('strictQuery', true)
    
            // versuche verbindung zur db aufzubauen
            connection = await mongoose.createConnection(process.env.DB_URI + process.env.DB_NAME, {
                maxPoolSize: 10,
                maxConnecting: 3
            }).asPromise();

            console.log('Connection to DB successful!');
    
        } catch (error) {
            console.error(error);
        }
    }

    return connection;
}


/* 
    Alternativ kann die Verbindung auch einmalig ueber mongoose.connect aufgebaut werden,
    so dass sie als 'default' Connection in mongoose gehalten wird.
    So kann sich immer nur mit einer Datenbank gleichzeitig verbunden werden, erspart uns jedoch evtl.
    etwas Komplexitaet, weil wir uns dann fast gar nicht um die Verbindung kuemmern muessen ausser sie einmal aufzubauen.
*/
/* 
    Diese Funktion wuerde man einmalig in der index.js aufrufen und ab dann,
    immer ueber mongoose die Models anmelden etc.
*/
export async function connectToDb() {
    try {
        await mongoose.connect(config.dbUri + config.dbName, {
            maxPoolSize: 10
        });

        console.log('Connection to DB established');

    } catch (error) {
        console.error(error);
    }
}
