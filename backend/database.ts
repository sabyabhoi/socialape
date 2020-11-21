import { MongoClient } from "https://deno.land/x/mongo@v0.13.0/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config();

const client = new MongoClient();
client.connectWithUri(env.DB_CONN);

const db = client.database('socialape');
export default db;