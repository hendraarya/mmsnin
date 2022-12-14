"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.andonnew = exports.pool = void 0;
const db_config_1 = require("../config/db.config");
const Pool = require("pg").Pool;
exports.pool = new Pool({
    user: db_config_1.development_andon.username,
    host: db_config_1.development_andon.host,
    database: db_config_1.development_andon.database,
    password: db_config_1.development_andon.password,
    port: db_config_1.development_andon.port,
});
exports.andonnew = new Pool({
    user: db_config_1.development_andonnew.username,
    host: db_config_1.development_andonnew.host,
    database: db_config_1.development_andonnew.database,
    password: db_config_1.development_andonnew.password,
    port: db_config_1.development_andonnew.port,
});
//open the Postgres Connection
exports.pool.connect((error) => {
    if (error)
        throw error;
    console.log("Successfully connected to the database Andon System");
});
exports.andonnew.connect((error) => {
    if (error)
        throw error;
    console.log("Successfully connected to the database NEW Andon System (db:mms_nin)");
});
