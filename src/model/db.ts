import { development_andon, development_andonnew } from "../config/db.config";
const Pool = require("pg").Pool;

export const pool = new Pool({
    user: development_andon.username,
    host: development_andon.host,
    database: development_andon.database,
    password: development_andon.password,
    port: development_andon.port,
});

export const andonnew = new Pool({
    user: development_andonnew.username,
    host: development_andonnew.host,
    database: development_andonnew.database,
    password: development_andonnew.password,
    port: development_andonnew.port,
});


//open the Postgres Connection
pool.connect((error: any) => {
    if (error) throw error;
    console.log("Successfully connected to the database Andon System");
});

andonnew.connect((error: any) => {
    if (error) throw error;
    console.log("Successfully connected to the database NEW Andon System (db:mms_nin)");
});

