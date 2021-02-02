
import { Consult } from "../entities/Consult";
import { Pet } from "../entities/Pet";
import { User } from "../entities/User";
import { createConnection } from "typeorm";

class Database {
    public static async getConnection():Promise<void>{
        let retries = 5
        while(retries){
            try{
                await createConnection({
                    type: "postgres",
                    url: process.env.DB_URI,
                    entities: [User, Consult, Pet]
                })
                console.log('DB is connected')
                break
            }
            catch(e){
                console.log(e);
                retries -= 1;
                console.log("retries:", retries);
                await new Promise((res) => setTimeout(res, 5000));
            }
        }
    }
}

export default Database