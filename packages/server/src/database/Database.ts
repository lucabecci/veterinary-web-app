import { createConnection } from "typeorm";
import path from "path";

class Database {
    public static async getConnection():Promise<void>{
        let retries = 5
        while(retries){
            try{
                await createConnection({
                    type: "postgres",
                    url: process.env.DB_URI,
                    synchronize: true,
                    logging: false,
                    entities: [path.join(__dirname, "../entities/*.*")],
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