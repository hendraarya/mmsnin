import { pool, andonnew } from "./db";
import knex, { Knex } from "knex";
import { development_andon, development_andonnew } from "../config/db.config";

// Start if use Query Basic
export const queryCustomPgsql = (customQuery: string, param: any, switchquery: any, result: any) => {
    if (switchquery == 'dbandon') {
        pool.query(customQuery, param, (err: any, res: any) => {
            if (err) {
                console.log("error:", err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    }
    else if (switchquery == 'dbandonnew') {
        andonnew.query(customQuery, param, (err: any, res: any) => {
            if (err) {
                console.log("error:", err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    }
};


// End if use Query Basic

// Start if use QueryBuilder
export const QueryBuilderandon: Knex = knex({
    client: "pg",
    connection: {
        host: development_andon.host,
        port: development_andon.port,
        user: development_andon.username,
        password: development_andon.password,
        database: development_andon.database,

    },
});

export const QueryBuilderandonnew: Knex = knex({
    client: "pg",
    connection: {
        host: development_andonnew.host,
        port: development_andonnew.port,
        user: development_andonnew.username,
        password: development_andonnew.password,
        database: development_andonnew.database,

    },
});
// End if use QueryBuilder